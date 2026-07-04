const t=document.getElementById('text');
const c=document.getElementById('count');
const b=document.getElementById('noBreak');
const s=document.getElementById('noSpace');
const l=document.getElementById('lines');
function u(){const v=t.value;c.textContent=v.length;b.textContent=v.replace(/\n/g,'').length;s.textContent=v.replace(/[\s\n]/g,'').length;l.textContent=v?v.split(/\n/).length:0;}
t.addEventListener('input',u);u();
document.getElementById('copy').onclick=()=>navigator.clipboard.writeText(t.value);
