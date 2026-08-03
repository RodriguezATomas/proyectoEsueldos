/* SCRIPT ORIGINAL 1 */
const money = n => '$' + Math.round(n || 0).toLocaleString('es-AR');
function calculate(){
  const salary = Number(document.getElementById('salary').value || 0);
  const weekly = Number(document.getElementById('weekly').value || 45);
  const h50 = Number(document.getElementById('h50').value || 0);
  const h100 = Number(document.getElementById('h100').value || 0);
  const monthlyHours = weekly * 4.33;
  const hour = monthlyHours ? salary / monthlyHours : 0;
  const total50 = h50 * hour * 1.5;
  const total100 = h100 * hour * 2;
  const total = total50 + total100;
  document.getElementById('hourValue').textContent = money(hour);
  document.getElementById('total50').textContent = money(total50);
  document.getElementById('total100').textContent = money(total100);
  document.getElementById('grandTotal').textContent = money(total);
  document.getElementById('heroTotal').textContent = money(total);
}
document.getElementById('calcForm').addEventListener('submit', e => { e.preventDefault(); calculate(); });
['salary','weekly','h50','h100'].forEach(id => document.getElementById(id).addEventListener('input', calculate));
calculate();

/* SCRIPT ORIGINAL 2 */
document.querySelectorAll(".mega").forEach((mega)=>{
  const sideLinks=[...mega.querySelectorAll(".mega-side a")];
  const main=mega.querySelector(".mega-main");
  if(!sideLinks.length||!main) return;
  const sideText=sideLinks.map((link)=>link.textContent.trim().toLowerCase());
  const isResources=sideText.includes("calculadora horas extra")&&sideText.includes("brief del ecosistema");
  const isAbout=sideText.includes("e-sueldos")&&sideText.includes("contacto")&&sideText.includes("planes");
  if(isResources||isAbout){
    const supportHref=sideLinks.find((link)=>link.textContent.trim().toLowerCase()==="soporte")?.href||"recursos-esueldos.html";
    main.insertAdjacentHTML("beforeend",`<a class="mega-card" href="${supportHref}"><span class="mega-icon">&check;</span><span><b>Soporte</b><small>Centro de recursos y ayuda e-Sueldos.</small></span></a>`);
  }
  const cards=[...main.querySelectorAll(".mega-card")];
  cards.forEach((card)=>{
    const title=card.querySelector("b")?.textContent.trim().toLowerCase();
    if(title==="brief del ecosistema"||title==="sobre e-sueldos") card.querySelector(".mega-icon").innerHTML="&check;";
  });
  if(!cards.length) return;
  const supportIndex=cards.length-1;
  const groups=isResources?[[supportIndex],[0],[1],[2]]:isAbout?[[0],[1],[supportIndex],[2]]:cards.length===6?[[0,3],[1,4],[2,3],[4,5]]:[[0],[1],[2],[3]];
  const showGroup=(index)=>{
    sideLinks.forEach((link,i)=>link.classList.toggle("active",i===index));
    cards.forEach((card,i)=>card.style.display=groups[index]?.includes(i)?"grid":"none");
  };
  sideLinks.forEach((link,index)=>link.addEventListener("mouseenter",()=>showGroup(index)));
  mega.closest(".nav-item")?.addEventListener("mouseenter",()=>showGroup(sideLinks.findIndex((link)=>link.classList.contains("active"))||0));
});
