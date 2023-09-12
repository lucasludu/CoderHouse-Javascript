// Sincronica
/*
console.log("Hola");
console.log("Estoy en el medio");
console.log("Chau");
*/

// Asincronica

// SetTimeOut()
/*
console.log("Hola");
// Si le pongo un tiempo de 0 seg se va ejecutar al final
// Primero va leer las Sincronicas y dsp las asincornicas por mas que tenga t = 0
setTimeout(() => {
    console.log("Estoy por la mitad");
}, 0);

console.log("Chau");
*/



// SetInterval()
// Se va reproduciendo cada 1 segundo.
/*
setInterval(() => {
    console.log("Hola")    
    console.log("Chau")    
}, 1000);
*/
/*
let contador = 0;

const intervalo = setInterval(() => {
    contador++;
    console.log(contador);
    
    if(contador == 5){
        clearInterval(intervalo);
        console.log("El contador se freno");
    }
}, 1000);
*/

// PROMESA
/*
const eventoFuturo = (res) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            res === true ? resolve("Promesa resuelta") : resolve("Promesa rechazada");;
        }, 2000);
    })
}

const valor = false;
console.log(eventoFuturo(valor));

eventoFuturo(valor)
    .then((respuesta) => {
        console.log(respuesta)
    })
    .catch((respuesta) => {
        console.log(respuesta)
    })
    .finally(() => {
        console.log("Finalizo el proceso.")
    });
*/


/********************* EJEMPLO *********************/

const baseDeDatos = [
    {id: "silla", nombre: "Silla", precio: 1500},
    {id: "sillon", nombre: "Sillon", precio: 2500},
    {id: "puerta", nombre: "Puerta", precio: 3500},
    {id: "ventana", nombre: "Ventana", precio: 4500}
];


const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(baseDeDatos);
        }, 2000);
    });
}

let productos = [];
const lista = document.querySelector("#lista-productos");

function MostrarProductos(array) {
    array.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.textContent = `${item.nombre} - ${item.precio}`;

        lista.append(li);
    });
}


pedirProductos()
    .then((res) => {
        productos = res;
        MostrarProductos(productos);
    })


