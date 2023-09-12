
/* 
    localstorage: guarda informacion indefinidamente
    no se borra al borrar el historia ni el navegador
    salvo que lo elimine manualmente. Se guarda en la 
    memoria del navegador del usuario.
*/

// localsotrage lo podemos ver como objeto.
/* todo lo que guardemos aqui, lo va convertir en un 
string */
/*
localStorage.setItem("iva", 21);
localStorage.setItem("nombre", "Lucas");

let usuario = "Fernando"
localStorage.setItem("usuario", usuario);


let usuarioEnLS = localStorage.getItem("usuario");
console.log(usuarioEnLS);
*/
/*
let usuarioIngresado = prompt("Ingresar nombre:");
localStorage.setItem("usuario-ingresado", usuarioIngresado);

let usuarioIngresadoEnLS = localStorage.getItem("usuario-ingresado");
console.log(usuarioIngresadoEnLS);
*/

/* OBJETOS */
const usuario = {
    nombre: "Lucas",
    edad: 30
}

const usuarioJson = JSON.stringify(usuario);
localStorage.setItem("usuario", usuarioJson);
localStorage.setItem("usuario", JSON.stringify(usuario));

const usuarioEnLS = localStorage.getItem("usuario");
const usuarioObjeto = JSON.parse(usuarioEnLS);
const usuarioObjeto1 = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioObjeto);

/* ARRAY DE OBJETOS */

const productos = [
    {producto: "Silla", precio: 1500},
    {producto: "Sillón", precio: 2500},
    {producto: "Mesa", precio: 3500},
];

localStorage.setItem("productos", JSON.stringify(productos))

const productosEnLS = JSON.parse(localStorage.getItem("productos"))
console.log(productosEnLS);



/* 
    sessionstorage: guarda informacion en una pestaña
    abierta. Si estamos en la misma pestaña va estar
    la informacion al cambiar de pestaña desaparece.
*/




/****************** SEGUNDA PARTE *******************/

/* EJEMPLO DE DARK MODE */

const botonDarkMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function ActivarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}

function DesactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
}

if(darkMode === "activado") {
    ActivarDarkMode();
} else {
    DesactivarDarkMode();
}

botonDarkMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if(darkMode === "activado") {
        DesactivarDarkMode();
    } else {
        ActivarDarkMode();
    }
});
