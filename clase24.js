// Asincronismo
// Clase: Callbacks
const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id/";

for (let i = 1; i < 15; i++) {
  fetch(`${API_URL}${PEOPLE_URL.replace(":id", i)}`)
    .then(response => response.json())
    .then(persona => {
      console.log(`Hola soy ${persona.name}`);
    });
}
