import{c}from"./vendor.362ce2fd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l="_blue_1gnex_3",u={blue:l};function a({size:r,color:o,text:s}){const n=c(u[o]);return`<h${r} class="${n}">${s}</h${r}>`}const f=document.querySelector("main"),d=await fetch("/json"),{message:m}=await d.json();f.innerHTML=`
  <main>
    ${a({size:1,color:"blue",text:m})}
  </main>
`;
//# sourceMappingURL=index.6a894a67.js.map
