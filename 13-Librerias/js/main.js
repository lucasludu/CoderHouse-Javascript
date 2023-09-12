// alert("El profe es pelado")
// Swal.fire('El profe es pelado')

// Swal.fire(
//     'Queres salir del carrito?',
//     'That thing is still around?',
//     'warning'
//   )


let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//     Swal.fire(
//         'Queres salir del carrito?',
//         'That thing is still around?',
//         'warning'
//     )
// })

boton.addEventListener("click", () => {
    Swal.fire({
        title: "Producto agregado al carrito",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
    });
})