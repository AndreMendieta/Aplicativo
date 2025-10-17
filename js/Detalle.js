async function Detalle(idFilm) {
  try {
    const res = await fetch(`https://www.swapi.tech/api/films/${idFilm}`);
    const data = await res.json();
    const film = data.result.properties;

    document.getElementById("root").innerHTML = `
      <div class="film-detalle">
        <h2>${film.title}</h2>
        <p><strong>Episodio:</strong> ${film.episode_id}</p>
        <p><strong>Director:</strong> ${film.director}</p>
        <p><strong>Productor:</strong> ${film.producer}</p>
        <p><strong>Fecha de lanzamiento:</strong> ${film.release_date}</p>
        <p><strong>Introducción:</strong></p>
        <p>${film.opening_crawl}</p>
        <br>
        <button onclick="Home()">⬅ Volver</button>
      </div>`;
  } catch (error) {
    document.getElementById("root").innerHTML = `<p style="color:red;">❌ Error: ${error.message}</p>`;
  }
}
(100)