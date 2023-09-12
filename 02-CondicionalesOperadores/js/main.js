// Es igual                     --> ==
// Es estrictamente igual       --> ===
// Es distinto                  --> !=               
// Es estrictamente distinto    --> !==
// Menor                        --> <
// Mayor                        --> >
// Menor o igual                --> <= 
// Mayor o igual                --> >=

// OPERADOR AND (y)     --> &&            
// OPERADOR OR (o)      --> ||
// OPERADOR NOT (no)    --> !

/*
let edad = prompt("Ingrese su edad: ");

if (edad >= 18) {
    alert("Sos mayor de edad. Podes ingresar.");
} else {
    alert("Sos menor de edad. No podes ingresar.");
}
*/

/*
let hora = prompt("Ingrese la hora: ");

if (hora >= 6 && hora < 12) {
    alert("Buenos dias.");
} else if (hora >= 12 && hora < 19) {
    alert("Buenas tardes."); 
} else {
    alert("Buenas noches.");
}
*/

let usuario1 = "Lucas";
let usuario2 = "Daiana";

let nombreUsuario = prompt("Ingrese nombre de usuario: ");

// if (nombreUsuario == "Lucas") {
//     alert("Bienvenido " + usuario1);
// } else if(nombreUsuario == "Daiana") {
//     alert("Bienvenido " + usuario2);
// } else {
//     alert("Usuario incorrecto.");
// }

if (nombreUsuario == usuario1 || nombreUsuario == usuario2) {
    alert("Bienvenid@ " + nombreUsuario);
} else {
    alert("Usuario Incorrecto.");
}
















