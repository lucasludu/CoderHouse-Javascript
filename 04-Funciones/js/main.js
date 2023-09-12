// Funciones declaradas
/*
function Saludar(nombre) {
    console.log("Hola " + nombre);
}
Saludar("Carlito");
*/

// Funciones anonimas
/*
const Saludar = function(nombre) {
    console.log("Hola " + nombre);
}
Saludar("Fernandoo");
*/

// Funciones flecha

// Un solo parametro y una sola sentencia, se puede obviar los parentesis y las llaves.
// const saludar = (nombre) => console.log("Hola " + nombre);
/*
const saludar = (nombre) => {
    console.log("Hola " + nombre);
}
saludar("Genga");
*/

// Funciones declaradas con retorno
/*
function Saludar(nombre) {
    return "Hola " + nombre;
}
let saludoA = Saludar("Anchelo") 
console.log(saludoA);
*/

// Funciones flecha con retorno implicito.
const Suma = (a, b) =>  (a + b);
console.log(Suma(1,4));