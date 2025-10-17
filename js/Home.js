function buscadorfuncion(valor) {
  if (valor.length >= 2) {
    const filtrados = films.filter(f =>
      f.properties.title.toLowerCase().includes(valor.toLowerCase())
    );
    document.getElementById("la-lista").innerHTML = generarLista(filtrados);
  } else {
    document.getElementById("la-lista").innerHTML = generarLista(films);
  }
}

function generarLista(arrayFilms) {
  let listaHTML = "";
  for (let i = 0; i < arrayFilms.length; i++) {
    const film = arrayFilms[i].properties;
    const id = arrayFilms[i].uid;
    listaHTML += `
      <div class="c-lista-film" onclick="Detalle('${id}')">
        <h3>${film.title}</h3>
        <p><strong>Episodio:</strong> ${film.episode_id}</p>
        <p><em>${film.release_date}</em></p>
      </div>`;
  }
  return listaHTML;
}

function Home() {
  const root = document.getElementById("root");
  root.innerHTML = "";

  // 🔎 Buscador
  const buscador = document.createElement("input");
  buscador.classList.add("c-buscador");
  buscador.type = "text";
  buscador.placeholder = "Buscar película...";
  buscador.addEventListener("input", () => buscadorfuncion(buscador.value));

  // 🎬 Contenedor de películas
  const contenedorFilms = document.createElement("div");
  contenedorFilms.id = "la-lista";
  contenedorFilms.innerHTML = generarLista(films);

  root.appendChild(buscador);
  root.appendChild(contenedorFilms);
}
