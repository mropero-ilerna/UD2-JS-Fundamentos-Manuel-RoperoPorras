'use strict';

const primerNumero = prompt("Escribe el primer número:");
const segundoNumero = prompt("Escribe el segundo número:");

if (primerNumero === null || segundoNumero === null) {
    alert("Has cancelado la introducción de los números.");
} else {
    const sumaNumerica = Number(primerNumero) + Number(segundoNumero);
    const sumaSinConvertir = primerNumero + segundoNumero;

    alert(`La suma como números es: ${sumaNumerica}\nSin convertirlos, JavaScript los concatena: ${sumaSinConvertir}`);
}

const valores = [
    { nombre: '"123"', valor: "123" },
    { nombre: '" 45 "', valor: " 45 " },
    { nombre: '"abc"', valor: "abc" },
    { nombre: '"" (cadena vacía)', valor: "" },
    { nombre: '"0" (texto)', valor: "0" },
    { nombre: "0 (número)", valor: 0 },
    { nombre: "null", valor: null },
    { nombre: "undefined", valor: undefined },
    { nombre: "true", valor: true }
];

document.write("<h1>Conversión de valores</h1>");
document.write("<table border='1'>");
document.write("<tr><th>Valor original</th><th>Number()</th><th>String()</th><th>Boolean()</th></tr>");

for (const elemento of valores) {
    document.write(
        `<tr>
            <td>${elemento.nombre}</td>
            <td>${Number(elemento.valor)}</td>
            <td>${String(elemento.valor)}</td>
            <td>${Boolean(elemento.valor)}</td>
        </tr>`
    );
}

document.write("</table>");