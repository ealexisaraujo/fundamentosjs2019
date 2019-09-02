// Asincronismo
// Clase: Promesas
const getUser = new Promise(function(todoBien, todoMal) {
  // llamar a un api
  setTimeout(function() {
    // luego de 3 segundos
    todoBien("se acabó el tiempo 3");
  }, 3000);
});
getUser
  .then(function() {
    console.log("todo está bien en la vida");
  })
  .catch(function(message) {
    console.log(message);
  });

function obtenerPersonaje(id, callback) {
  const API_URL = "https://swapi.co/api/";
  const PEOPLE_URL = "people/:id/";

  fetch(`${API_URL}${PEOPLE_URL.replace(":id", id)}`)
    .then(response => response.json())
    .then(data => {
      console.log(`Hola soy ${data.name}`);
      if (callback) {
        callback();
      }
    })
    .catch(() => console.log("algo falló"));
}

function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1, function() {
  obtenerPersonaje(2, function() {
    obtenerPersonaje(3, function() {
      obtenerPersonaje(4, function() {
        obtenerPersonaje(5, function() {
          obtenerPersonaje(6, function() {
            obtenerPersonaje(7, function() {
              obtenerPersonaje(8, function() {
                obtenerPersonaje(9, function() {
                  obtenerPersonaje(10);
                });
              });
            });
          });
        });
      });
    });
  });
});
