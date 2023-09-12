

/*
// setTimeout(function, tiempo)
function Saludar() {
    console.log("Mitad del proceso");
}

console.log("Empieza proceso");
// Si le pongo los Saludar() se va disparar directamente, no va esperar los 5 seg.
setTimeout(Saludar, 5000)

console.log("Fin del proceso.")
*/


const boton = document.getElementById("boton");
const popup = document.getElementById("popup-mensaje");


boton.addEventListener("click", () => {
    popup.classList.add("popup-active");

    setTimeout(() => {
        popup.classList.remove("popup-active")
    }, 2500);
    
})