var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequire723b;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,s.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire723b=s);const i=()=>{let e=null;try{e=JSON.parse(localStorage.getItem("Watched movies"))}catch{return}return e},r=()=>{let e=null;try{e=JSON.parse(localStorage.getItem("Queue movies"))}catch{return}return e};var l=s("8sSZi");const a=document.querySelector(".library"),c=document.querySelector(".button-container__watched"),o=document.querySelector(".button-container__queu"),g=document.querySelector(".message");let d=i(),u=r();function m(e){console.log(e);for(let t=0;t<e.length;t+=1)console.log(e[t]),(0,l.fetchMovieInfoAPI)(e[t]).then((e=>{a.insertAdjacentHTML("beforeend",h(e))}))}console.log(d),null!=d&&0!==d.length||null!=u&&0!==u.length?d.length>0?(c.classList.add("is-active"),m(d)):u.length>0&&(o.classList.add("is-active"),m(u)):(g.innerHTML='<p class="message-text">You library is empty yet</p><image class="message-image" src="https://i.imgur.com/Ud8xgso.gif"/>',a.innerHTML="");function p(){a.innerHTML=""}function h(e){if(console.log(e),!(null!=d&&0!==d.length||null!=u&&0!==u.length))return;const{id:t,title:n,overview:s,poster_path:i,release_date:r,genres:l,original_title:a,popularity:c,vote_average:o,vote_count:g}=e;return`\n      <li class="card">\n  <a href="" class="card-link link" data-id="${t}">\n    <img class="card-img" src="https://image.tmdb.org/t/p/w500${i}" alt="${n}">\n    <h3 class="card-name">${n}</h3>\n    <div class="card-item">\n      <p class="card-genres">${e.genres.map((e=>e.name)).join(", ")}</p>\n      <p class="card-year"><span class="card-line">|</span>${r}</p>\n    </div>\n  </a>\n</li>\n      `}c.addEventListener("click",(e=>{o.classList.remove("is-active"),c.classList.add("is-active"),p(),d=i(),null==d||0===d.length?(g.innerHTML='<p class="message-text">Your watched list is empty yet</p><image class="message-image" src="https://i.imgur.com/Ud8xgso.gif"/>',a.innerHTML=""):d.length>0&&(a.innerHTML="",g.innerHTML="",m(d))})),o.addEventListener("click",(e=>{o.classList.add("is-active"),c.classList.remove("is-active"),p(),u=r(),null==u||0===u.length?(g.innerHTML='<p class="message-text">Your queue list is empty yet</p><image class="message-image" src="https://i.imgur.com/Ud8xgso.gif"/>',a.innerHTML=""):u.length>0&&(a.innerHTML="",g.innerHTML="",m(u))})),s("k9bNO");
//# sourceMappingURL=library-page.54db5e80.js.map