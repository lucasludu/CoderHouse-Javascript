
// Declarando Arrays
/*
const productos = ["Sillon", "Silla", "Mesa", "Ropero"];
const numeros = [1, 2, 3, 4, 5];
const booleanos = [true, true, false];
const mezcla = ["Sillon", 1, 2, true];
const usuarios = [
    {
        nombre: "Carpi",
        edad: 27
    },
    {
        nombre: "Vicky",
        edad: 28
    }
];
*/

const productos = ["Sillon", "Silla", "Mesa", "Ropero", "Cama"];

// ACCEDIENDO AL ARRAY
/*
console.log(productos);
console.log(productos[0]);
*/

// RECORRIENDO ARRAY
/*
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}
*/

/* METODOS */

// LENGTH
/*
console.log(productos.length);
*/

// PUSH: Agrega al final
/*
productos.push("Mueble");
console.log(productos);
*/

// UNSHIFT: Se agrega al inicio
/*
productos.unshift("Puerta");
console.log(productos);
*/

// SHIFT: Elimina primer elemento
/*
productos.shift()
console.log(productos);
*/
 
// POP: Elimina ultimo elemento
/*
productos.pop()
console.log(productos);
*/

// SPLICE: Elimina uno o varios elementos en nuestro array
/*
console.log(productos);
productos.splice(1, 2);
console.log(productos);
*/

// JOIN: Genera un string con los elementos del array
/*
console.log(productos.join(" - "));
console.log(productos.join(" / "));
*/

// CONCAT: Une o varios arrays en uno
/*
const productos2 = ["Puerta", "Espejo"];
const productoFinal = productos.concat(productos2);
console.log(productoFinal);
*/

// SLICE: Genera copia de una parte de nuestro array
// No incluye el elemento del numero final
/*
const productosComedor = productos.slice(1, 3);
console.log(productos);
console.log(productosComedor);
*/

// INDEXOF: Saber el numero de indice de nuestro elemento.
/*
console.log(productos.indexOf("Ropero"));
*/

// INCLUDES: Saber si un elemento existe en nuestro array.
// Devuelve true o false
/*
console.log(productos.includes("Sillon"));

if(productos.includes("Mesa")) {
    console.log("Se encuentra en la posición: " + productos.indexOf("Mesa"))
} else {
    console.log("No se encuentra en el array.");
}
*/

// REVERSE: Invierte el orden de nuestro array.
/*
console.log(productos.reverse())
*/