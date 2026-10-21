const playlist = [
  ["Bohemian Rhapsody", "Queen", 354, "Rock"],
  ["Hotel California", "Eagles", 391, "Rock"],
  ["Imagine", "John Lennon", 183, "Pop"]
];

function mostrar(titulo, contenido) {
  const encabezado = document.createElement("h2");
  encabezado.textContent = titulo;
  document.body.appendChild(encabezado);

  const detalle = document.createElement("pre");
  detalle.textContent = contenido;
  document.body.appendChild(detalle);
}

function mostrarPlaylist(canciones) {
  return canciones
    .map((cancion, indice) => `${indice}: ${cancion.join(" | ")}`)
    .join("\n");
}

// Parte 1: push y pop
playlist.push(
  ["Smells Like Teen Spirit", "Nirvana", 301, "Grunge"],
  ["Billie Jean", "Michael Jackson", 294, "Pop"]
);

const cancionEliminadaConPop = playlist.pop();
playlist[0].push(1975);

mostrar(
  "Parte 1: push y pop",
  `Título de la canción eliminada: ${cancionEliminadaConPop[0]}\n\n` +
    `Playlist:\n${mostrarPlaylist(playlist)}`
);

// Parte 2: splice
playlist.splice(1, 0, ["Clocks", "Coldplay", 307, "Rock"]);
const cancionEliminadaConSplice = playlist.splice(2, 1)[0];
playlist.splice(0, 1, ["Like a Rolling Stone", "Bob Dylan", 369, "Rock"]);

mostrar(
  "Parte 2: splice",
  `Datos de la canción eliminada: ${cancionEliminadaConSplice.join(" | ")}\n\n` +
    `Playlist:\n${mostrarPlaylist(playlist)}`
);

// Parte 3: spread y copias
const copiaSuperficial = [...playlist];
copiaSuperficial[0][0] = "Título modificado en la copia superficial";

// Spread copia el array exterior, pero los arrays de canciones siguen siendo referencias compartidas.
mostrar(
  "Copia con spread",
  `Primera canción en la copia: ${copiaSuperficial[0].join(" | ")}\n` +
    `Primera canción en la playlist original: ${playlist[0].join(" | ")}`
);

const copiaIndependiente = playlist.map((cancion) => [...cancion]);
copiaIndependiente[0][0] = "Título modificado en la copia independiente";

mostrar(
  "Copia independiente con map y spread",
  `Primera canción en la copia: ${copiaIndependiente[0].join(" | ")}\n` +
    `Primera canción en la playlist original: ${playlist[0].join(" | ")}`
);
