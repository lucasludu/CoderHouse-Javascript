
let carrito = [];

function AgregarAlCarrito() {
    const producto = document.getElementById("producto");
    const cantidad = document.getElementById("cantidad");


    if(!isNaN(cantidad) && cantidad > 0) {
        const item = {producto, cantidad};
        carrito.push(item);
    } else {
        alert("por favor ingresa datos validos");
    }
}


function ActualizarCarrito() {
    const carritoElement = document.getElementById("carrito");
    carritoElement.innerHTML =  "";

    carrito.forEach((item) => {
        const listaItem = document.createElement("li");
        listaItem.textContent = `${item.producto} - Cantidad ${item.cantidad}`
        carritoElement.appendChild(listaItem);
    });
}

function GuardarCarrito() {
    const carritoJson = JSON.stringify(carrito);
    localStorage.setItem("carritoData", carritoJson);
    alert("Carrito guardado en el localsotrage")
}


function AgregarAlCarrito() {
    const carritoJson = localStorage.getItem("carritoData");
    if(carritoJson) {
        carrito = JSON.parse(carritoJson);
        ActualizarCarrito();
    }
}

window.addEventListener("load", GuardarCarrito)