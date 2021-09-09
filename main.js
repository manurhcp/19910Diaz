// DESAFÍO CLASE 2: Crear un algoritmo con un condicional

let sueldo = prompt ("Indique su salario");
let sueldoIngresado = parseInt(sueldo);


if (sueldoIngresado > 1000){
    alert("Puede comprarse ese par de ojotas que tanto quiere");
} else if (sueldoIngresado <= 1000){ 
    alert("Caminará descalzo");
} else{
    alert("Ingrese un número");
}




let saludo = prompt("Digame Hola");

if (saludo === "Hola"){
    console.log("Saludo correcto");

} else {
    console.log("Lea bien");    

}




let numero = parseInt(prompt("Ingrese número entre 10 y 50"));

   
if ((numero >= 10) && (numero <= 50)) {
    alert("Número ingresado está entre 10 y 50");
    
} else if ((numero < 10) || (numero > 50)) {
    alert("Se recomienda repetir primaria") 
    
} else {
    alert("Eso no es un número")
}








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



































