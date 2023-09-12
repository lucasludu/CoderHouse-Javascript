// Hay dos tipos de variables reservadas
// En JS, se recomienda usar LET 
// También esta VAR

let nombre = "Carlito";
let apellido = "Figueroa";
const ESPACIO = " "

// concatenar
let nombreApellido = nombre + ESPACIO + apellido
let nombreApellido1 = nombre + " " + apellido

let anioActual = 2022;
let anioNacimiento = 1992;
let edad = anioActual - anioNacimiento;

console.log(nombreApellido,edad); // la coma separa con un espacio

nombre = "Matias"
console.log(nombre,edad,"Hola!"); 

// Const no nos permite redifinir la variable, es una constante
const IVA = 21;
// IVA = 42 --> no se puede volver a declarar.
console.log(IVA)


var usuario = prompt("Ingresar Nombre: ")

console.log("Usuario: ",usuario);


// Alert, no son muy recomendables.
// Son muy molestos para usarlos.
alert("Hola!! " + usuario + ".")


