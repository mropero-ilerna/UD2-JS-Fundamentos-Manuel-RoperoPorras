const resultadoTemporal = document.createElement("section");

if (typeof Temporal === "undefined") {
  resultadoTemporal.innerHTML = `
    <h2>Versión con Temporal</h2>
    <p>Esta versión requiere un navegador que admita la API Temporal.</p>
  `;
} else {
  const hoyTemporal = Temporal.Now.plainDateISO();
  const diaMaximoEvento = Math.min(30, hoyTemporal.daysInMonth);

  if (hoyTemporal.day > diaMaximoEvento) {
    resultadoTemporal.innerHTML = `
      <h2>Versión con Temporal</h2>
      <p>No quedan días disponibles para el evento en este mes.</p>
    `;
  } else {
    let diaEvento;

    // Se vuelve a generar el día mientras sea anterior al día actual.
    do {
      diaEvento = Math.floor(Math.random() * 30) + 1;
    } while (diaEvento < hoyTemporal.day || diaEvento > diaMaximoEvento);

    const fechaEvento = hoyTemporal.with({ day: diaEvento });
    const diasRestantes = hoyTemporal.until(fechaEvento, {
      largestUnit: "day"
    }).days;
    const opcionesFecha = {
      day: "numeric",
      month: "long",
      year: "numeric"
    };

    resultadoTemporal.innerHTML = `
      <h2>Versión con Temporal</h2>
      <p>La fecha actual es ${hoyTemporal.toLocaleString("es-ES", opcionesFecha)}</p>
      <p>La fecha del evento: ${fechaEvento.toLocaleString("es-ES", opcionesFecha)}</p>
      <p>Días que faltan para el evento: ${diasRestantes} ${
        diasRestantes === 1 ? "día" : "días"
      }</p>
    `;
  }
}

document.body.appendChild(resultadoTemporal);
