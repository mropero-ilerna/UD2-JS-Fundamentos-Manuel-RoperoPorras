let opcion;

do {
  opcion = prompt(
    "Menú:\n" +
      "1 - Mostrar tabla de multiplicar\n" +
      "2 - Sumar números\n" +
      "3 - Mostrar números impares del 1 al 20\n" +
      "4 - Cuenta atrás\n" +
      "0 - Salir"
  );

  switch (opcion) {
    case "1": {
      const entrada = prompt("Introduce un número:");
      if (entrada === null || entrada.trim() === "") {
        break;
      }

      const numero = Number(entrada);

      if (Number.isNaN(numero)) {
        alert("El valor introducido no es un número.");
        break;
      }

      let tabla = `Tabla de multiplicar del ${numero}:\n`;

      for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
      }
      alert(tabla);
      break;
    }

    case "2": {
      let suma = 0;

      while (true) {
        const entrada = prompt("Introduce un número (vacío o Cancelar para terminar):");

        if (entrada === null || entrada.trim() === "") {
          break;
        }

        const numero = Number(entrada);
        if (Number.isNaN(numero)) {
          alert("El valor introducido no es un número.");
          continue;
        }

        suma += numero;
      }

      alert(`La suma es: ${suma}`);
      break;
    }

    case "3": {
      let impares = "Números impares del 1 al 20:\n";

      for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
          continue;
        }
        impares += `${i}\n`;
      }
      alert(impares);
      break;
    }

    case "4": {
      const entrada = prompt("Introduce un número entero no negativo:");
      if (entrada === null || entrada.trim() === "") {
        break;
      }

      const numero = Number(entrada);

      if (!Number.isInteger(numero) || numero < 0) {
        alert("Debes introducir un número entero no negativo.");
        break;
      }

      let cuenta = "";
      let i = numero;

      do {
        cuenta += `${i}\n`;
        i--;
      } while (i >= 0);
      alert(cuenta);
      break;
    }

    case "0":
      alert("Hasta luego.");
      break;

    default:
      alert("Opción no válida. Elige una opción del menú.");
  }
} while (opcion !== "0");