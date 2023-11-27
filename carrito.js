document.addEventListener("DOMContentLoaded", function () {
    let urlParams = new URLSearchParams(window.location.search);
    let productosString = urlParams.get("productos");
    let productos = JSON.parse(decodeURIComponent(productosString));
    mostrarProductosComprados(productos);
});

function mostrarProductosComprados(productos) {
    let productosCompradosElemento = document.getElementById("productosComprados");

    if (productos && productos.length > 0) {
        let totalCarrito = 0;

        productos.forEach(function (producto) {
            let productoElemento = document.createElement("p");
            productoElemento.textContent = producto.nombre + " - $" + producto.precio.toFixed(2);
            productosCompradosElemento.appendChild(productoElemento);

            totalCarrito += producto.precio;
        });

        let totalElemento = document.createElement("p");
        totalElemento.textContent = "Total del Carrito: $" + totalCarrito.toFixed(2);
        productosCompradosElemento.appendChild(totalElemento);
    } else {
        productosCompradosElemento.textContent = "No hay productos en el carrito.";
    }
}
