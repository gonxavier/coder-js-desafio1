/* 
ESTRUCTURA
------------

1) Saludo
2) Ingreso de datos personales (y asignarlos a las variables correspondientes)
3) Cotizador (ciclo con funcion dentro)
4) Mensaje de despedida

*/

// DEFINICION INICIAL DE VARIABLES
let marca;
let modelo;
let año;
let valor;

const tarifaA = 0.0012;
const tarifaC = 0.0035;
const tarifaD = 0.0073;

let fin = 0;

let cobertura;
let seguir;


function seleccionarCobertura() {
    cobertura = prompt("¿Qué cobertura te interesa darle a tu vehículo? \n A| Responsabilidad Civil \n C| Terceros Completo \n D| Todo Riesgo");

    if (cobertura == "A"){
        alert("Usted seleccionó la cobertura de 'Responsabilidad Civil'. \n Recuerde que solo cubre daños a terceros");
    } else if (cobertura == "C") {
        alert("Usted seleccionó la cobertura de 'Terceros Completo'");
    } else if (cobertura == "D") {
        alert("Usted seleccionó la cobertura de 'Todo Riesgo', la mejor cobertura para su vehículo.");
    } else {
        alert("La opcion seleccionada es incorrecta. Elija A, C o D.");
        seleccionarCobertura();
    }
}

function continuar() {
    seguir = prompt("¿Desea continuar utilizando el programa o cotizar otro vehículo? \n 1| SI \n 2| NO");
    if (seguir == 2) {
        fin = 1;
    }
}

function calcularPrima () {
    if (cobertura == "A") {
        alert("Sr/a " + nombre.toUpperCase() + ", Edad: " + edad + ", Localidad: " + localidad.toUpperCase() + "\n El costo del seguro para su " + marca.toUpperCase() + " " + modelo + " " + año + " es. \n Cobertura A (Responsabilidad Civil): $" + (valor*tarifaA));
    } else if (cobertura == "C") {
        alert("Sr/a " + nombre.toUpperCase() + ", Edad: " + edad + ", Localidad: " + localidad.toUpperCase() + "\n El costo del seguro para su " + marca.toUpperCase() + " " + modelo + " " + año + " es. \n Cobertura C (Terceros Completo): $" + (valor*tarifaC));
    } else if (cobertura == "D") {
        alert("Sr/a " + nombre.toUpperCase() + ", Edad: " + edad + ", Localidad: " + localidad.toUpperCase() + "\n El costo del seguro para tu " + marca.toUpperCase() + " " + modelo + " " + año + " es. \n Cobertura D (Todo Riesgo): $" + (valor*tarifaD));
    }
}

///////////////////////////////////////////////
/* COMIENZO DEL PROGRAMA */
///////////////////////////////////////////////

// SALUDO INICIAL
alert("Bienvenido/a al 'Cotizador de seguros'!")

// SOLICITUD DE DATOS PERSONALES
let nombre = prompt("Primero que nada ¿Cuál es tu nombre completo?");
let edad = prompt("¿Qué edad tenés?");
let localidad = prompt("¿De qué localidad sos?");



while (fin == 0) {
    let seleccion = prompt("¿En qué podemos ayudarte hoy " + nombre.toUpperCase() +"? \n 1| Cotizar un seguro \n 2| Conocer una cobertura \n 3| Salir del programa")
    if (seleccion == 1) {
        marca = prompt("¿Cual es la marca del vehículo?");
        modelo = prompt("¿Cual es el modelo?");
        año = prompt("Año del vehículo:");
        valor = prompt("Valor del vehículo:");
        seleccionarCobertura();
        calcularPrima();
        continuar();
    } else if (seleccion == 2) {
        alert("Responsabilidad Civil (A): Cubre solo los daños provocados hacia otros vehículos o personas. \n Terceros completo (C): Incorpora además daños totales y parciales por robo o incendio del vehículo, y destrucción total por accidente \n Todo Riesgo (D): Cubre además los daños parciales por accidente al vehículo propio.");
    } else if (seleccion == 3) {
        fin = 1;
    }
}

alert("Fin del programa")






