
// ABSTRACCIÓN
/*
function SumarRango(min, max) {
    let total = 0;

    if(min < max) {
        for (let i = min; i <= max; i++) {
            total += i;
            console.log(i + ": " + total)
        }
        return total;
    } else {
        return "Error en el rango.";
    }
}
console.log(SumarRango(1, 10));
*/

// RETORNO DE FUNCIONES
/*
const mayorQue10 = num => num > 10;
console.log(mayorQue10(11))

function mayorQue(x) {
    return (num) => num > x;
}

const mayorQue10 = mayorQue(10);
console.log(mayorQue10(9));
*/

// METODOS DE BUSQUEDA Y TRANSFORMACIÓN

const numeros = [50, 12, 37, 17, 25, 6];
const animales = ["Perro", "Gato", "Cisne", "Tortuga"];
const productos = [
    {
        nombre: "Mesa",
        precio: 3500
    },
    {
        nombre: "Silla de plástico",
        precio: 2000
    },
    {
        nombre: "Silla de madera",
        precio: 2500
    },
    {
        nombre: "Ventana",
        precio: 2500
    },
    {
        nombre: "Puerta",
        precio: 3000
    }
];

// FOREACH
/*
numeros.forEach((numero) => {
    console.log(numero)
});
productos.forEach((prod) => {
    console.log(prod.precio)
    // console.log(prod["nombre"])
});
*/

// FIND: Busca y retorna el primer elemento que cumple con la condición
/*
const perro = animales.find((animal) => animal === "Perro");
console.log(perro)

let productoElegido = prompt("Ingrese el producto que desea comprar");
console.log(productos.find((prod) => prod.nombre === productoElegido))
*/

// FILTER: Retorna un nuevo array con todos los elementos que cumplan con una condición.
/*
const gato = animales.filter((animal) => animal === "Gato");
console.log(gato);

const sillas = productos.filter((prod) => prod.nombre.includes("Silla"));
console.log(sillas);
*/

// SOME: Recorre array y responde con true o false si encuentra o no un elemento que cumpla con una condición.
/*
const cisne = animales.some((animal) => animal === "Cisne");
console.log(cisne);
const caballo = animales.some((animal) => animal === "Caballo");
console.log(caballo);
*/

// MAP: Recorre array y retorna uno nuevo con los elementos transformados con el array original.
/*
const nombres = productos.map((prod) => prod.nombre);
console.log(nombres);

const preciosActualizados = productos.map((prod) => {
    return {
        nombre: prod.nombre,
        precio: prod.precio * 1.5
    }
});
console.log(productos);
console.log(preciosActualizados);
*/

// REDUCE: Recorre array y retorna un unico valor tras hacer una operacion sobre los elementos.
/*
const total = numeros.reduce((acomulador, numero) => acomulador + numero, 0);
console.log(total); 

const totalCarrito = productos.reduce((acomulador, prod) => acomulador + prod.precio, 0);
console.log(totalCarrito);
*/

// SORT: Reordenar array segun criterio que le indiquemos.
/*
// numeros.sort((a, b) => a - b); // asc
numeros.sort((a, b) => b - a); // desc
console.log(numeros);
*/

// MATH

const numeroDecimal1 = 1.25;
const numeroDecimal2 = 1.75;

// MIN | MAX: Retorna el minimo y maximo de un listado.
/*
console.log(Math.min(50, 12, 37, 17, 25, 6));
console.log(Math.max(50, 12, 37, 17, 25, 6));
*/

// CELL | FLOOR: Retorna numero entero mayor o menor mas cercano al que le indiquemos (redondeado hacia arriba o hacia abajo)
/*
console.log(Math.ceil(numeroDecimal1));
console.log(Math.ceil(numeroDecimal1));
console.log(Math.floor(numeroDecimal2));
console.log(Math.floor(numeroDecimal2));
*/

// ROUND: Retorna el numero que le indiquemos redondeando al mas cercano.
/*
console.log(Math.round(numeroDecimal1));
console.log(Math.round(numeroDecimal2));
*/

// RANDOM: retorna numero aleatorio entre 0 inclusivo y 1 inclusive
/*
console.log(Math.random())
console.log(Math.round(Math.random()));
console.log(Math.round(Math.random() * 50));
console.log(Math.round(Math.random() * 50 + 20)); // MAX: 70

function GeneraRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = GeneraRandom(1, 6);
console.log(rndInt);
*/


// DATE
/*
año (4 digitos)
mes (0-11)
dias (1-31)
hora (0-23)
minutos (0-59)
segundos (0-59)
milisegundos (0-999)
*/

/*
let fechaActual = new Date(2023,12,25,10,30,0,0);
console.log(fechaActual);

const fecha = new Date();

const anio = fecha.getFullYear();
const mes = fecha.getMonth();
const dia = fecha.getDay();

console.log("La fecha actual es: " + dia + " " + mes + " " + anio);
*/

const hoy = new Date("December 17, 2021");
console.log(hoy);


/*****************************************************/
/*****************************************************/
/*
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    arraca: function() {
        console.log("El coche ya está en marcha.");
    },
    acelerar: function() {
        console.log("El coche ya está acelerando.");
    }
}

coche.arraca();
coche.acelerar();
*/

/*
function Sumar(a, b) { // paso parametro
    let resultado = a + b; // asigno resultado a + b
    return resultado; // retorno el resultado
}

const Suma = (a, b) => { // creo constante, doy parametro y uso arrow function
    return a + b; // retorno resultado
}

const Sum = (a,b) => a + b; // retorno implicito
*/

/* FOREACH
const frutas = ["manzana", "pera", "naranja"];

frutas.forEach()
*/

/* FIND
const numero = [1, 2, 4, 6, 9, 8, 3, 21, 85, 5];

const encontrado = numero.find((x) => x>= 5); // busca el 1er rdo

console.log(encontrado);
*/

// MAP
/*
const numero = [1, 2, 4, 6, 9, 8, 3, 21, 85, 5];
const iva = 50;
const doble = numero.map(function(numero) {
    return numero * iva;
})
console.log(doble);
*/
/*
let productosComprados = [3000, 6500, 4000, 35000];

let precioFinal = productosComprados
    .reduce((acomulador, valorActual) => acomulador + valorActual);

console.log(precioFinal);
*/