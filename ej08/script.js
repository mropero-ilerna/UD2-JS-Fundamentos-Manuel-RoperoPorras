'use strict';

const notaIntroducida = prompt("Introduce una nota numérica del 0 al 10:");
const nota = Number(notaIntroducida);

if (notaIntroducida === null || notaIntroducida.trim() === "" || isNaN(nota) || nota < 0 || nota > 10) {
    document.write("<p>Error: introduce un número entre 0 y 10.</p>");
} else {
    let resultado;

    if (nota < 5) {
        resultado = "Suspenso";
    } else if (nota < 7) {
        resultado = "Aprobado";
    } else if (nota < 9) {
        resultado = "Notable";
    } else {
        resultado = "Sobresaliente";
    }

    // Versión original con if / else:
    // if (nota >= 5) {
    //     document.write("<p>Has aprobado.</p>");
    // } else {
    //     document.write("<p>Has suspendido.</p>");
    // }

    const mensajeAprobado = nota >= 5 ? "Has aprobado." : "Has suspendido.";

    document.write(`<p>Resultado: ${resultado}</p>`);
    document.write(`<p>${mensajeAprobado}</p>`);
}