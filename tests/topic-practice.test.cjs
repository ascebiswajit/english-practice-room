// Behaviour checks use a minimal DOM fixture, not a browser renderer.
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.join(__dirname,'..'),nodes=new Map(),intervals=new Map();
let time=1000,intervalId=0,confirmation=true;
class Element {
 constructor(id){this.id=id;this.value='';this.hidden=false;this.disabled=false;this.dataset={};this.listeners={};this.parentElement=this;this.classList={remove(){},toggle(){}};}
 set innerHTML(html){
  this.html=html;
  if(['topicCategory','topicChoice','topicLevel'].includes(this.id))this.value=html.match(/<option value="([^"]+)"/)?.[1]||'';
  if(this.id==='topicAnswerArea'){
   for(const id of [...nodes.keys()])if(id==='topicEssay'||/^topicAnswer\d+$/.test(id))nodes.delete(id);
  }
  for(const match of html.matchAll(/id="(topicEssay|topicAnswer\d+|topicCount|topicReviewCount)"/g)){
   const field=new Element(match[1]);field.dataset.topicAnswer=match[1]==='topicEssay'?'0':match[1].replace('topicAnswer','');nodes.set(match[1],field);
  }
 }
 get innerHTML(){return this.html||'';}
 replaceChildren(){this.innerHTML='';}
 addEventListener(name,fn){this.listeners[name]=fn;}
 matches(selector){return selector==='textarea[data-topic-answer]'&&(this.id==='topicEssay'||/^topicAnswer\d+$/.test(this.id));}
 querySelectorAll(selector){return selector==='textarea'?[...nodes.values()].filter(n=>n.id==='topicEssay'||/^topicAnswer\d+$/.test(n.id)):[];}
 focus(){this.focused=true;}
}
const $=id=>{if(!nodes.has(id))nodes.set(id,new Element(id));return nodes.get(id);};
$('topicMode').value='essay';
const ctx=vm.createContext({$,esc:s=>s,Date:{now:()=>time},poState:'idle',setInterval:fn=>{intervals.set(++intervalId,fn);return intervalId;},clearInterval:id=>intervals.delete(id),confirm:()=>confirmation,document:{addEventListener(){}},window:{addEventListener(){}}});
const run=s=>vm.runInContext(s,ctx);
const clockSource=fs.readFileSync(path.join(root,'dist/po-practice.js'),'utf8').split('const poClock')[0];
run(clockSource);run(fs.readFileSync(path.join(root,'dist/topic-data.js'),'utf8'));run(fs.readFileSync(path.join(root,'dist/topic-practice.js'),'utf8'));
const bank=run('TOPIC_BANK');assert.equal(bank.length,50);assert.equal(new Set(bank.map(t=>t.id)).size,50);
assert.deepEqual(Array.from({length:7},(_,i)=>bank.filter(t=>t.category===i+1).length),[8,7,8,6,7,5,9]);
for(const topic of bank){
 assert.equal(topic.paragraphs.length,4);assert.ok(topic.paragraphs.join(' ').split(/\s+/).length>=120);
 ctx.sample=topic;
 for(let level=1;level<=10;level++){
  const qs=run(`topicQuestions(sample,${level})`);assert.equal(qs.length,3);
  qs.forEach(([q,a])=>{assert.ok(q.length>20);assert.ok(a.length>30);});
 }
}
assert.equal($('topicWork').hidden,true);assert.equal($('topicResult').innerHTML,'');
run("poState='running';startTopic()");assert.equal(run('topicState'),'idle');
run("poState='idle';startTopic()");assert.equal(run('topicState'),'running');assert.equal($('topicTimer').textContent,'20:00');
assert.equal($('topicChoice').disabled,true);assert.equal($('topicResult').hidden,true);assert.ok(!$('topicPassage').innerHTML.includes(bank[0].paragraphs[1]));
function write(id,value){const f=$(id);f.value=value;$('topicAnswerArea').listeners.input({target:f});}
write('topicEssay','Digital currency should preserve practical alternatives.');time+=10000;
$('topicForm').listeners.submit({preventDefault(){}});
assert.equal(run('topicState'),'submitted');assert.equal($('topicEssay').readOnly,true);assert.ok($('topicResult').innerHTML.includes(bank[0].paragraphs[0]));assert.equal(intervals.size,0);
$('topicMode').value='reading';$('topicMode').onchange();assert.equal($('topicResult').innerHTML,'');run('startTopic()');
assert.equal($('topicTimer').textContent,'05:00');assert.ok($('topicPassage').innerHTML.includes(bank[0].paragraphs[1]));assert.equal($('topicResult').hidden,true);
write('topicAnswer0','A qualified approach to digital public money.');time+=301000;write('topicAnswer0','Late change');
assert.equal(run('topicState'),'submitted');assert.equal($('topicAnswer0').value,'A qualified approach to digital public money.');assert.equal($('topicTimer').textContent,'00:00');assert.equal(intervals.size,0);
$('topicNext').onclick();assert.equal($('topicLevel').value,'2');assert.equal(run('topicState'),'idle');
run('startTopic()');confirmation=false;$('topicForm').listeners.submit({preventDefault(){}});assert.equal(run('topicState'),'running');confirmation=true;$('topicReset').onclick();assert.equal(run('topicState'),'idle');assert.equal(intervals.size,0);
$('topicCategory').value='7';$('topicCategory').onchange();assert.equal(run('topicCurrent.category'),7);
$('topicLevel').value='10';$('topicLevel').onchange();run('startTopic();finishTopic()');assert.equal($('topicNext').hidden,true);assert.ok($('topicResult').innerHTML.includes('Level 10 complete'));
assert.equal(intervals.size,0);
console.log('PASS: all 50 topics, 7 categories, 500 reading level sets, essay reveal, reading reveal, mutual timer guard, expiry, late input, early submission, cancellation, restart, topic and level navigation.');
