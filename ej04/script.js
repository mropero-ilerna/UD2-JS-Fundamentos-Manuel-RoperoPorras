'use strict';

const nombre = prompt("¿Cómo te llamas?");

if (nombre === null) {
    alert("Has cancelado la introducción de datos.");
} else {
    const ciudad = prompt("¿En qué ciudad vives?");

    if (ciudad === null) {
        alert("Has cancelado la introducción de datos.");
    } else {
        const anioNacimiento = prompt("¿En qué año naciste?");

        if (anioNacimiento === null) {
            alert("Has cancelado la introducción de datos.");
        } else {
            const edad = new Date().getFullYear() - Number(anioNacimiento);
            alert(`¡Bienvenido/a, ${nombre} de ${ciudad}! Tienes ${edad} años.`);
        }
    }
}
