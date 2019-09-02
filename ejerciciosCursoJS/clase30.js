// Asincronismo
// Clase: Multiples promesas en paralelo

const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id/";

const obtenerPersonje = id =>
  new Promise((sepudo, todomal) => {
    fetch(`${API_URL}${PEOPLE_URL.replace(":id", id)}`)
      .then(response => sepudo(response.json()))
      .catch(() => todomal(id));
  });

const onError = id => {
  console.log(`Hubo un error con el personaje ${id}`);
};

let ids = [1, 2, 3, 4, 5, 6, 7];
let promesas = ids.map(id => obtenerPersonje(id));
Promise.all(promesas)
  .then(personajes => console.log(personajes))
  .catch(onError);

// function obtenerPersonaje(id) {
//   const API_URL = "https://swapi.co/api/";
//   const PEOPLE_URL = "people/:id/";

//   return fetch(`${API_URL}${PEOPLE_URL.replace(":id", id)}`)
//     .then(response => response.json())
//     .catch(() => console.log(`Error al obtener el personaje ${id}`));
// }
