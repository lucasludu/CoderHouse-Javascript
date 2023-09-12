
// Spread de arrays: (...) Separa de forma individual
/*
const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]
console.log(...nombres)

const numeros = [4, 77, 92, 10, 3, -32, 54, 11];
console.log(Math.max(numeros)) // NaN
console.log(Math.max(...numeros)) // 92


const nombres1 = ["Juan", "Julieta"];
const nombres2 = ["Carlos", "Mariela"];
const nombresT = [...nombres1, ...nombres2]
console.log(nombresT);

const nombresObj = {
    ...nombresT
}
console.log(nombresObj);
console.table(nombresObj);
*/

// Spread de objetos
/*
const usuario1 = {
    nombre: "Juan",
    edad: 24,
    curso: "JavaScript"
}

const usuario2 = {
    ...usuario1
}

console.log(usuario2)

// Si existe la propiedad que estamos usamos en la plantilla, 
// no le estamos agregando sino que le estamos reasignando

const usuario3 = {
    ...usuario1, 
    curso: "ReactJS", 
    email: "juan@doe.com"
}

console.log(usuario3);
*/

// Rest Parameters

/*
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2);
*/

/*
function sum(x, y, z) {
    return x + y + z;
}
const number = [1, 2, 3];
const resultado = sum(...number)
console.log(resultado);


function sumar(...numeros) {
    console.log(numeros);
}
sumar(4,2);
sumar(10, 15, 30, 5);


function sumar1(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0);
}
console.log(sumar1(4,2));
console.log(sumar1(100, 200, 300));
*/

function sumar(a, b, ...c) {
    let resultado = a + b;
    c.forEach((x) => resultado += x);
    return resultado;
}

console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(sumar(1, 2, ...[3, 4, 5, 6, 7, 8, 9]));


let carritoCompras = [];
carritoCompras.reduce



function sumar1(...carritoCompras) {
    let resultado = 0;
    carritoCompras.forEach((x) => resultado += x);
    return resultado;
}