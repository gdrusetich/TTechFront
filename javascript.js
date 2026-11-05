let producto;
let precio;
/*
Tipos de variables:
undefined
boolean
let activo = true;
number
let edad = 30;
string
let nombre = "Juan";
null
let resultado = null;
BigInt
let numeroGrande = 1231343636n;
Symbol
let id = Symbol("Clave");
*/

const usuario = {
    nombre: "Laura",
    edad: 28,
    esDesarrolladora: true,
    ciudad: "Buenos Aires"
};

console.log(usuario.nombre);
console.log(usuario.edad);
console.log(usuario.esDesarrolladora);
console.log(usuario.ciudad);

usuario.nombre = "Laurita";//Modificar propiedades.
usuario.pais = "Argentina"; //Agregamos un atributo

const persona = {
    nombre: "Lucas",
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 742
    },
    hobbies: ["Programar", "Leer", "Correr"]
};

console.log(persona.direccion.calle);
console.log(persona.hobbies[1]);

//ARRAYS
const diasDeSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
diasDeSemana.push("Sábado"); //Agrega al final.
diasDeSemana.unshift("Domingo");//Agrega al principio

//Condicionales
if(usuario.edad>17)
    console.log(usuario.nombre + "es mayor de edad.");
else
    console.log(usuario.nombre + "es menor de edad");

/*  COMPARADORES
==      Compara si son iguales, y no necesario sean el mismo tipo de dato.
===     Compara si son iguales y el mismo tipo de dato.
!=      Verifica si dos valores son diferentes.
!==     Verifica si dos valores son diferentes, incluyendo su tipo de dato

    OPERADORES LÓGICOS
&&  AND
||  OR
!   NOT
*/


/*BUCLES*/
let i = 0;
while(i<5){
    console.log(i);
    i++;
}

for(let j = 0; j < 5; j++){ //Se puede utilizar i, ya que está declarado dentro del bucle.
    console.log(j);
}

function calcularArea(largo, ancho){
    return largo*ancho;
}

console.log(calcularArea(5,3));

function saludar(nombre){
    return "Hola " + nombre;
}

console.log(saludar("Pedrito"));

function sumar(a,b){
    return a+b;
}

const multiplicar = (a,b) => {
    return a*b;
}

const catalogoInicial = ["Teclado", "Mouse"];
const nuevoProducto = "Monitor";

function agregarProducto(catalogo, producto) {
    const nuevoCatalogo = [...catalogo, producto];
    return nuevoCatalogo;
}

alert("¿Desea cancelar todo el proceso, y tirarlo todo a la basura para nunca jamás volver a verlo?");
let numero = parseInt("123");

let aleatorio = Math.random(); //Genera un número aleatorio entre 0 y 1.
console.log(aleatorio);

let fechaActual = new Date();   //Para mostrar la fecha actual.
console.log(fechaActual);
console.log(new Date());

/*
DOM
*/

//let elementoHeader = document.getElementById("...");
//console.log(elementoHeader);

//getElementsByClassName: Devuelve una coleccioón de elementos que comparte el nombre de la clase.
let elementoHeader = document.getElementsByClassName("header-saludo");

/*querySelector(); Permite seleccionar el primer elemento que coincida con el selector .css
let primerParrafo = document.querySelector(".contenedor .texto");
primerParrafo.textContent = "Modifico el contenido";
*/
//querySelectorAll(".contenedor .texto"); Devuelve todos los elementos que coinciden con el selector.
//Devuelve una listas de nodos, y permite utilizar forEach.

//createElement(); Crea un elemento
//appendChild; Lo añade a la página.



const productosDestacados = document.querySelector(".productos-destacados-grid");
function crearProducto(unProducto){

}

// Guardar datos en localStorage
localStorage.setItem('usuario', 'Pedro');
// Obtener datos de localStorage
localStorage.getItem('usuario');
console.log(usuario);
//Eliminar datos de localStorage
localStorage.removeItem('usuario');
//Eliminar todos los datos de localStorage
localStorage.clear();

//Las mismas 4 funciones se utilizan para sessionStorage

function crearProducto(nombre, precio, rutaImagen) {
    const tarjetaProducto = document.createElement("div");
    tarjetaProducto.classList.add("producto");

    tarjetaProducto.innerHTML = `
        <img src="${rutaImagen}" class="producto-destacado-img">
        <div class="producto-destacado-titulo">${nombre}</div>
        <p class="producto-destacado-precio">$${precio}</p>
    `;

    const botonCarrito = document.createElement("button");
    botonCarrito.textContent = "Agregar al carrito";

    botonCarrito.addEventListener("click", () => {
        agregarAlCarrito({ nombre: nombre, precio: Number(precio) });
    });

    tarjetaProducto.appendChild(botonCarrito);
    grilla.appendChild(tarjetaProducto);
}

document.getElementById("btn-crear-producto").addEventListener("click", function() {
    const nombre = document.getElementById("input-nombre").value;
    const precio = document.getElementById("input-precio").value;
    const imagen = document.getElementById("input-imagen").value;

    if (nombre && precio && imagen) {
        crearProducto(nombre, precio, imagen);
        
        document.getElementById("input-nombre").value = "";
        document.getElementById("input-precio").value = "";
        document.getElementById("input-imagen").value = "";
    } else {
        alert("Completá todos los campos");
    }
});

/*
JSON.stringify(carrito)
convierte nuestro carrito array de objetos, en cadena de texto.
LocalStorage solo puede guardar strings.
JSON.parse()
convierte la cadena en array.
Para cuando queramos recuperarlo,
*/

