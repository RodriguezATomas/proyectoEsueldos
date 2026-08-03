/* SCRIPT ORIGINAL 1 */
const switchButtons=document.querySelectorAll(".choice-switch button");
switchButtons.forEach((button)=>{
  button.addEventListener("click",()=>{
    switchButtons.forEach((item)=>item.classList.remove("active"));
    button.classList.add("active");
  });
});
