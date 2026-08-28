const container = document.querySelector(".container");
const btnSingUp = document.getElementById("btn-sign-up");
const btnSingIn = document.getElementById("btn-sign-in");

btnSingIn.addEventListener("click",()=>{
    container.classList.remove("toggle");
})

btnSingUp.addEventListener("click",()=>{
    container.classList.add("toggle");
})
