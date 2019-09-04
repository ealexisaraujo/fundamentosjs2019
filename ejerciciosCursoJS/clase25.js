// Asincronismo
// Clase: Haciendo multiples requests

function obtenerPersonaje(id) {
  const API_URL = 'https://swapi.co/api/';
  const PEOPLE_URL = 'people/:id/';

  fetch(`${API_URL}${PEOPLE_URL.replace(':id', id)}`)
    .then(response => response.json())
    .then(persona => {
      console.log(`Hola soy ${persona.name}`);
    });
}

for (let i = 1; i < 15; i++) {
  obtenerPersonaje(i);
}
