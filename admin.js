const grilla = document.querySelector(".productos-destacados-grid");

let productos = JSON.parse(localStorage.getItem("productos")) || [];

function guardarProducto(){
    localStorage.setItem("productos", JSON.stringify(productos));
}

function crearProducto(nombre, precio, rutaImagen, categoria) {
    const tarjetaProducto = document.createElement("div");
    tarjetaProducto.classList.add("producto");
    tarjetaProducto.dataset.categoria = categoria;

    const img = document.createElement("img");
    img.src = rutaImagen;
    img.classList.add("producto-destacado-img");

    const titulo = document.createElement("div");
    titulo.classList.add("producto-destacado-titulo");
    titulo.textContent = nombre;

    const precioElement = document.createElement("p");
    precioElement.classList.add("producto-destacado-precio");
    precioElement.textContent = "$" + precio;

    const botonAgregarAlCarrito = document.createElement("button");
    botonAgregarAlCarrito.textContent = "Agregar al carrito";
    botonAgregarAlCarrito.addEventListener("click", function() {
        agregarAlCarrito({
            nombre: nombre,
            precio: Number(precio)
        });
    });

    const botonEliminarProducto = document.createElement("button");
    botonEliminarProducto.textContent = "Eliminar Producto";

    botonEliminarProducto.addEventListener("click", function () {
        eliminarProducto(nombre, precio, tarjetaProducto);
    });

    tarjetaProducto.appendChild(img);
    tarjetaProducto.appendChild(titulo);
    tarjetaProducto.appendChild(precioElement);
    tarjetaProducto.appendChild(botonAgregarAlCarrito);
    tarjetaProducto.appendChild(botonEliminarProducto);
    grilla.appendChild(tarjetaProducto);

}

function eliminarProducto(nombre, precio, tarjeta) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre === nombre && Number(productos[i].precio) === Number(precio)) {
            productos.splice(i, 1);
            break;
        }
    }
    guardarProducto();
    tarjeta.remove();
}

const formCrearProducto = document.getElementById("form-crear-producto");
formCrearProducto.addEventListener("submit", function(evento){
    evento.preventDefault();

    const nombre = document.getElementById("input-nombre").value;
    const precio = document.getElementById("input-precio").value;
    const imagen = document.getElementById("input-imagen").value;
    const categoria = document.getElementById("input-categoria").value;

    if (nombre && precio && categoria) {
        const rutaImagen = imagen ? imagen: "img/default.png";

        const nuevoProducto = {
            nombre: nombre,
            precio: precio,
            imagen: rutaImagen,
            categoria: categoria
        };
        productos.push(nuevoProducto);
        guardarProducto();

        crearProducto(nombre, precio, rutaImagen, categoria);
        formCrearProducto.reset();
    } else {
        alert("Completar todos los campos");
    }
});

for (let i = 0; i < productos.length; i++) {
    const p = productos[i];
    crearProducto(p.nombre, p.precio, p.imagen, p.categoria);
}

function filtrarPorCategoria(categoria) {
    const tarjetas = document.querySelectorAll(".producto");

    for (let i = 0; i < tarjetas.length; i++){
        const tarjeta = tarjetas[i];

    if (categoria === "todos") 
        tarjeta.style.display = "block";
    else if (tarjeta.dataset.categoria === categoria) 
        tarjeta.style.display = "block";
    else
        tarjeta.style.display = "none";
    
    }

}

const categorias = document.querySelectorAll(".categoria");

for (let i = 0; i < categorias.length; i++) {
    categorias[i].addEventListener("click", function () {
        const categoria = this.dataset.categoria;
        filtrarPorCategoria(categoria);
    });
}

document.getElementById("btn-ver-todos").addEventListener("click", function(){
    filtrarPorCategoria("todos");
});