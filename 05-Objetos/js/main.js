// OBJETOS
/*
const usuario1 = {
    nombre: "Carlitos",
    edad: 31,
    nacionalidad: "Argentina",
    hobbies: {
        hobby1: "Viajar",
        hobby2: "Gym"
    }
}

const usuario2 = {
    nombre: "Daiana",
    edad: 30,
    nacionalidad: "Argentina"
}

const producto1 = {
    titulo: "Sillón",
    color: "Rojo",
    precio: 50000
}

usuario1.nacionalidad = "Ingles";

console.log(usuario1.hobbies.hobby1);
console.log(usuario1.nacionalidad);
console.log(usuario2["nombre"]);
*/

/******************************************************************/
/******************************************************************/

// CONSTRUCTOR  
/*
function Producto (titulo, color, precio) {
    this.titulo = titulo;
    this.color = color;
    this.precio = precio;
}

const producto1 = new Producto("Sillón", "Rojo", 50000);
console.log(producto1);
*/

/******************************************************************/
/******************************************************************/

// CLASES
/*
class Producto {
    constructor(titulo, color, precio) {
        this.titulo = titulo;
        this.color = color;
        this.precio = precio;
    }
}

const producto1 = new Producto("Sillón", "Rojo", 50000);
console.log(producto1);
*/

/******************************************************************/
/******************************************************************/

// METODOS
/*
class Persona {
    constructor (nombre, edad, nacionalidad) {
        // Propiedades
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        // Métodos
        this.saludar = function() { console.log("Hola, soy " + this.nombre); }
        this.cumple = function() { this.edad++; }
    }
}

const persona1 = new Persona("Fernando", 35, "Argentino");
const persona2 = new Persona("Ornechu", 31, "Española");
persona2.saludar();

console.log(persona1.edad);
persona1.cumple();
console.log(persona1.edad);
*/

// OPERADOR IN
/*
console.log("nombre" in persona1); // Siempre devuelve un boolean
if("nombre" in persona1) {
    console.log("Hola, " + persona1.nombre);
} else {
    console.log("No hay NADA");
}
*/
// OPERADOR FOR ... IN
/*
for(const propiedad in persona1) {
    console.log(propiedad);
}
*/

// PROPIEDADES Y METODOS CON VARIABLES Y FUNCIONES EXTERNAS
/*
const IVA = 1.21;

function saludar() {
    console.log("Hola, " + this.nombre);
}

const producto1 = {
    nombre: "Sillón",
    color: "Rojo",
    precio: 44000,
    iva: IVA,
    saludar
}

producto1.saludar();
console.log(producto1);
*/

