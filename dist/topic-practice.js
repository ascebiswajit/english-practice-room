const topicClock = createPracticeClock();
let topicState = 'idle';
let topicInterval = null;
let topicCurrent = null;
let topicAttempt = null;
let topicResponses = [];
let topicWarned = false;
const topicControlIds = ['topicCategory','topicChoice','topicMode','topicLevel'];
const countTopicWords = value => value.trim() ? value.trim().split(/\s+/u).length : 0;
const topicFields = () => Array.from($('topicAnswerArea').querySelectorAll('textarea'));

$('topicCategory').innerHTML = TOPIC_CATEGORIES.map(c => `<option value="${c.id}">${c.id}. ${esc(c.name)}</option>`).join('');
$('topicLevel').innerHTML = TOPIC_LEVELS.map(l => `<option value="${l.level}">Level ${l.level} · ${esc(l.name)}</option>`).join('');
function loadTopicChoices() {
  const topics = TOPIC_BANK.filter(t => t.category === Number($('topicCategory').value));
  $('topicChoice').innerHTML = topics.map(t => `<option value="${t.id}">${esc(t.title)}</option>`).join('');
  prepareTopic();
}
function prepareTopic() {
  clearInterval(topicInterval);
  topicInterval = null;
  topicClock.reset();
  topicState = 'idle';
  topicAttempt = null;
  topicResponses = [];
  topicWarned = false;
  topicCurrent = TOPIC_BANK.find(t => t.id === $('topicChoice').value);
  const category = TOPIC_CATEGORIES.find(c => c.id === topicCurrent.category);
  const essay = $('topicMode').value === 'essay';
  const level = TOPIC_LEVELS[Number($('topicLevel').value)-1];
  $('topicLevelWrap').hidden = essay;
  $('topicBadge').textContent = `CATEGORY ${category.id} · ${essay ? 'ESSAY WRITING' : 'READING · LEVEL '+level.level}`;
  $('topicTitle').textContent = topicCurrent.title;
  $('topicTask').textContent = essay
    ? 'Write 120–180 words: introduce the issue, weigh an opportunity against a limitation, and conclude with a reasoned recommendation. You have 20 minutes.'
    : `${level.name}: read the topic’s editorial passage and answer three written questions in ${level.minutes} minutes. The passage and questions appear when you start.`;
  $('topicTimer').textContent = formatPracticeTime((essay ? 20 : level.minutes) * 60);
  $('topicTimer').parentElement.classList.remove('urgent');
  $('topicChecks').innerHTML = category.checks.map(c => `<li>${esc(c)}</li>`).join('');
  $('topicSources').innerHTML = category.sources.map(([label,url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`).join('');
  topicControlIds.forEach(id => $(id).disabled = false);
  $('topicWork').hidden = true;
  $('topicPassage').replaceChildren();
  $('topicAnswerArea').replaceChildren();
  $('topicResult').replaceChildren();
  $('topicResult').hidden = true;
  $('topicStart').hidden = false;
  $('topicSubmit').hidden = false;
  $('topicNext').hidden = true;
  $('topicStatus').textContent = 'Review the preparation checklist, then start. Answers are revealed after submission. Only one timed attempt can run at a time.';
}
function startTopic() {
  if (topicState !== 'idle') return;
  if (poState === 'running') {
    $('topicStatus').textContent = 'Finish the active Bank PO challenge before starting a topic attempt.';
    return;
  }
  const mode = $('topicMode').value;
  const level = Number($('topicLevel').value);
  const duration = (mode === 'essay' ? 20 : TOPIC_LEVELS[level-1].minutes) * 60;
  topicAttempt = {mode,level,duration,questions:mode === 'reading' ? topicQuestions(topicCurrent,level) : []};
  topicResponses = Array(mode === 'essay' ? 1 : 3).fill('');
  $('topicWork').hidden = false;
  $('topicStart').hidden = true;
  topicControlIds.forEach(id => $(id).disabled = true);
  $('topicAnswerHeading').textContent = mode === 'essay' ? 'Your essay' : 'Your understanding';
  $('topicTextLabel').textContent = mode === 'essay' ? 'WRITING PROMPT' : 'READING PASSAGE';
  $('topicWords').textContent = mode === 'essay' ? '120–180 word practice target' : countTopicWords(topicCurrent.paragraphs.join(' '))+' words';
  $('topicPassage').innerHTML = `<h2>${esc(topicCurrent.title)}</h2>` + (mode === 'essay'
    ? '<p>Develop a balanced argument in your own words. Explain why the topic matters, consider both benefits and risks, and suggest a practical way forward.</p><p>A short model response and a self-review checklist will appear after submission. Numerical claims are optional; use only evidence you have verified and can date.</p>'
    : topicCurrent.paragraphs.map(p => `<p>${esc(p)}</p>`).join(''));
  $('topicAnswerArea').innerHTML = mode === 'essay'
    ? '<div class="question"><label for="topicEssay">Essay response</label><textarea id="topicEssay" data-topic-answer="0" maxlength="12000" placeholder="Introduce your position, develop your argument, and write a clear conclusion…" spellcheck="true"></textarea></div><p id="topicCount" class="topic-progress" aria-live="polite">0 words · target 120–180</p>'
    : topicAttempt.questions.map(([q],i) => `<div class="question"><label for="topicAnswer${i}"><strong>0${i+1}.</strong> ${esc(q)}</label><textarea id="topicAnswer${i}" data-topic-answer="${i}" maxlength="3000" placeholder="Answer in your own words…"></textarea></div>`).join('')+'<p id="topicCount" class="topic-progress">0 / 3 answered</p>';
  topicState = 'running';
  topicClock.start(duration);
  $('topicStatus').textContent = 'Timer running. Switching tabs does not pause the attempt. It submits automatically at zero.';
  topicInterval = setInterval(tickTopic,250);
  tickTopic();
}
function tickTopic() {
  if (topicState !== 'running') return;
  const remaining = topicClock.remaining();
  $('topicTimer').textContent = formatPracticeTime(remaining);
  $('topicTimer').parentElement.classList.toggle('urgent',remaining <= 60);
  if (!remaining) { finishTopic(true); return; }
  if (remaining <= 60 && !topicWarned) {
    topicWarned = true;
    $('topicStatus').textContent = 'One minute or less remains. Finish your response before automatic submission.';
  }
}
function updateTopicCount() {
  $('topicCount').textContent = topicAttempt.mode === 'essay'
    ? `${countTopicWords(topicResponses[0])} words · target 120–180`
    : `${topicResponses.filter(r => r.trim()).length} / 3 answered`;
}
function finishTopic(expired = false) {
  if (topicState !== 'running') return;
  const remaining = topicClock.remaining();
  expired = expired || remaining === 0;
  topicState = 'submitted';
  clearInterval(topicInterval);
  topicInterval = null;
  const used = topicAttempt.duration - (expired ? 0 : remaining);
  $('topicTimer').textContent = formatPracticeTime(expired ? 0 : remaining);
  topicFields().forEach((field,i) => {field.value = topicResponses[i];field.readOnly = true;});
  topicControlIds.forEach(id => $(id).disabled = false);
  $('topicSubmit').hidden = true;
  $('topicNext').hidden = topicAttempt.mode !== 'reading' || topicAttempt.level === 10;
  $('topicStatus').textContent = expired ? 'Time is up. Your responses are locked for review.' : 'Submitted. Compare the reasoning, not the exact wording.';
  updateTopicCount();
  const summary = topicAttempt.mode === 'essay'
    ? `${countTopicWords(topicResponses[0])} words written`
    : `${topicResponses.filter(r=>r.trim()).length} of 3 questions answered`;
  const models = topicAttempt.mode === 'essay'
    ? `<h4>Short model response</h4>${topicCurrent.paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}`
    : '<h4>Model answers</h4>'+topicAttempt.questions.map(([q,a],i)=>`<div class="topic-review"><strong>${i+1}. ${esc(q)}</strong><p>${esc(a)}</p></div>`).join('');
  const rubric = topicAttempt.mode === 'essay'
    ? ['I answered the topic and stated a clear position.','I considered an opportunity and a limitation.','My paragraphs connect logically and lead to a conclusion.','I checked grammar and spelling, and avoided invented facts.']
    : ['I supported my answers with the passage.','I separated stated facts from inference and opinion.','I answered the level’s question without claiming more than the passage supports.'];
  $('topicResult').innerHTML = `<strong>${expired ? 'Time finished' : 'Attempt completed'} · ${formatPracticeTime(used)} used</strong><p>${summary}. This is self-assessment, not an automatic mark.</p>${models}<h4>Review your work</h4>${rubric.map((r,i)=>`<label class="topic-self-review"><input type="checkbox" data-topic-review="${i}">${esc(r)}</label>`).join('')}<p id="topicReviewCount">0 of ${rubric.length} checks self-confirmed.</p>${topicAttempt.mode === 'reading' && topicAttempt.level === 10 ? '<p>Level 10 complete. Choose another topic or try the essay mode.</p>' : ''}`;
  $('topicResult').hidden = false;
  $('topicResult').focus();
}
$('topicAnswerArea').addEventListener('input',event=>{
  if (topicState !== 'running' || !event.target.matches('textarea[data-topic-answer]')) return;
  if (!topicClock.remaining()) {finishTopic(true);return;}
  topicResponses[Number(event.target.dataset.topicAnswer)] = event.target.value;
  updateTopicCount();
});
$('topicResult').addEventListener('change',event=>{
  if (topicState !== 'submitted' || !event.target.matches('[data-topic-review]')) return;
  const all = $('topicResult').querySelectorAll('[data-topic-review]');
  const checked = $('topicResult').querySelectorAll('[data-topic-review]:checked');
  $('topicReviewCount').textContent = `${checked.length} of ${all.length} checks self-confirmed.`;
});
$('topicForm').addEventListener('submit',event=>{
  event.preventDefault();
  if (topicState !== 'running') return;
  if (!topicClock.remaining()) {finishTopic(true);return;}
  const missing = topicResponses.filter(r=>!r.trim()).length;
  if (missing && !confirm('Some responses are blank. Submit this attempt anyway?')) {tickTopic();return;}
  finishTopic();
});
$('topicStart').onclick = startTopic;
$('topicCategory').onchange = loadTopicChoices;
$('topicChoice').onchange = prepareTopic;
$('topicMode').onchange = prepareTopic;
$('topicLevel').onchange = prepareTopic;
$('topicReset').onclick = ()=>{
  if (!confirm('Clear this attempt and reset its timer?')) {tickTopic();return;}
  prepareTopic();
};
$('topicNext').onclick = ()=>{
  if (topicState !== 'submitted' || topicAttempt.mode !== 'reading' || topicAttempt.level >= 10) return;
  $('topicLevel').value = String(topicAttempt.level+1);
  prepareTopic();
  $('topicStart').focus();
};
document.addEventListener('visibilitychange',tickTopic);
window.addEventListener('focus',tickTopic);
window.addEventListener('beforeunload',event=>{
  if (topicState === 'running') {event.preventDefault();event.returnValue='';}
});
loadTopicChoices();
