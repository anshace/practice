const ham= document.querySelector(".hamburger")
const navm= document.querySelector(".nav")
const navb= document.querySelector(".navbar")


ham.addEventListener("click",()=>{
    ham.classList.toggle("active");
    navm.classList.toggle("active");
    navb.classList.toggle("active");
})