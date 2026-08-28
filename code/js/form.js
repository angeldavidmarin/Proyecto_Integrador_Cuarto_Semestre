const container = document.querySelector(".container");
const btnSingUp = document.getElementById("btn-sing-up");
const btnSingIn = document.getElementById("btn-sing-in");

btnSingIn.addEventListener("click",()=>{
    container.classList.remove("toggle");
})

btnSingUp.addEventListener("click",()=>{
    container.classList.add("toggle");
})
