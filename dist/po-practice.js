/* The deadline is wall-clock based, so background-tab throttling does not add time. */
function createPracticeClock(now = () => Date.now()) {
  let deadline = null;
  return {
    start(seconds) { deadline = now() + seconds * 1000; },
    remaining() { return deadline === null ? 0 : Math.max(0, Math.ceil((deadline - now()) / 1000)); },
    reset() { deadline = null; }
  };
}
function formatPracticeTime(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}
const poClock = createPracticeClock();
let poState = 'idle';
let poTickId = null;
let poWarned = false;
let poCurrent = null;
let poDuration = 0;
let poAnswers = [];
const poFields = () => Array.from($('poQuestions').querySelectorAll('textarea'));

$('poTopic').innerHTML = PO_TOPICS.map(t => `<option value="${t.id}">${esc(t.label)}</option>`).join('');
$('poLevel').innerHTML = PO_LEVELS.map(l => `<option value="${l.level}">Level ${l.level} · ${esc(l.skill)}</option>`).join('');

function preparePO() {
  clearInterval(poTickId);
  poTickId = null;
  poClock.reset();
  poState = 'idle';
  poWarned = false;
  const level = Number($('poLevel').value);
  poCurrent = PO_SETS[$('poTopic').value][level - 1];
  poDuration = PO_LEVELS[level - 1].minutes * 60;
  $('poSkill').textContent = `LEVEL ${level} / 10 · ${PO_LEVELS[level - 1].skill}`;
  $('poTitle').textContent = poCurrent.title;
  $('poDetails').textContent = `${PO_LEVELS[level - 1].minutes} minutes · ${poCurrent.questions.length} written questions`;
  $('poTimer').textContent = formatPracticeTime(poDuration);
  $('poTimer').parentElement.classList.remove('urgent');
  $('poWork').hidden = true;
  $('poPassage').replaceChildren();
  $('poQuestions').replaceChildren();
  $('poResult').hidden = true;
  $('poStart').hidden = false;
  $('poSubmit').hidden = false;
  $('poNext').hidden = true;
  $('poTopic').disabled = false;
  $('poLevel').disabled = false;
  $('poStatus').textContent = 'Choose a topic and level, then start when you are ready. Reloading leaves this attempt; answers are not saved.';
  $('poAnswered').textContent = `0 / ${poCurrent.questions.length} answered`;
  poAnswers = [];
}
function updatePOCount() {
  const count = poFields().filter(f => f.value.trim()).length;
  $('poAnswered').textContent = `${count} / ${poCurrent.questions.length} answered`;
}
function startPO() {
  if (poState !== 'idle') return;
  if (typeof topicState !== 'undefined' && topicState === 'running') { $('poStatus').textContent = 'Finish the active Topic library attempt before starting this challenge.'; return; }
  poAnswers = poCurrent.questions.map(() => '');
  $('poSetLabel').textContent = `${PO_TOPICS.find(t => t.id === $('poTopic').value).label} · LEVEL ${$('poLevel').value}`;
  $('poPassage').innerHTML = `<h2>${esc(poCurrent.title)}</h2>` + poCurrent.paragraphs.map(p => `<p>${esc(p)}</p>`).join('');
  $('poQuestions').innerHTML = poCurrent.questions.map(([question],i) => `<div class="question"><label for="poAnswer${i}"><strong>0${i+1}.</strong> ${esc(question)}</label><textarea id="poAnswer${i}" data-answer="${i}" maxlength="2500" placeholder="Write your answer in your own words…"></textarea><div class="modelanswer" id="poModel${i}" hidden></div></div>`).join('');
  $('poWork').hidden = false;
  $('poStart').hidden = true;
  $('poTopic').disabled = true;
  $('poLevel').disabled = true;
  $('poStatus').textContent = 'Practice in progress. Read the passage and answer in your own words.';
  poState = 'running';
  poClock.start(poDuration);
  poTickId = setInterval(tickPO, 250);
  tickPO();
}
function tickPO() {
  if (poState !== 'running') return;
  const remaining = poClock.remaining();
  $('poTimer').textContent = formatPracticeTime(remaining);
  $('poTimer').parentElement.classList.toggle('urgent', remaining <= 60);
  if (remaining === 0) { finishPO(true); return; }
  if (remaining <= 60 && !poWarned) {
    poWarned = true;
    $('poStatus').textContent = 'One minute or less remains. Your answers will be submitted automatically when time runs out.';
  }
}
function finishPO(expired = false) {
  if (poState !== 'running') return;
  const remaining = poClock.remaining();
  expired = expired || remaining === 0;
  poState = 'submitted';
  clearInterval(poTickId);
  poTickId = null;
  $('poTimer').textContent = formatPracticeTime(expired ? 0 : remaining);
  poCurrent.questions.forEach(([, answer], i) => {
    const field = $('poAnswer' + i);
    // Restore the last response captured before expiry if an input event arrives late.
    field.value = poAnswers[i];
    field.readOnly = true;
    const model = $('poModel' + i);
    model.hidden = false;
    model.innerHTML = `<strong>Model answer</strong>${esc(answer)}<label class="self-check"><input type="checkbox" data-self-review="${i}">My answer includes the key idea</label>`;
  });
  updatePOCount();
  $('poSubmit').hidden = true;
  $('poNext').hidden = Number($('poLevel').value) === 10;
  $('poTopic').disabled = false;
  $('poLevel').disabled = false;
  $('poStatus').textContent = expired ? 'Time is up. Your saved responses for this attempt have been submitted.' : 'Practice submitted. Compare your responses with the model answers.';
  const answered = poAnswers.filter(a => a.trim()).length;
  $('poResult').hidden = false;
  $('poResult').innerHTML = `<strong>${expired ? 'Time finished' : 'Set completed'} · Level ${$('poLevel').value}</strong>${answered} of ${poCurrent.questions.length} questions answered · Time used: ${formatPracticeTime(poDuration - (expired ? 0 : remaining))}.<br>Compare the meaning, not the exact wording. The checkboxes are your own review; this is not an automatically marked exam score.<br><span id="poReviewed">0 of ${poCurrent.questions.length} key ideas self-confirmed.</span>${Number($('poLevel').value) === 10 ? '<br>You reached level 10 in this topic. Choose another topic to continue.' : ''}`;
  $('poResult').focus();
}
$('poQuestions').addEventListener('input', event => {
  if (!event.target.matches('textarea[data-answer]')) return;
  if (poState !== 'running') return;
  if (poClock.remaining() === 0) { finishPO(true); return; }
  poAnswers[Number(event.target.dataset.answer)] = event.target.value;
  updatePOCount();
});
$('poQuestions').addEventListener('change', event => {
  if (!event.target.matches('[data-self-review]') || poState !== 'submitted') return;
  const checked = $('poQuestions').querySelectorAll('[data-self-review]:checked').length;
  $('poReviewed').textContent = `${checked} of ${poCurrent.questions.length} key ideas self-confirmed.`;
});
$('poForm').addEventListener('submit', event => {
  event.preventDefault();
  if (poState !== 'running') return;
  if (poClock.remaining() === 0) { finishPO(true); return; }
  const missing = poAnswers.filter(a => !a.trim()).length;
  if (missing && !confirm(`${missing} question${missing === 1 ? ' is' : 's are'} unanswered. Submit this attempt now?`)) { tickPO(); return; }
  finishPO();
});
$('poStart').onclick = startPO;
$('poTopic').onchange = preparePO;
$('poLevel').onchange = preparePO;
$('poRestart').onclick = () => {
  if (!confirm('Clear these responses and reset the timer for this set?')) { tickPO(); return; }
  preparePO();
};
$('poNext').onclick = () => {
  if (poState !== 'submitted' || Number($('poLevel').value) >= 10) return;
  $('poLevel').value = String(Number($('poLevel').value) + 1);
  preparePO();
  $('poStart').focus();
};
document.addEventListener('visibilitychange', tickPO);
window.addEventListener('focus', tickPO);
window.addEventListener('beforeunload', event => {
  if (poState === 'running') { event.preventDefault(); event.returnValue = ''; }
});
preparePO();
