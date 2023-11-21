document.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var productosString = urlParams.get("productos");
    var productos = JSON.parse(decodeURIComponent(productosString));
    mostrarProductosComprados(productos);
});

function mostrarProductosComprados(productos) {
    var productosCompradosElemento = document.getElementById("productosComprados");

    if (productos && productos.length > 0) {
        var totalCarrito = 0;

        productos.forEach(function (producto) {
            var productoElemento = document.createElement("p");
            productoElemento.textContent = producto.nombre + " - $" + producto.precio.toFixed(2);
            productosCompradosElemento.appendChild(productoElemento);

            totalCarrito += producto.precio;
        });

        var totalElemento = document.createElement("p");
        totalElemento.textContent = "Total del Carrito: $" + totalCarrito.toFixed(2);
        productosCompradosElemento.appendChild(totalElemento);
    } else {
        productosCompradosElemento.textContent = "No hay productos en el carrito.";
    }
}
