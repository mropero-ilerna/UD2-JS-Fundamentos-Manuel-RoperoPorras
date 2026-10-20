'use strict'

let userName = "Manuel Kui Ropero Porras";
let age = 19;
let city = "Córdoba";

const COLOR_FAVORITO = "#000000";
const loadTime = Date.now(); 

/*COLOR_FAVORITO = "#ffffff";
Este es el error que sale en consola:
Uncaught TypeError: Assignment to constant variable.
    at script.js:10:16
*/
alert("El nombre del usuario es: " + userName);
alert("La edad del usuario es: " + age);
alert("La ciudad del usuario es: " + city);
alert("El color favorito del usuario es: " + COLOR_FAVORITO);
alert("El tiempo de carga es: " + loadTime);