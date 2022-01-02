const parentTag=document.querySelector(".parent");
const addToastAlert=()=>{
  // console.log("hey");
  const toastContainerTag=document.createElement("div");
  toastContainerTag.classList.add("toastContainer");
  const toastTextTag=document.createElement("div");
  toastTextTag.classList.add("toasttext");
  toastTextTag.append(`We use cookies. Your Continued use of our site implies you agree to this. See details. `);

  const toastButtonTag=document.createElement("div");
  
  toastButtonTag.append("Close");
  toastButtonTag.classList.add("btn","btn-light");

  toastContainerTag.append(toastTextTag,toastButtonTag);
  parentTag.append(toastContainerTag);
  parentTag.style.bottom=`-${parentTag.offsetHeight}px`;
  setTimeout(()=>{
    parentTag.style.bottom=`0px`;
  },1000);
  toastButtonTag.addEventListener("click",()=>{
      parentTag.style.bottom=`-${parentTag.offsetHeight}px`;


  })
}
window.addEventListener("load",()=>{
  addToastAlert();
})