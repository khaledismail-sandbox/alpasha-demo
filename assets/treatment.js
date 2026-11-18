/* Standalone presentation only. No SDKs, network requests, storage or identity. */
(()=>{
'use strict';
document.title='Your Travel quote · PAŞA Sığorta';
document.getElementById('phone').classList.add('treatment-root');
document.getElementById('header').innerHTML='<h1>Your Travel quote</h1>';
document.getElementById('tabs').hidden=true;
document.getElementById('content').innerHTML=`
<div class="quote-context"><span class="eyebrow">Travel Essential · Georgia</span><h2>Your trip, covered.</h2><p>1 traveler · 1–7 December 2026</p><div class="price">45.00 <small>AZN</small></div><p class="price-caption">Total illustrative premium</p></div>
<button type="button" class="button secondary" id="open-summary">Understand this cover</button>
<section id="summary-sheet" class="summary-sheet" aria-labelledby="summary-title"><div class="sheet-title"><h2 id="summary-title">Your cover at a glance</h2><button type="button" class="icon-btn" id="close-summary" aria-label="Close coverage summary"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M6 18L18 6"/></svg></button></div><h3>What’s covered</h3><ul class="list"><li>Emergency medical expenses: up to 30,000 AZN</li><li>Trip interruption: up to 500 AZN</li></ul><h3>Key exclusions</h3><ul class="list"><li>Pre-existing conditions</li><li>Undeclared high-risk activities</li><li>Events outside your travel dates</li></ul><p class="disclaimer">Fictional example terms, not official underwriting terms.</p><button type="button" class="button" id="complete-summary">I understand this cover</button><p id="guidance-result" aria-live="polite"></p></section>
<p class="disclaimer">Illustrative cover · Fictional cover and premiums in AZN. No real insurance is sold.</p>`;
const sheet=document.getElementById('summary-sheet'),open=document.getElementById('open-summary');
open.addEventListener('click',()=>{sheet.hidden=false;document.getElementById('close-summary').focus();});
document.getElementById('close-summary').addEventListener('click',()=>{sheet.hidden=true;open.focus();});
document.getElementById('complete-summary').addEventListener('click',()=>{document.getElementById('guidance-result').textContent='You’ve reviewed the example cover.';});
})();
