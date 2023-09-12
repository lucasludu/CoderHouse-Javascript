// console.log(document.body);

// Accedemos mediante el id
/*
const contenido = document.getElementById("contenido");
const parrafos = document.getElementsByClassName("parrafo");
console.log(parrafos);
*/

const contenido = document.querySelector("#contenido");
const parrafos = document.querySelectorAll(".parrafo");
/*
console.log(parrafos);

parrafos.forEach(p => console.log(p));
console.log(parrafos[0]);
*/

// Devuelve una clase de array
/*
console.log(contenido.classList);
contenido.classList.add("prueba2");
contenido.classList.remove("contenido");
console.log(contenido.classList);
*/

// contenido.classList = "prueba";

// Muestra todo el contenido interior (h2 y su p)
// console.log(contenido.innerHTML)

// Solo devuelve los textos
// console.log(contenido.innerText)

// parrafos[0].innerText = "Hola Carlito!";
// innerText no va tener en cuenta las etiquetas
// parrafos[0].innerText = "Hola Carlito! <a href='#'>Esto es un enlace</a>";
// parrafos[0].innerHTML = "Hola Carlito! <a href='#'>Esto es un enlace</a>";

// Eliminar elementos de html
// parrafos[2].remove();

const productos = ["Sillón", "Silla", "Mesa", "Ventana"];

let lista = document.createElement("ul");
lista.classList.add("lista");
// lista.innerHTML = "<li class='lista-item'>" + productos[0] + "</li>";
// lista.innerHTML += "<li class='lista-item'>" + productos[1] + "</li>";
// // TEMPLATE STRINGS
// lista.innerHTML += `<li class="lista-item">${productos[2]}</li>`;
// lista.innerHTML += `<li class="lista-item">${productos[3]}</li>`;

for(p of productos) {
    lista.innerHTML += `<li class="class-item">${p}</li>`
}

// Agrega un elemento html que creamos
// contenido.append(lista);
// console.log(lista);


console.dir(document)