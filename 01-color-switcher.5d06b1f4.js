const e=document.querySelectorAll("button")[0],t=document.querySelectorAll("button")[1];let r=document.querySelector("body");e.addEventListener("click",(e=>{timerColor=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.target.disabled=!0})),t.addEventListener("click",(t=>{clearInterval(timerColor),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.5d06b1f4.js.map
