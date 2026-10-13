/* Theme shared across home and full cases. Storage failure leaves switch usable. */
(function(){
'use strict';
let mode='day';try{const saved=localStorage.getItem('santiago-portfolio-theme');if(saved==='night'||saved==='day')mode=saved}catch{}
const sheets=()=>document.querySelectorAll('[data-theme-sheet]');
function images(){document.querySelectorAll('img').forEach(img=>{const src=img.getAttribute('src');if(!src||!src.startsWith('assets/case-studies/'))return;const base=src.replace('assets/case-studies/night/','assets/case-studies/');const next=mode==='night'?base.replace('assets/case-studies/','assets/case-studies/night/'):base;if(src!==next)img.setAttribute('src',next)})}
function label(){const btn=document.getElementById('themeToggle');if(!btn)return;const es=document.documentElement.lang==='es';const target=mode==='day'?(es?'Noche':'Night'):(es?'Día':'Day');const caption=(mode==='day'?'☾ ':'☀ ')+target;if(btn.textContent!==caption)btn.textContent=caption;btn.setAttribute('aria-label',es?'Cambiar a modo '+(mode==='day'?'noche':'día'):'Switch to '+(mode==='day'?'night':'day')+' mode');btn.setAttribute('title',btn.getAttribute('aria-label'));btn.setAttribute('aria-pressed',String(mode==='night'))}
function apply(){document.documentElement.dataset.theme=mode;sheets().forEach(link=>{link.disabled=link.dataset.themeSheet!==mode});images();label()}
function toggle(){mode=mode==='day'?'night':'day';try{localStorage.setItem('santiago-portfolio-theme',mode)}catch{}apply();window.dispatchEvent(new Event('portfolio:theme'))}
apply();document.addEventListener('DOMContentLoaded',()=>{apply();document.getElementById('themeToggle')?.addEventListener('click',toggle);new MutationObserver(()=>{images();label()}).observe(document.body,{childList:true,subtree:true});new MutationObserver(label).observe(document.documentElement,{attributes:true,attributeFilter:['lang']})});
window.addEventListener('storage',e=>{if(e.key==='santiago-portfolio-theme'&&(e.newValue==='day'||e.newValue==='night')){mode=e.newValue;apply()}});
window.portfolioTheme={toggle,mode:()=>mode};
})();
