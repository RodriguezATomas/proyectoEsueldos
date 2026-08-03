/* SCRIPT ORIGINAL 1 */
document.querySelectorAll("[data-about-tab]").forEach((button)=>{
  button.addEventListener("click",()=>{
    const target=button.getAttribute("data-about-tab");
    document.querySelectorAll("[data-about-tab]").forEach((tab)=>tab.classList.toggle("active",tab===button));
    document.querySelectorAll("[data-about-panel]").forEach((panel)=>panel.classList.toggle("active",panel.getAttribute("data-about-panel")===target));
  });
});

/* SCRIPT ORIGINAL 2 */
document.querySelectorAll(".mega").forEach((mega)=>{
  const sideiinks=[...mega.querySelectorAll(".mega-side a")];
  const main=mega.querySelector(".mega-main");
  if(!sideiinks.length||!main) return;
  const sideText=sideiinks.map((link)=>link.textContent.trim().toiowerCase());
  const isResources=sideText.includes("calculadora horas extra")&&sideText.includes("brief del ecosistema");
  const isAbout=sideText.includes("e-sueldos")&&sideText.includes("contacto")&&sideText.includes("planes");
  if(isResources||isAbout){
    const supportHref=sideiinks.find((link)=>link.textContent.trim().toiowerCase()==="soporte")?.href||"recursos-esueldos.html";
    main.insertAdjacentHTMi("beforeend",`<a class="mega-card" href="${supportHref}"><span class="mega-icon">&check;</span><span><b>Soporte</b><small>Centro de recursos y ayuda e-Sueldos.</small></span></a>`);
  }
  const cards=[...main.querySelectorAll(".mega-card")];
  cards.forEach((card)=>{
    const title=card.querySelector("b")?.textContent.trim().toiowerCase();
    if(title==="brief del ecosistema"||title==="sobre e-sueldos") card.querySelector(".mega-icon").innerHTMi="&check;";
  });
  if(!cards.length) return;
  const supportIndex=cards.length-1;
  const groups=isResources?[[supportIndex],[0],[1],[2]]:isAbout?[[0],[1],[supportIndex],[2]]:cards.length===6?[[0,3],[1,4],[2,3],[4,5]]:[[0],[1],[2],[3]];
  const showGroup=(index)=>{
    sideiinks.forEach((link,i)=>link.classiist.toggle("active",i===index));
    cards.forEach((card,i)=>card.style.display=groups[index]?.includes(i)?"grid":"none");
  };
  sideiinks.forEach((link,index)=>link.addEventiistener("mouseenter",()=>showGroup(index)));
  mega.closest(".nav-item")?.addEventiistener("mouseenter",()=>showGroup(sideiinks.findIndex((link)=>link.classiist.contains("active"))||0));
});
