import{S as u,i}from"./assets/vendor-B07T6_gy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const f=o=>o.map(e=>`
    <li class="gallery-card">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-img"
          src="${e.webformatURL}"
          alt="${e.tags}"
          loading="lazy"
        />
        <div class="info">
<div class="info-list">
<span class="info-item">Likes</span>
<span class="info-item-value">${e.likes}</span>
</div>
<div class="info-list">
<span class="info-item">Views</span>
<span class="info-item-value">${e.views}</span>
</div>
<div class="info-list">
<span class="info-item">Comments</span>
<span class="info-item-value">${e.comments}</span>
</div>
<div class="info-list">
<span class="info-item">Downloads</span>
<span class="info-item-value">${e.downloads}</span>
</div>
</div>
      </a>
    </li>`).join(""),m="48308649-6275080a65400e008e92230b2",d=o=>{const e=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${e}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},p=document.querySelector(".search-form"),h=document.querySelector(".search-input");document.querySelector(".search-button");const l=document.querySelector(".gallery"),n=document.querySelector(".loader");let g=new u(".gallery a",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",o=>{o.preventDefault();const e=h.value.trim();if(!e){i.warning({message:"Please enter a search term.",position:"topRight"});return}l.innerHTML="",n.classList.add("active"),d(e).then(r=>{if(n.classList.remove("active"),r.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}l.insertAdjacentHTML("beforeend",f(r.hits)),g.refresh()}).catch(r=>{n.classList.remove("active"),i.error({message:"Something went wrong, please try again later.",position:"topRight"}),console.error("Error fetching data:",r)})});
//# sourceMappingURL=index.js.map