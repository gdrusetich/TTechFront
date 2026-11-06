let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(producto){
    carrito.push(producto);
    guardarCarrito();
    renderizarCarrito();
}

function quitarDelCarrito(producto){
    carrito.splice(producto);
    guardarCarrito();
    renderizarCarrito();
}

function vaciarCarrito(){
    carrito = [];
    guardarCarrito();
    renderizarCarrito();
}


function precioTotal(){
    let total = 0;
    carrito.forEach(producto=>{
        total += producto.precio; 
    });
    return total;
}

function renderizarCarrito(){
    const cantidad = document.getElementById("cantidad-productos-carrito");
    const total = document.getElementById("precio-total-carrito");

    cantidad.textContent = "Cantidad de Productos: " + carrito.length;
    total.textContent = "Precio Total: " + precioTotal();

}

document.getElementById("vaciar-carrito").addEventListener("click", vaciarCarrito);

renderizarCarrito();