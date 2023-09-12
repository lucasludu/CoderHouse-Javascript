/* AND
const carrito = [];

if(carrito.length === 0) {
    console.log("El carro esta vacio")
}

carrito.length === 0 && console.log("El carro esta vacio");
*/

/*

const usuario = {
    nombre: "Lucas", 
    edad: 15
}


const registroIngreso = usuario.edad >= 18 && new Date();

console.log(registroIngreso);

*/

/* FALSY (JS)
    Describe un valor que se evalua como false,
    cuando se considera en un contexto booleano
*/



/*
console.log(0 || "Falsy");
console.log(40 || "Falsy");
console.log(null || "Falsy");
console.log(undefined || "Falsy");
console.log("Hola" || "Falsy");
console.log("" || "Falsy");
console.log(NaN || "Falsy");
console.log(true || "Falsy");
console.log(false || "Falsy");
*/

/*

const usuario2 = null;

console.log(usuario || "El usuario existe")
console.log(usuario2 || "El usuario no existe")

*/


/* NULLISH

console.log(0 ?? "Nullish");
console.log(40 ?? "Nullish");
console.log(null ?? "Nullish"); // --
console.log(undefined ?? "Nullish");
console.log("Hola" ?? "Nullish"); // --
console.log("" ?? "Nullish");
console.log(NaN ?? "Nullish");
console.log(true ?? "Nullish");
console.log(false ?? "Nullish");

*/

/*

const usuario = {
    nombre: "Lucas",
    edad: 22,
    cursos: {
        javascript: "aprobado"
    }
}

console.log(usuario?.cursos?.javascript || "La propiedad no existe");
console.log(usuario?.cursos?.coderhouse || "La propiedad no existe");

*/

/*

const usuario = {
    nombre: "Lucas", 
    edad: 15
}

const {nombre, edad} = usuario;

console.log(nombre);
console.log(edad);

*/


const data = {
    "timespamp": 1631654564,
    "base": "USD",
    "rates": {
        "ARG": 570,
        "ARG": 10,
        "ARG": 870,
        "ARG": 17,
        "ARG": 5,
    }
}

const dolarblueArg = {rates:{ARG}} = data;
console.log(dolarblueArg);
console.log(data[3].ARG);