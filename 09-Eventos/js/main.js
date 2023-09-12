
//let btn = document.getElementById("btnPrincipal");
            
// CLICK

// OPCION 1

/* Si le agrego parentesis, ejecuta de una.
btn.addEventListener("click", Saludar())
function Saludar() {
    alert("Funcion Disparada");
    console.log("funcionaa wiiii");
}
*/
/*
btn.addEventListener("click", Saludar)
function Saludar() {
    alert("Funcion Disparada");
    console.log("funcionaa wiiii");
}
*/
/*
btn.addEventListener("click", function() {
    alert("Funcion Disparada");
    console.log("funcionaa wiiii");
})
*/
/*
btn.addEventListener("click", () => alert("Funcion Disparada"))
*/

// OPCION 2
/*
btn.onclick = () => alert("Funcion Disparada");
*/

/*
const btn = document.getElementById("btnPrincipal");
btn.addEventListener("mouseover", () => console.log("Pasaste por el boton"));

const titulo = document.getElementById("titulo"); 
*/ 
// Puedo pasar por encima de cualquier ancho de la pagina. Es un bloque
// titulo.addEventListener("mouseover", () => console.log("Pasaste por el titulo"));
//
// titulo.addEventListener("mousedown", () => console.log("Pasaste por el titulo"));
//
/*
titulo.addEventListener("mousemove", function(event){
    console.log("El jugador disparó en latitud: " + event.clientX + " y en la longitud: " + event.clientY)
});
*/

// Change: Validar contenido
/*
let input1 = document.getElementById("nombre");
input1.addEventListener("change", () => {
    console.log(input1.value);
})
*/

/*
let input1 = document.getElementById("nombre");
input1.addEventListener("input", () => {
    console.log(input1.value);
})
*/

// CLASE DE PRACTICA 

const btn = document.getElementById("btn");
const container = document.querySelector("#container");

btn.addEventListener("click", () => {
    // Crear una card nueva
    const newCard = document.createElement("div");
    newCard.classList.add("card")
    newCard.innerHTML = 
    `
        <h2>Nueva tarjeta</h2>
        <p>Esta es una nueva tarjeta generada con JS</p>
    ` + new Date();

    container.appendChild(newCard);
})




