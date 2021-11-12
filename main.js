// Constante API

const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

// Array de objetos

const carrito = [];

const Productos = [
  { id: 1, variedad: "Pan de Campo", precio: 200, img: "img/panDeCampo.jpg"},
  { id: 2, variedad: "Grisines", precio: 100, img: "img/grisinesAceite.jpg" },
  { id: 3, variedad: "Pan Barra", precio: 150, img: "img/panBarra.jpg" },
  { id: 4, variedad: "Pan de Molde", precio: 250, img: "img/panMoldeTabla.jpg"},
];

// escuchar eventos

let agregarAlCarro = $(".btnCarro").length - 1.;

$("#btnSubtot").click(mostrarSubt)

for (let i = 0; i < agregarAlCarro; i++) {
  const botonActual = document.querySelectorAll(".btnCarro")[i];
  botonActual.addEventListener("click", agregarAlCarrito);
  botonActual.setAttribute("id", `${Productos[i].id}`);
}

// Función agregar al carrito

function agregarAlCarrito(e) {
  let foundItem = Productos.find((element, index) => {
    return element.id == e.target.id;
  });
  
  carrito.push(foundItem);

  // Efectos sobre precios y variedad de productos

  $("#productoElegido").hide();
  $("#productoElegido").slideDown(800);
  $(".mostrarPrecios").append(`<div><p id="productoElegido">Producto elegido: ${foundItem.variedad} $ ${foundItem.precio}</p></div><hr>`)
  
  localStorage.setItem("carrito", JSON.stringify(carrito));

  e.preventDefault()

  Toastify({
    text: "El producto se añadio al carrito",
    duration: 1500,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
    background: "black",
    },
    onClick: function(){}
}).showToast();
}
 
// Función subtotal

function mostrarSubt(e) {
  let storageCarrito = JSON.parse(localStorage.getItem("carrito"));
  let totalCarrito = storageCarrito.reduce(
    (acc, element) => acc + element.precio,
    0
  );  
  $.get(url, function (res, status) {
    if (status === "success") {
      let valorDolar = parseFloat(res[1].casa.venta);
      $(".seccionSubtotal")
        .append(`<h3 class="casa"> Su total a pagar en pesos es: $  ${totalCarrito} </h3><hr>`) 
        .append(`<h3> Su total en dólares es u$s: ${totalCarrito / valorDolar}</h3><hr>`);
    }
  });

  e.preventDefault()
}

// Funcion darkmode

$(`.checkbox`).click(function() {
  if ($(`input.checkbox`).is(`:checked`)) {
    $(`.theme`).attr(`href`,`dark.css`)
  }else{
    $(`.theme`).attr(`href`, `light.css`)
  }
});
 
// Función para mostrar las cards

function mostrarCards() {

for (const producto of Productos) {

  $(".tarjetas").append(` <div class="card text-center row bg-dark" style="width: 18rem;">
        <img src="${producto.img}" alt="" class= "imagenes">
        <div class="card-body text-white">
          <h5 class="card-title">${producto.variedad}</h5>
          <h6 class="card-subtitle mb-2 text-muted" id="precioCampo">Precio: $ ${producto.precio}</h6>
          <a href="#" class="btn btn-light btnCarro" id="${producto.id}">Agregar al carrito</a>  
        </div>`);
}

$(".btnCarro").click(agregarAlCarrito);
  
}

mostrarCards()

// Efecto JQ fadeIn sobre las Cards

$(".tarjetas").hide();
$(".tarjetas").fadeIn(2000);

