const nav = document.querySelector("#nav");
const abrir = document.querySelector("#open_menu");
const cerrar = document.querySelector("#close_menu");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})

