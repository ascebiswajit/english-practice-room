// Dependency-free checks of practice data, timing and submission state.
// The DOM fixture tests behaviour, not visual layout or browser rendering.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
const nodes = new Map();
let clockNow = 100000;
let confirmResult = true;
const intervals = new Map();
let intervalId = 0;
class Element {
  constructor(id) {
    this.id = id; this.value = ''; this.hidden = false; this.disabled = false;
    this.textContent = ''; this.listeners = {}; this.dataset = {};
    this.classes = new Set(); this.parentElement = this;
    this.classList = {remove: n => this.classes.delete(n), toggle: (n,on) => on ? this.classes.add(n) : this.classes.delete(n)};
  }
  set innerHTML(html) {
    this.html = html;
    if (this.id === 'poTopic') this.value = 'banking';
    if (this.id === 'poLevel') this.value = '1';
    for (const match of html.matchAll(/id="(poAnswer\d+|poModel\d+|poReviewed)"/g)) {
      const node = new Element(match[1]);
      if (match[1].startsWith('poAnswer')) node.dataset.answer = match[1].slice(8);
      if (match[1].startsWith('poModel')) node.hidden = true;
      nodes.set(match[1], node);
    }
  }
  get innerHTML() { return this.html || ''; }
  replaceChildren() { this.html = ''; }
  querySelectorAll(selector) {
    if (selector === 'textarea') return [...nodes.values()].filter(n => /^poAnswer\d+$/.test(n.id));
    return [];
  }
  addEventListener(name,fn) { this.listeners[name] = fn; }
  matches(selector) { return selector === 'textarea[data-answer]' && /^poAnswer\d+$/.test(this.id); }
  focus() { this.focused = true; }
}
const $ = id => { if (!nodes.has(id)) nodes.set(id,new Element(id)); return nodes.get(id); };
const context = vm.createContext({$, esc: s => s, Date:{now:() => clockNow},
  setInterval: fn => { intervals.set(++intervalId,fn); return intervalId; },
  clearInterval: id => intervals.delete(id), confirm:() => confirmResult,
  document:{addEventListener(){}},window:{addEventListener(){}}});
const run = code => vm.runInContext(code,context);
run(fs.readFileSync(path.join(root,'dist/po-data.js'),'utf8'));
run(fs.readFileSync(path.join(root,'dist/po-practice.js'),'utf8'));
const bank = run('PO_SETS');
assert.equal(Object.keys(bank).length,3);
const titles = new Set(), questions = new Set();
for (const sets of Object.values(bank)) {
  assert.equal(sets.length,10);
  sets.forEach(set => {
    assert.ok(!titles.has(set.title)); titles.add(set.title);
    assert.ok(set.paragraphs.length >= 2);
    assert.equal(set.questions.length,3);
    set.questions.forEach(([q,a]) => { assert.ok(a.trim());assert.ok(!questions.has(q),q);questions.add(q); });
  });
}
assert.equal(questions.size,90);
assert.equal($('poWork').hidden,true);
assert.equal($('poTimer').textContent,'05:00');
run('startPO()');
assert.equal(intervals.size,1);
assert.equal($('poTopic').disabled,true);
assert.equal($('poWork').hidden,false);
assert.equal($('poModel0').hidden,true);
function answer(i,text) {
  const field = $('poAnswer'+i);field.value=text;
  $('poQuestions').listeners.input({target:field});
}
answer(0,'Traders could not attend in the morning.');
assert.equal($('poAnswered').textContent,'1 / 3 answered');
clockNow += 241000; run('tickPO()');
assert.equal($('poTimer').textContent,'00:59');
assert.ok($('poStatus').textContent.includes('One minute'));
clockNow += 60000;
// A late input must not replace the response captured before the deadline.
answer(0,'Too late');
assert.equal(run('poState'),'submitted');
assert.equal($('poAnswer0').value,'Traders could not attend in the morning.');
assert.equal($('poAnswer0').readOnly,true);
assert.equal($('poModel0').hidden,false);
assert.equal($('poTimer').textContent,'00:00');
assert.equal(intervals.size,0);
$('poNext').onclick();
assert.equal($('poLevel').value,'2');
assert.equal(run('poState'),'idle');
run('startPO()'); answer(0,'Help page');
clockNow += 10000;
confirmResult = false;
$('poForm').listeners.submit({preventDefault(){}});
assert.equal(run('poState'),'running');
confirmResult = true;
$('poForm').listeners.submit({preventDefault(){}});
assert.equal(run('poState'),'submitted');
assert.ok($('poResult').innerHTML.includes('Time used: 00:10'));
assert.equal($('poLevel').disabled,false);
$('poLevel').value='10';$('poTopic').value='society';run('preparePO();startPO();finishPO()');
assert.equal($('poNext').hidden,true);
assert.ok($('poResult').innerHTML.includes('You reached level 10'));
$('poRestart').onclick();
assert.equal(run('poState'),'idle');
assert.equal($('poWork').hidden,true);
assert.equal($('poTimer').textContent,'10:00');
assert.equal(intervals.size,0);
run('startPO()');clockNow += 700000;run('tickPO()');
assert.equal(run('poState'),'submitted');
assert.equal($('poTimer').textContent,'00:00');
assert.equal(intervals.size,0);
console.log('PASS: 30 distinct sets, 90 distinct questions, hidden answers, countdown, background-time jump, expiry, late input, early submission, next level, topic switch, restart, final level.');
