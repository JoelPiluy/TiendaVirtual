// function sumaTotal() {
//     let precio=document.querySelector('.precios');
//     let p=Number(precio.textContent);
//     console.log('precio',typeof p); 
//     //alert(p `${typeof Number(p)}`)
//    // alert(p)
//    return p;
// }


var total = 0;
var productosComprados = [];

document.addEventListener("DOMContentLoaded", function () {
    let botonesCompra = document.getElementsByClassName("comprar");
    for (var i = 0; i < botonesCompra.length; i++) {
        botonesCompra[i].addEventListener("click", function () {
            let precioProducto = parseFloat(this.parentElement.getAttribute("data-precio"));
            total += precioProducto;
            actualizarTotal();
        });
    }
});


function actualizarTotal() {
    let totalElemento = document.getElementById("total");
    totalElemento.textContent = "Total: $" + total.toFixed(2);
}

function comprarProducto(nombre, precio) {
    productosComprados.push({ nombre: nombre, precio: precio });
    actualizarTotal();
}

function verCarrito() {
    let productosString = encodeURIComponent(JSON.stringify(productosComprados));
    window.location.href = "carrito.html?productos=" + productosString;
}

