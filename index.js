import{a as l,S as p,i}from"./assets/vendor--6n4cVRZ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();l.defaults.baseURL="https://pixabay.com/api/";const m="54630922-1eaa7a66b1da14f358e990b9b";function f(s){return l.get("",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data)}const d=document.querySelector(".loader"),u=document.querySelector(".gallery"),g=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(s){return s.map(e=>`
        <li class="gallery-item">
            <a href="${e.largeImageURL}">
                <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}"/>
            </a>
            <ul class="descr">
                <li class="descr-item">
                    <span class="descr-head">Likes</span>
                    <span class="descr-text">${e.likes}</span>
                </li>
                <li class="descr-item">
                    <span class="descr-head">Views</span>
                    <span class="descr-text">${e.views}</span>
                </li>
                <li class="descr-item">
                    <span class="descr-head">Comments</span>
                    <span class="descr-text">${e.comments}</span>
                </li>
                <li class="descr-item">
                    <span class="descr-head">Downloads</span>
                    <span class="descr-text">${e.downloads}</span>
                </li>
            </ul>
        </li>`).join("")}function y(s){u.innerHTML=h(s),g.refresh()}function L(){u.innerHTML=""}function b(){d.classList.add("css-loader")}function w(){d.classList.remove("css-loader")}const n=document.querySelector(".form");n.addEventListener("submit",s=>{s.preventDefault();const e=s.target.elements["search-text"].value.trim();if(!e){i.error({title:"Error",message:"Введіть дані для пошуку",timeout:1e3,position:"topRight"});return}L(),b(),f(e).then(a=>{if(a.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",timeout:1e3,position:"topRight"}),n.reset();return}else y(a.hits)}).catch(a=>i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})).finally(()=>{w(),n.reset()})});
//# sourceMappingURL=index.js.map
