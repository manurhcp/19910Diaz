// DESAFÍO CLASE 4: Simulador interactivo

const opcion1 = "Panes"
const opcion2 = "Conservas"

let pan1 = "Pan de campo"
let pan2 = "Grisines"
let pan3 = "Pan barra"
let pan4 = "Pan de molde"

let conserva1 = "Confitado de Tomates"
let conserva2 = "Escabeche de Porotos"
let conserva3 = "Escabeche de Pencas"
let conserva4 = "Escabeche de Zanahorias"

let precio1 = 200
let precio2 = 100
let precio3 = 150
let precio4 = 250

let precio5 = 300
let precio6 = 150
let precio7 = 100
let precio8 = 150

let entradaUsuario = parseInt (prompt("Hola, indíquenos el número de la delicia que desea: \n (1)" + opcion1 + "\n (2)" + opcion2))

let entradaPanes

let entradaConservas


if (entradaUsuario === 1) {

    entradaPanes = parseInt (prompt("¡Hermosa elección!. Ahora ingrese que panificado desea: \n (1)" + pan1 + "\n (2)" + pan2 + "\n (3)" + pan3 + "\n (4)" + pan4))
    console.log(ingresoPanes (entradaPanes));


    }else if (entradaUsuario ===2 ){

        entradaConservas = parseInt (prompt("¡Qué rico!. ¿Qué conservas quiere? \n (1)" + conserva1 + "\n (2)" + conserva2 + "\n (3)" + conserva3 + "\n (4)" + conserva4))
        console.log(ingresoPanes (entradaConservas));

    }else if (entradaUsuario > 2 ){ 
        alert("El producto no existe")
    }


function ingresoPanes(entradaPanes) {

    switch (entradaPanes) {
        case 1:
            return pan1 +" $"+ precio1;
            break;
    
        case 2:
            return pan2 +" $"+ precio2;
            break;
            
        case 3:
            return pan3 +" $"+ precio3;
            break;    
    
        case 4:
            return pan4 +" $"+ precio4;
            break;    
        
        default:
            return "El producto no existe";
            break;
    }
    
}

function ingresoConservas(entradaConservas) {

    switch (entradaConservas) {
        case 1:
            return conserva1 +" $"+ precio5;
            break;
    
        case 2:
            return conserva2 +" $"+ precio6;
            break;
            
        case 3:
            return conserva3 +" $"+ precio7;
            break;    
    
        case 4:
            return conserva4 +" $"+ precio8;
            break;    
        
        default:
            return "El producto no existe";
            break;
    }
    
}




        
    

    






// ------------------------------------------------------------------------------------------------------------------------------------------------


// // DESAFÍO CLASE 3: Crear un algoritmo utilizando un ciclo

// /* Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado */


// alert ("En el campeonato argentino de fútbol se juegan 18 fechas. Vamos a calcular que fechas faltan por jugarse");

// let numeroIngresado = parseInt (prompt ("Ingrese la fecha actual"));

// for (let i = numeroIngresado; i <= 18; i++) {
//     alert("Falta por jugarse la fecha " + i );
    
// }


// /* Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”. */

// let candidato = prompt ("Indique su nombre");

// let nombreEmpresas = prompt ("Indique la/s empresa/s donde trabajó \n" + "Escriba ESC al finalizar");

// while (nombreEmpresas != "ESC") {

//    console.log(candidato + " " + nombreEmpresas);

//    nombreEmpresas = prompt ("Ingrese la siguiente empresa donde trabajó \n" + "Escriba ESC al finalizar")
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



































