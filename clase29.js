// Asincronismo
// Clase: Promesas Encadenadas

function obtenerPersonaje(id) {
  const API_URL = "https://swapi.co/api/";
  const PEOPLE_URL = "people/:id/";

  return fetch(`${API_URL}${PEOPLE_URL.replace(":id", id)}`)
    .then(response => response.json())
    .catch(() => console.log(`Error al obtener el personaje ${id.name}`));
}

obtenerPersonaje(1)
  .then(personaje => {
    console.log(`El personaje 1 es ${personaje.name}`);
    return obtenerPersonaje(2);
  })
  .then(personaje => {
    console.log(`El personaje 2 es ${personaje.name}`);
    return obtenerPersonaje(3);
  })
  .then(personaje => {
    console.log(`El personaje 3 es ${personaje.name}`);
  });
