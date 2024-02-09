let menuBar=document.querySelector(".menu");
let menuButton=document.querySelector(".menubutton");
menuButton.addEventListener("click",()=>{
    menuBar.classList.toggle("active");
})