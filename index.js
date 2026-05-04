import{a as u,S as d,i as c}from"./assets/vendor-BAQQTdrx.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="55715187-d7e3a09a5a0f1fca23312ca88",f=async o=>{const s=`https://pixabay.com/api/?key=${p}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await u.get(s)).data}catch(r){throw console.error("Error fetching images:",r),r}};let i;const y=o=>{const s=document.querySelector(".gallery"),r=o.map(a=>`
      <li>
        <a href="${a.largeImageURL}">
          <img src="${a.webformatURL}" alt="${a.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${a.likes}</p>
          <p>Views: ${a.views}</p>
          <p>Comments: ${a.comments}</p>
          <p>Downloads: ${a.downloads}</p>
        </div>
      </li>
    `).join("");s.innerHTML=r,i?i.refresh():i=new d(".gallery a",{captionsData:"alt",captionDelay:250})},m=()=>{const o=document.querySelector(".gallery");o.innerHTML=""},h=()=>{document.querySelector(".loader").classList.add("is-visible")},g=()=>{document.querySelector(".loader").classList.remove("is-visible")},l=document.querySelector(".form"),L=l.querySelector('input[name="search-text"]');l.addEventListener("submit",async o=>{o.preventDefault();const s=L.value.trim();if(s){m(),h();try{const r=await f(s);r.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(r.hits)}catch{c.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{g()}}});
//# sourceMappingURL=index.js.map
