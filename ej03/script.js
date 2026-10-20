'use strict';

let numberValue = 12;
let bigintValue = 123n;
let stringValue = "Pepe";
let booleanValue = true;
let nullValue = null;
let undefinedValue = undefined;
let symbolValue = Symbol("identificador");
let objectValue = { nombre: "Pepe", edad: 30 };

document.write("<ul>");
document.write("<li><b>Number:</b> Valor = " + numberValue + " | typeof = " + typeof numberValue + "</li>");
document.write("<li><b>BigInt:</b> Valor = " + bigintValue + " | typeof = " + typeof bigintValue + "</li>");
document.write("<li><b>String:</b> Valor = " + stringValue + " | typeof = " + typeof stringValue + "</li>");
document.write("<li><b>Boolean:</b> Valor = " + booleanValue + " | typeof = " + typeof booleanValue + "</li>");
document.write("<li><b>Null:</b> Valor = " + nullValue + " | typeof = " + typeof nullValue + "</li>");
document.write("<li><b>Undefined:</b> Valor = " + undefinedValue + " | typeof = " + typeof undefinedValue + "</li>");
document.write("<li><b>Symbol:</b> Valor = " + symbolValue.toString() + " | typeof = " + typeof symbolValue + "</li>");
document.write("<li><b>Object:</b> Valor = " + JSON.stringify(objectValue) + " | typeof = " + typeof objectValue + "</li>");
document.write("</ul>");
/*La razón del porque el typeof de null devuelve object es por un bug del código que se mantiene por compatibilidad */