const hoy = new Date();
const anio = hoy.getFullYear();
const mes = hoy.getMonth();
const diaActual = hoy.getDate();
const ultimoDiaMes = new Date(anio, mes + 1, 0).getDate();
const diaMaximoEvento = Math.min(30, ultimoDiaMes);
const resultadoDate = document.createElement("section");

if (diaActual > diaMaximoEvento) {
  resultadoDate.innerHTML = `
    <h2>Versión con Date</h2>
    <p>No quedan días disponibles para el evento en este mes.</p>
  `;
} else {
  let diaEvento;

  // Se vuelve a generar el día mientras sea anterior al día actual.
  do {
    diaEvento = Math.floor(Math.random() * 30) + 1;
  } while (diaEvento < diaActual || diaEvento > diaMaximoEvento);

  const fechaEvento = new Date(anio, mes, diaEvento);
  const diasRestantes = Math.round(
    (Date.UTC(anio, mes, diaEvento) -
      Date.UTC(anio, mes, diaActual)) /
      (1000 * 60 * 60 * 24)
  );
  const formatoFecha = new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  resultadoDate.innerHTML = `
    <h2>Versión con Date</h2>
    <p>La fecha actual es ${formatoFecha.format(hoy)}</p>
    <p>La fecha del evento: ${formatoFecha.format(fechaEvento)}</p>
    <p>Días que faltan para el evento: ${diasRestantes} ${
      diasRestantes === 1 ? "día" : "días"
    }</p>
  `;
}

document.body.appendChild(resultadoDate);