document.write("<h1>Comparaciones en JavaScript</h1>");

// true: ambos operandos son números y 2 es mayor que 1.
document.write("<p>2 &gt; 1: " + (2 > 1) + "</p>");

// true: el string "2" se convierte en el número 2 para la comparación relacional.
document.write('<p>"2" &gt; 1: ' + ("2" > 1) + "</p>");

// true: == permite convertir tipos; "01" se convierte en el número 1.
document.write('<p>"01" == 1: ' + ("01" == 1) + "</p>");

// true: == convierte false en 0 antes de comparar.
document.write("<p>0 == false: " + (0 == false) + "</p>");

// true: == convierte false en 0 y la cadena vacía también se convierte en 0.
document.write('<p>"" == false: ' + ("" == false) + "</p>");

// false: === no convierte tipos; 0 es number y false es boolean.
document.write("<p>0 === false: " + (0 === false) + "</p>");

// true: == considera null y undefined iguales entre sí.
document.write("<p>null == undefined: " + (null == undefined) + "</p>");

// false: === exige el mismo tipo y null y undefined son distintos.
document.write("<p>null === undefined: " + (null === undefined) + "</p>");

// false: null se convierte en 0 y 0 no es mayor que 0.
document.write("<p>null &gt; 0: " + (null > 0) + "</p>");

// true: null se convierte en 0 y 0 sí es mayor o igual que 0.
document.write("<p>null &gt;= 0: " + (null >= 0) + "</p>");

// false: undefined no se convierte en 0 al compararlo con ==.
document.write("<p>undefined == 0: " + (undefined == 0) + "</p>");

// true: las cadenas se comparan lexicográficamente; en la primera diferencia, 'o' > 'e'.
document.write('<p>"Glow" &gt; "Glee": ' + ("Glow" > "Glee") + "</p>");
