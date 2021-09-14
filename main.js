
// DESAFÍO CLASE 3: Crear un algoritmo utilizando un ciclo

/* Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado */


alert ("En el campeonato argentino de fútbol se juegan 18 fechas. Vamos a calcular que fechas faltan por jugarse");

let numeroIngresado = parseInt (prompt ("Ingrese la fecha actual"));

for (let i = numeroIngresado; i <= 18; i++) {
    alert("Falta por jugarse la fecha " + i );
    
}


/* Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”. */

let candidato = prompt ("Indique su nombre");

let nombreEmpresas = prompt ("Indique la/s empresa/s donde trabajó \n" + "Escriba ESC al finalizar");

while (nombreEmpresas != "ESC") {

   console.log(candidato + " " + nombreEmpresas);

   nombreEmpresas = prompt ("Ingrese la siguiente empresa donde trabajó \n" + "Escriba ESC al finalizar")
}

/*Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.*/

let numero = parseInt( prompt("Ingrese un número"))


for (let i= 1; i <=  numero  ; i++) {
  
   alert("Hola");
   
}





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

// //pedir nombre mendiante prompt 
// let nombre = prompt("Ingresa tu nombre");

// // texto de saludo
// let saludo = "¡Hola" + " " + nombre + "!";




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

// // mostrado en consola: nombre y saludo
// console.log(saludo);

// // mostrado en consola: edad parseada + número almacenado en variable
// console.log(sumaEdades);

// // mostrado en Alerta: concatenación de usuario y contraseña
// alert(usuarioContraseña);

// -----------------------------------------------------------------------------------------



































