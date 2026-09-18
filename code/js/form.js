const container = document.querySelector(".container");

const buttonSingUpFrom = document.querySelector("#btn-sign-up-from");
const buttonSingInFrom = document.querySelector("#btn-sign-in-from");

const validateSingIn = document.querySelectorAll(".value-sign-in");
const validateSingUp = document.querySelectorAll(".value-sign-up");

const btnSingUp = document.getElementById("btn-sign-up");
const btnSingIn = document.getElementById("btn-sign-in");

btnSingIn.addEventListener("click",()=>{
    container.classList.remove("toggle")
    validateSingIn.forEach(function(field){
        field.classList.remove("errorField");
    })
})

btnSingUp.addEventListener("click",()=>{
    container.classList.add("toggle")
    validateSingUp.forEach(function(field){
        field.classList.remove("errorField");
    })
    
})

buttonSingInFrom.addEventListener("click", (event)=>{
    event.preventDefault()
    validateSingIn.forEach((field)=>{
        if (field.value == ""){
            field.classList.add("errorField");
        }
    })
})

buttonSingUpFrom.addEventListener("click", (event)=>{
    event.preventDefault()
        validateSingUp.forEach(function(field){
        if (field.value == ""){
            field.classList.add("errorField");
        }
    })
})

validateSingIn.forEach(function(field){
    field.addEventListener("keyup", function(){
    field.classList.remove("errorField");
    })
})

validateSingUp.forEach(function(field){
    field.addEventListener("keyup", function(){
    field.classList.remove("errorField");
    })
})



