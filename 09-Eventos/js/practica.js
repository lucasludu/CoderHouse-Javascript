/* EVENTOS */

/* EVENTOS DEL MOUSE */

// const alerta = document.getElementById("alerta");
const alerta = document.querySelector("#alerta");

/* 
    Se pasa la funcion pero sin parentesis
    Se puede usar muchas veces el evento
    Muestra el mensaje en una alerta - Haciendo referencia a la 
    funcion
*/
alerta.addEventListener("click", mostrarAlerta);

function mostrarAlerta(){
    alert("Hola");
}

// NO ES MUY RECOMENDABLE ESTA
/*
alerta.onclick = () => {
    alert("Holii");
}
*/

/*
    Muestra mensaje en la consola - Escribir una funcion anónima
    Si no es muy largo el evento hacerlo así, sino hacer una funcion
*/
const consola = document.querySelector("#consola");
// consola.addEventListener("mouseover", () => {
// consola.addEventListener("mousemove", () => {
consola.addEventListener("click", () => {
    console.log("Holaaa");
    // console.log(event);
});


/*
    Agregar clase a un elemento - Switch color mode
*/
const colorMode = document.querySelector("#color-mode");
// const body = document.querySelector("body");
const body = document.body;

colorMode.addEventListener("click", cambiarColor);

function cambiarColor() {
    body.classList.toggle("dark-mode");
    if(body.classList.contains("dark-mode")){
        colorMode.innerText = "Cambiar a light mode";
    } else {
        colorMode.innerText = "Cambiar a dark mode";
    }
}

/* EVENTOS DE FORMULARIOS */

/* MOSTRAR INPUT EN ALERTA */
const alertaForms = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");

alertaForms.addEventListener("submit", (e) => {
    e.preventDefault(); // anula comportamiento por defecto
    alert(alertaInput.value);
    alertaForms.reset()
});

/* MOSTRAR TEXTO ABAJO DE UN INPUT */

const abajoInput = document.querySelector("#abajo-input");
abajo = document.querySelector("#abajo");

// abajoInput.addEventListener("input", () => {
// abajoInput.addEventListener("change", () => {
// abajoInput.addEventListener("keydown", () => {
abajoInput.addEventListener("keyup", () => {
    abajo.innerText = abajoInput.value;
});


/* AGREGAR ITEMS A UNA LISTA */

const agregaForm = document.querySelector("#agregar-form");
const agregaInput = document.querySelector("#agregar-input");
const agrega = document.querySelector("#agregar");


agregaForm.addEventListener("submit", agregarItems);

function agregarItems(e) {
    e.preventDefault();

    if(agregaInput.value != ""){
        let item = document.createElement("li");
        item.innerText = agregaInput.value;
        agrega.append(item);
    } else {
        alert("Input Vacio");
    }
    agregaInput.focus();
    agregaForm.reset();
}