
/**
 * Key, Value
 */
// localStorage.setItem("Bienvenido", "Hola Coder");
// let bienvenido = "Hola Coder"
// let mensaje = localStorage.getItem("Bienvenido")
// console.log(mensaje)
// sessionStorage.setItem("Sesion", "Esto es por sesion")

/*
const inputNombre = document.getElementById("inputNombre");
const inputEdad = document.getElementById("inputEdad");
const inputEmail = document.getElementById("inputEmail");
const inputDomicilio = document.getElementById("inputDomicilio");


const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    localStorage.setItem("nombre", inputNombre.value)
    localStorage.setItem("edad", inputEdad.value)
    localStorage.setItem("email", inputEmail.value)
    localStorage.setItem("domicilio", inputDomicilio.value)
});
*/

/*
const prod = {id:2, producto:"Arroz"};
const enJson = JSON.stringify(prod);


console.log(enJson);
console.log(typeof(prod))
console.log(typeof(enJson))


localStorage.setItem("producto", enJson)
*/

const productos = [{ id: 1, producto: "Arroz", precio: 123 },
{ id: 1, producto: "Fideo", precio: 123 },
{ id: 1, producto: "Burguer", precio: 123 }]

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

for (const p of productos) {
    guardarLocal(p.id, JSON.stringify(p))
}

guardarLocal("listaProductos", JSON.stringify(productos));