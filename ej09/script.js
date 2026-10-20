'use strict';

const nombre = prompt("Introduce tu nombre:");
const apodo = prompt("Introduce tu apodo:");
const edadIntroducida = prompt("Introduce tu edad:");
const edad = Number(edadIntroducida);

const nombreMostrado = nombre || apodo || "Anónimo";
document.write(`<p>Te damos la bienvenida, ${nombreMostrado}.</p>`);

const tieneNombre = nombre || apodo;
const accesoPermitido = edadIntroducida !== null && edadIntroducida.trim() !== "" &&
    !isNaN(edad) && edad >= 18 && tieneNombre;

accesoPermitido && document.write("<p>Acceso permitido.</p>");

const altura = 0;
const alturaConOr = altura || 170;
const alturaConNullish = altura ?? 170;

// || usa el valor alternativo cuando el dato es falsy (como 0); ?? solo lo hace si es null o undefined.
document.write(`<p>Altura usando ||: ${alturaConOr} cm</p>`);
document.write(`<p>Altura usando ??: ${alturaConNullish} cm</p>`);

const tieneApodo = !!apodo;
document.write(`<p>¿Se ha introducido un apodo? ${tieneApodo}</p>`);