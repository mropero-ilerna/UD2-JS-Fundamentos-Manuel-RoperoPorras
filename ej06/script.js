function calcular() {
    let entrada1 = prompt("Introduce el primer número:");
    let entrada2 = prompt("Introduce el segundo número:");

    if (entrada1 === null || entrada2 === null) {
        document.write("<p>Has cancelado la introducción de los números.</p>");
        return;
    }

    let numero1 = parseFloat(entrada1);
    let numero2 = parseFloat(entrada2);

    if (isNaN(numero1) || isNaN(numero2)) {
        document.write("<p>Por favor, introduce dos números válidos.</p>");
        return;
    }


    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2;
    let resto = numero1 % numero2;  
    let potencia = numero1 ** numero2; 

  
    let htmlResultados = `
        <strong>Suma:</strong> ${suma}<br>
        <strong>Resta:</strong> ${resta}<br>
        <strong>Multiplicación:</strong> ${multiplicacion}<br>
        <strong>División:</strong> ${division.toFixed(2)}<br>
        <strong>Resto (%):</strong> ${resto}<br>
        <strong>Potencia (**):</strong> ${potencia}
    `;
    
    document.write("<h2>Resultados de la calculadora</h2>");
    document.write(htmlResultados);
}



function ejemploContadores() {
    let counter = 5;
    let mensaje = "";

    /*
     ¿Por qué alert(counter++) y alert(++counter) muestran valores distintos?
     counter++: 
     Primero se USA el valor actual de la variable, se muestra en el alert 
     y DESPUÉS se incrementa. 
     Ejemplo: Si counter vale 5, alert(counter++) muestra 5, y luego counter pasa a valer 6. 
     ++counter: 
     Primero se INCREMENTA el valor de la variable y DESPUÉS se USA, se muestra en el alert. 
     Ejemplo: Si counter vale 5, ++counter hace que valga 6, y el alert muestra 6. 
     Lo mismo aplica para los decrementos (counter-- y --counter).
     */

    mensaje += "<strong>Valor inicial de counter:</strong> " + counter + "<br><br>";

    // 1. Sufijo (post-incremento)
    let sufijo = counter++; 
    mensaje += "<strong>let sufijo = counter++;</strong><br>";
    mensaje += "Valor de 'sufijo': " + sufijo + " (Se asigna el 5 original)<br>";
    mensaje += "Valor de 'counter' ahora: " + counter + " (Ahora sí se incrementó a 6)<br><br>";

    // 2. Prefijo (pre-incremento)
    let prefijo = ++counter;
    mensaje += "<strong>let prefijo = ++counter;</strong><br>";
    mensaje += "Valor de 'prefijo': " + prefijo + " (Se incrementa a 7 y se asigna)<br>";
    mensaje += "Valor de 'counter' ahora: " + counter + "<br><br>";

    // 3. Decrementos (sufijo y prefijo)
    counter--; // Sufijo: usa el valor y luego resta 1. counter pasa a 6.
    mensaje += "<strong>counter--;</strong> -> counter ahora vale: " + counter + "<br>";
    
    --counter; // Prefijo: resta 1 y luego usa el valor. counter pasa a 5.
    mensaje += "<strong>--counter;</strong> -> counter ahora vale: " + counter + "<br><br>";
    

    counter = 10; 
    mensaje += "<strong>--- Asignaciones Compuestas ---</strong><br>";
    mensaje += "Valor inicial de counter: " + counter + "<br>";

    // Uso 1 de asignación compuesta: += (Suma y asigna)
    counter += 5; // Equivale a escribir: counter = counter + 5;
    mensaje += "<strong>counter += 5;</strong> -> counter ahora vale: " + counter + " (10 + 5)<br>";

    // Uso 2 de asignación compuesta: *= (Multiplica y asigna)
    counter *= 2; // Equivale a escribir: counter = counter * 2;
    mensaje += "<strong>counter *= 2;</strong> -> counter ahora vale: " + counter + " (15 * 2)<br>";

  
    document.write("<h2>Ejemplo de contador</h2>");
    document.write(mensaje);
}

calcular();
ejemploContadores();