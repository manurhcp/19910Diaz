// Array de objetos

const carrito = [];

const Productos = [
  { id: 1, variedad: "Pan de Campo", precio: 200 },
  { id: 2, variedad: "Grisines", precio: 100 },
  { id: 3, variedad: "Pan barra", precio: 150 },
  { id: 4, variedad: "pan de molde", precio: 250 },
];

//Traer id', colocar precios y escuchar eventos

// let precioCampo = document.getElementById("precioCampo");
// let precioGrisin = document.getElementById("precioGrisin");
// let precioBarra = document.getElementById("precioBarra");
// let precioMolde = document.getElementById("precioMolde");


$("#precioCampo").append(`Precio: $ ${Productos[0].precio}`);
$("#precioGrisin").append(`Precio: $ ${Productos[1].precio}`);
$("#precioBarra").append(`Precio: $ ${Productos[2].precio}`);
$("#precioMolde").append(`Precio: $ ${Productos[3].precio}`);

let agregarAlCarro = $(".btnCarro").length - 1;

$("#btnSubtot").click(mostrarSubt);

// colocar precios

// precioCampo.innerHTML = `Precio: $ ${Productos[0].precio}`;
// precioGrisin.innerHTML = `Precio: $ ${Productos[1].precio}`;
// precioBarra.innerHTML = `Precio: $ ${Productos[2].precio}`;
// precioMolde.innerHTML = `Precio: $ ${Productos[3].precio}`;

// Escucha de eventos


for (let i = 0; i < agregarAlCarro; i++) {
  
  // $(".btnCarro").click(agregarAlCarrito).attr("id", `${Productos[i].id}`)---->Traté pero hace otra cosa.
  
  const botonActual = document.querySelectorAll(".btnCarro")[i];
  botonActual.addEventListener("click", agregarAlCarrito);
  botonActual.setAttribute("id", `${Productos[i].id}`);
}

// botonSubtotal.addEventListener("click", mostrarSubt);

// Función agregar al carrito

function agregarAlCarrito(e) {

  let foundItem = Productos.find((element, index) => {
    return element.id == e.target.id;
  });
 
  $("#mostrarPrecios").append(`<div><p>Producto elegido: ${foundItem.variedad} $ ${foundItem.precio}</p></div>`)

  // let div = document.getElementById("mostrarPrecios");
  // let nuevoDiv = document.createElement("div");
  // let nuevoParrafo = document.createElement("p");
  // div.appendChild(nuevoDiv);
  // nuevoDiv.appendChild(nuevoParrafo);
  
  // let foundItem = Productos.find((element, index) => {
  //   return element.id == e.target.id;
  // });
 
  // nuevoParrafo.innerHTML += `Producto elegido: ${foundItem.variedad} $ ${foundItem.precio}`;

  carrito.push(foundItem);

  localStorage.setItem("carrito", JSON.stringify(carrito));
 
}

// Función subtotal

function mostrarSubt() {

  let storageCarrito = JSON.parse(localStorage.getItem("carrito"));
  
  $("#seccionSubtotal").append(`<h3>${storageCarrito.reduce(
    (acc, element) => acc + element.precio,
    0
    )}</h3>`);

  
  // let seccionSubtot = document.getElementById("seccionSubtotal");
  
  // let mostrarSubtotal = document.createElement("h3");
  // seccionSubtot.appendChild(mostrarSubtotal);
  
  
  
  // let storageCarrito = JSON.parse(localStorage.getItem("carrito"));
  
  
  //  mostrarSubtotal.innerHTML = storageCarrito.reduce(
  //   (acc, element) => acc + element.precio,
  //   0
  //   );
        
}


// ENTREGA DESAFÍO CLASE 9: Incorporar eventos

// let contacto = document.getElementById("formulario");

// contacto.addEventListener("submit", mostrarComentario);

// function mostrarComentario(event) {

//     event.preventDefault();
//     let formulario = event.target
//     console.log(`
        
//         NOMBRE: ${formulario.children[0].value} 
//         APELLIDO: ${formulario.children[1].value} 
//         COMENTARIO: ${formulario.children[2].value}`);
     
// };




// // ETREGA DESAFÍO CLASE 8: Interactuar con html

// const seccionPrincipal = document.getElementById('container');
// let nuevoDiv = document.createElement('div');
// let nuevoH1 = document.createElement('h1');
// let nuevoParagraph = document.createElement('p');

// seccionPrincipal.appendChild(nuevoDiv); 
// nuevoDiv.appendChild(nuevoH1);
// nuevoDiv.appendChild(nuevoParagraph);

// nuevoH1.innerHTML = "Productos";
// nuevoParagraph.innerHTML = "Nuestros Panes";
// nuevoH1.classList.add('titulo')
// nuevoParagraph.classList.add('subtituloProductos')

// const productos = [{id: 1, variedad: 'Pan de Campo', precio: 200},
//                   {id: 2, variedad: 'Grisines', precio:100},
//                   {id: 3, variedad: 'Pan barra', precio: 150},
//                   {id: 4, variedad: 'pan de molde', precio: 250}];

// for (const producto of productos) {
//     let container = document.createElement('div');
//     container.classList.add('productos');
//     container.innerHTML = `<p>Producto: ${producto.variedad}</p>
//                           <p>Precio: $${producto.precio}</p>`;  
//     nuevoDiv.appendChild(container);
// }




// //ETREGA DESAFÍO CLASE 6: INCORPORAR ARRAYS (posible desafío complementario)

// const Productos = {opcion1: "Panes", opcion2: "Conservas"}


// class Pan {
//     constructor(variedad, precio) {

//         this.variedad = variedad;
//         this.precio = precio;

//     }
    
// }

// const pan1 = new Pan ( "Pan de campo $", 200);
// const pan2 = new Pan ( "Grisines $", 100);
// const pan3 = new Pan ( "Pan barra $", 150);
// const pan4 = new Pan ( "pan de molde $", 250 );

// const panes=[];



// panes.push(new Pan (" Pan de campo $", 200));
// panes.push(new Pan (" Grisines $", 100));
// panes.push(new Pan (" Pan barra $", 150));
// panes.push(new Pan (" Pan de molde $", 250 ));


// for (const pan of panes) {
    
//     console.log(pan.variedad + pan.precio)
// }

// /* Ram pongo esto para que veas que entendí el concepto de sort, pero no estoy pudiendo llamar al array, y no entiendo el por que, si lo podemos ver te lo agradecería*/

// const panesPrecioOrdenado = [200, 100, 150, 250];
// panesPrecioOrdenado.sort();
// console.log(panesPrecioOrdenado);

// // --------------------(Sigue abajo)--------------------------------------


// console.log(panes.slice(2,4))





// class Conserva {
//     constructor(variedad, precio){

//         this.variedad = variedad;
//         this.precio = precio;
//     }
// }

// const conserva1 = new Conserva ("Confitado de Tomates $", 200);
// const conserva2 = new Conserva ("Escabeche de Porotos $", 100);
// const conserva3 = new Conserva ("Escabeche de Pencas $", 150);
// const conserva4 = new Conserva ("Escabeche de Zanahorias $", 250);


// const conservas =[];

// conservas.push(new Conserva (" Confitado de Tomates $", 200));
// conservas.push(new Conserva (" Escabeche de Porotos $", 100));
// conservas.push(new Conserva (" Escabeche de Pencas $", 150));
// conservas.push(new Conserva (" Escabeche de Zanahorias $", 250));


// for (const conserva of conservas) {
    
//     console.log(conserva.variedad + conserva.precio)
// }

// console.log(conservas.length);





// let entradaUsuario = parseInt (prompt("Hola, indíquenos el número de la delicia que desea: \n (1)" + Productos.opcion1.toUpperCase() + "\n (2)" + Productos.opcion2.toUpperCase()))
    
//  let entradaPanes;
//  let entradaConservas;

//  if (entradaUsuario === 1) {

//     entradaPanes = parseInt (prompt("¡Hermosa elección!. Ahora ingrese que panificado desea: \n (1)" + pan1.variedad + pan1.precio + "\n (2)" + pan2.variedad + pan2.precio + "\n (3)" + pan3.variedad + pan3.precio + "\n (4)" + pan4.variedad + pan4.precio));

//         console.log(ingresoPanes(entradaPanes));
 

//     }else if (entradaUsuario ===2 ){

//         entradaConservas = parseInt (prompt("¡Qué rico!. ¿Qué conservas quiere? \n (1)" + conserva1.variedad + conserva1.precio + "\n (2)" + conserva2.variedad + conserva2.precio + "\n (3)" + conserva3.variedad + conserva3.precio + "\n (4)" + conserva4.variedad + conserva4.precio));

//         console.log(ingresoConservas(entradaConservas));

//     }else if (entradaUsuario > 2 ){ 
//         alert("El producto no existe")
//     }


//     function ingresoPanes(entradaPanes) {

//     switch (entradaPanes) {
//         case 1:
//             return pan1.variedad + pan1.precio;
//             break;
    
//         case 2:
//             return pan2.variedad + pan2.precio;
//             break;
            
//         case 3:
//             return pan3.variedad + pan3.precio;
//             break;    
    
//         case 4:
//             return pan4.variedad + pan4.precio;
//             break;    
        
//         default:
//             return "El producto no existe";
//             break;
//     }
    
// }

// function ingresoConservas(entradaConservas) {

//     switch (entradaConservas) {
//         case 1:
//             return conserva1.variedad + conserva1.precio;
//             break;
    
//         case 2:
//             return conserva2.variedad + conserva2.precio;
//             break;
            
//         case 3:
//             return conserva3.variedad + conserva3.precio;
//             break;    
    
//         case 4:
//             return conserva4.variedad + conserva4.precio;
//             break;    
        
//         default:
//             return "El producto no existe";
//             break;
//     }
    
// }

// // PRIMER ENTREGA PARCIAL DE PROYECTO FINAL

// const Productos = {opcion1: "Panes", opcion2: "Conservas"}


// class Panes {
//     constructor(variedad, precio) {

//         this.variedad = variedad;
//         this.precio = precio;

//     }
    
// }

// const pan1 = new Panes ("Pan de campo $", 200);
// const pan2 = new Panes ("Grisines $", 100);
// const pan3 = new Panes ("Pan barra $", 150);
// const pan4 = new Panes ("pan de molde $", 250 );


// class Conservas {
//     constructor(variedad, precio){

//         this.variedad = variedad;
//         this.precio = precio;
//     }
// }

// const conserva1 = new Conservas ("Confitado de Tomates $", 200);
// const conserva2 = new Conservas ("Escabeche de Porotos $", 100);
// const conserva3 = new Conservas ("Escabeche de Pencas $", 150);
// const conserva4 = new Conservas ("Escabeche de Zanahorias $", 250);

// let entradaUsuario = parseInt (prompt("Hola, indíquenos el número de la delicia que desea: \n (1)" + Productos.opcion1.toUpperCase() + "\n (2)" + Productos.opcion2.toUpperCase()))
    
//  let entradaPanes;
//  let entradaConservas;

//  if (entradaUsuario === 1) {

//     entradaPanes = parseInt (prompt("¡Hermosa elección!. Ahora ingrese que panificado desea: \n (1)" + pan1.variedad + pan1.precio + "\n (2)" + pan2.variedad + pan2.precio + "\n (3)" + pan3.variedad + pan3.precio + "\n (4)" + pan4.variedad + pan4.precio));

//         console.log(ingresoPanes(entradaPanes));
 

//     }else if (entradaUsuario ===2 ){

//         entradaConservas = parseInt (prompt("¡Qué rico!. ¿Qué conservas quiere? \n (1)" + conserva1.variedad + conserva1.precio + "\n (2)" + conserva2.variedad + conserva2.precio + "\n (3)" + conserva3.variedad + conserva3.precio + "\n (4)" + conserva4.variedad + conserva4.precio));

//         console.log(ingresoConservas(entradaConservas));

//     }else if (entradaUsuario > 2 ){ 
//         alert("El producto no existe")
//     }


//     function ingresoPanes(entradaPanes) {

//     switch (entradaPanes) {
//         case 1:
//             return pan1.variedad + pan1.precio;
//             break;
    
//         case 2:
//             return pan2.variedad + pan2.precio;
//             break;
            
//         case 3:
//             return pan3.variedad + pan3.precio;
//             break;    
    
//         case 4:
//             return pan4.variedad + pan4.precio;
//             break;    
        
//         default:
//             return "El producto no existe";
//             break;
//     }
    
// }

// function ingresoConservas(entradaConservas) {

//     switch (entradaConservas) {
//         case 1:
//             return conserva1.variedad + conserva1.precio;
//             break;
    
//         case 2:
//             return conserva2.variedad + conserva2.precio;
//             break;
            
//         case 3:
//             return conserva3.variedad + conserva3.precio;
//             break;    
    
//         case 4:
//             return conserva4.variedad + conserva4.precio;
//             break;    
        
//         default:
//             return "El producto no existe";
//             break;
//     }
    
// }


// // DESAFÍO CLASE 5: Incorporar objetos


// const Productos = {opcion1: "Panes", opcion2: "Conservas"}


// class Panes {
//     constructor(variedad, precio) {

//         this.variedad = variedad;
//         this.precio = precio;

//     }
    
// }

// const pan1 = new Panes ("Pan de campo $", 200);
// const pan2 = new Panes ("Grisines $", 100);
// const pan3 = new Panes ("Pan barra $", 150);
// const pan4 = new Panes ("pan de molde $", 250 );


// class Conservas {
//     constructor(variedad, precio){

//         this.variedad = variedad;
//         this.precio = precio;
//     }
// }

// const conserva1 = new Conservas ("Confitado de Tomates $", 200);
// const conserva2 = new Conservas ("Escabeche de Porotos $", 100);
// const conserva3 = new Conservas ("Escabeche de Pencas $", 150);
// const conserva4 = new Conservas ("Escabeche de Zanahorias $", 250);

// let entradaUsuario = parseInt (prompt("Hola, indíquenos el número de la delicia que desea: \n (1)" + Productos.opcion1.toUpperCase() + "\n (2)" + Productos.opcion2.toUpperCase()))
    
//  let entradaPanes;
//  let entradaConservas;

//  if (entradaUsuario === 1) {

//     entradaPanes = parseInt (prompt("¡Hermosa elección!. Ahora ingrese que panificado desea: \n (1)" + pan1.variedad + pan1.precio + "\n (2)" + pan2.variedad + pan2.precio + "\n (3)" + pan3.variedad + pan3.precio + "\n (4)" + pan4.variedad + pan4.precio));

//         console.log(ingresoPanes(entradaPanes));
 

//     }else if (entradaUsuario ===2 ){

//         entradaConservas = parseInt (prompt("¡Qué rico!. ¿Qué conservas quiere? \n (1)" + conserva1.variedad + conserva1.precio + "\n (2)" + conserva2.variedad + conserva2.precio + "\n (3)" + conserva3.variedad + conserva3.precio + "\n (4)" + conserva4.variedad + conserva4.precio));

//         console.log(ingresoConservas(entradaConservas));

//     }else if (entradaUsuario > 2 ){ 
//         alert("El producto no existe")
//     }


//     function ingresoPanes(entradaPanes) {

//     switch (entradaPanes) {
//         case 1:
//             return pan1.variedad + pan1.precio;
//             break;
    
//         case 2:
//             return pan2.variedad + pan2.precio;
//             break;
            
//         case 3:
//             return pan3.variedad + pan3.precio;
//             break;    
    
//         case 4:
//             return pan4.variedad + pan4.precio;
//             break;    
        
//         default:
//             return "El producto no existe";
//             break;
//     }
    
// }

// function ingresoConservas(entradaConservas) {

//     switch (entradaConservas) {
//         case 1:
//             return conserva1.variedad + conserva1.precio;
//             break;
    
//         case 2:
//             return conserva2.variedad + conserva2.precio;
//             break;
            
//         case 3:
//             return conserva3.variedad + conserva3.precio;
//             break;    
    
//         case 4:
//             return conserva4.variedad + conserva4.precio;
//             break;    
        
//         default:
//             return "El producto no existe";
//             break;
//     }
    
// }






// // DESAFÍO CLASE 4: Simulador interactivo

// const opcion1 = "Panes"
// const opcion2 = "Conservas"

// let pan1 = "Pan de campo"
// let pan2 = "Grisines"
// let pan3 = "Pan barra"
// let pan4 = "Pan de molde"

// let conserva1 = "Confitado de Tomates"
// let conserva2 = "Escabeche de Porotos"
// let conserva3 = "Escabeche de Pencas"
// let conserva4 = "Escabeche de Zanahorias"

// let precio1 = 200
// let precio2 = 100
// let precio3 = 150
// let precio4 = 250

// let precio5 = 300
// let precio6 = 150
// let precio7 = 100
// let precio8 = 150

// let entradaUsuario = parseInt (prompt("Hola, indíquenos el número de la delicia que desea: \n (1)" + opcion1 + "\n (2)" + opcion2));

// let entradaPanes;

// let entradaConservas;


// if (entradaUsuario === 1) {

//     entradaPanes = parseInt (prompt("¡Hermosa elección!. Ahora ingrese que panificado desea: \n (1)" + pan1 + "\n (2)" + pan2 + "\n (3)" + pan3 + "\n (4)" + pan4))
//     console.log(ingresoPanes (entradaPanes));


//     }else if (entradaUsuario ===2 ){

//         entradaConservas = parseInt (prompt("¡Qué rico!. ¿Qué conservas quiere? \n (1)" + conserva1 + "\n (2)" + conserva2 + "\n (3)" + conserva3 + "\n (4)" + conserva4))
//         console.log(ingresoPanes (entradaConservas));

//     }else if (entradaUsuario > 2 ){ 
//         alert("El producto no existe")
//     }


// function ingresoPanes(entradaPanes) {

//     switch (entradaPanes) {
//         case 1:
//             return pan1 +" $"+ precio1;
//             break;
    
//         case 2:
//             return pan2 +" $"+ precio2;
//             break;
            
//         case 3:
//             return pan3 +" $"+ precio3;
//             break;    
    
//         case 4:
//             return pan4 +" $"+ precio4;
//             break;    
        
//         default:
//             return "El producto no existe";
//             break;
//     }
    
// }

// function ingresoConservas(entradaConservas) {

//     switch (entradaConservas) {
//         case 1:
//             return conserva1 +" $"+ precio5;
//             break;
    
//         case 2:
//             return conserva2 +" $"+ precio6;
//             break;
            
//         case 3:
//             return conserva3 +" $"+ precio7;
//             break;    
    
//         case 4:
//             return conserva4 +" $"+ precio8;
//             break;    
        
//         default:
//             return "El producto no existe";
//             break;
//     }
    
// }




        
    

    






// ------------------------------------------------------------------------------------------------------------------------------------------------


// // DESAFÍO CLASE 3: Crear un algoritmo utilizando un ciclo

// /* Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado */


// alert ("En el campeonato argentino de fútbol se juegan 18 fechas. Vamos a calcular que fechas faltan por jugarse");

// let numeroIngresado = parseInt (prompt ("Ingrese la fecha actual"));

// for (let i = numeroIngresado; i <= 18; i++) {
//     alert("Falta por jugarse la fecha " + i );
    
// }


// /* Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”. */

// let candidato = prompt ("Indique su variedad");

// let variedadEmpresas = prompt ("Indique la/s empresa/s donde trabajó \n" + "Escriba ESC al finalizar");

// while (variedadEmpresas != "ESC") {

//    console.log(candidato + " " + variedadEmpresas);

//    variedadEmpresas = prompt ("Ingrese la siguiente empresa donde trabajó \n" + "Escriba ESC al finalizar")
// }

// /*Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.*/

// let numero = parseInt( prompt("Ingrese un número"))


// for (let i= 1; i <=  numero  ; i++) {
  
//    alert("Hola");
   
// }





// -----------------------------------------------------------------------------------------------------------

// // DESAFÍO CLASE 2: Crear un algoritmo con un condicional

// inicioear un algoritmo con un condicional

// let sueldo = prompt ("Indique su salario");
// let sueldoIngresado = parseInt(sueldo);


// if (sueldoIngresado > 1000){
//     alert("Puede comprarse ese par de ojotas que tanto quiere");
// } else if (sueldoIngresado <= 1000){ 
//     alert("Caminará descalzo");
// } else{
//     alert("Ingrese un número");
// }




// let saludo = prompt("Digame Hola");

// if (saludo === "Hola"){
//     console.log("Saludo correcto");

// } else {
//     console.log("Lea bien");    

// }




// let numero = parseInt(prompt("Ingrese número entre 10 y 50"));

   
// if ((numero >= 10) && (numero <= 50)) {
//     alert("Número ingresado está entre 10 y 50");
    
// } else if ((numero < 10) || (numero > 50)) {
//     alert("Se recomienda repetir primaria") 
    
// } else {
//     alert("Eso no es un número")
// }








// -------------------------------------------------------------------------------------------

// // DESAFÍO CLASE 1: Crear algoritmo JS simple

// //pedir variedad mendiante prompt 
// let variedad = prompt("Ingresa tu variedad");

// // texto de saludo
// let saludo = "¡Hola" + " " + variedad + "!";




// // número mediante promt
// let edadUsuario = prompt("Ingresa tu edad");

// // parseo
// let edad = parseInt(edadUsuario);

// // numero en variable
// let cinco = 5;

// // suma
// let sumaEdades = edad + cinco;




// // pedir textos mediante promt
// let usuario = prompt("Ingresa tu usuario");
// let contraseña = prompt("Ingresa tu contraseña");

// // cocatenación
// let usuarioContraseña = "su usuario es" + " " + usuario + " " + "y su contraseña es" + " " + contraseña;

// // mostrado en consola: variedad y saludo
// console.log(saludo);

// // mostrado en consola: edad parseada + número almacenado en variable
// console.log(sumaEdades);

// // mostrado en Alerta: concatenación de usuario y contraseña
// alert(usuarioContraseña);

// -----------------------------------------------------------------------------------------



































