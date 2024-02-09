let menuBar=document.querySelector(".menu");
let menuButton=document.querySelector(".menubutton");
menuButton.addEventListener("click",()=>{
    menuBar.classList.toggle("active");
})
let main=document.querySelector(".main")
let newProfile=document.querySelector(".profile");
newProfile.addEventListener("click",()=>{
window.open("profile.html")

})