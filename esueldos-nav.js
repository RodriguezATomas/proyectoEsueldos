document.querySelectorAll(".mega").forEach((mega)=>{
  const sideLinks=[...mega.querySelectorAll(".mega-side a")];
  const cards=[...mega.querySelectorAll(".mega-main .mega-card")];
  if(!sideLinks.length||!cards.length) return;
  const sideText=sideLinks.map((link)=>link.textContent.trim().toLowerCase());
  const isResources=sideText.includes("calculadora horas extra")&&sideText.includes("brief del ecosistema");
  const isAbout=sideText.includes("e-sueldos")&&sideText.includes("contacto")&&sideText.includes("planes");
  const groups=isResources?[[],[0],[1],[2]]:isAbout?[[0],[1],[],[2]]:cards.length===6?[[0,3],[1,4],[2,3],[4,5]]:[[0],[1],[2],[3]];
  const showGroup=(index)=>{
    sideLinks.forEach((link,i)=>link.classList.toggle("active",i===index));
    cards.forEach((card,i)=>card.style.display=groups[index]?.includes(i)?"grid":"none");
  };
  sideLinks.forEach((link,index)=>link.addEventListener("mouseenter",()=>showGroup(index)));
  mega.closest(".nav-item")?.addEventListener("mouseenter",()=>showGroup(sideLinks.findIndex((link)=>link.classList.contains("active"))||0));
});
