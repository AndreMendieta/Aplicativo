let films = [];

async function Conexion() {
  try {
    const res = await fetch("https://www.swapi.tech/api/films");
    const data = await res.json();
    films = data.result;
    console.log("Películas cargadas:", films.length);
    return films;
  } catch (error) {
    console.error(" Error al conectar con la API:", error);
    return [];
  }
}

async function General() {
  if (films.length === 0) {
    films = await Conexion();
  }

  // Muestra lista inicial
  Home();
}

General();

async function FiltroConexion(texto) {
  const lista = document.getElementById("la-lista");
  lista.innerHTML = "<p>Cargando...</p>";

  const filtrados = films.filter(f =>
    f.properties.title.toLowerCase().includes(texto.toLowerCase())
  );

  const listaHTML = generarLista(filtrados);
  lista.innerHTML = listaHTML;
}
