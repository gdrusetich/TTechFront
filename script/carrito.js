const carrito = [];

function agregarProducto(producto){
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function precioTotal(){
    let total = 0;
    carrito.forEach(producto=>{
        total += producto.precio; 
    });
    return total;
}

const formCrear = document.getElementById("form-crear-producto");

formCrear.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("input-nombre").value;
    const precio = document.getElementById("input-precio").value;
    const imagen = document.getElementById("input-imagen").value;

    crearProducto(nombre, precio, imagen);
    formCrear.reset();
});