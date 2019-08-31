
// Asincronismo
// Clase: Manejando el orden y el asincronismo en javascript

function obtenerPersonaje(id,callback) {

  const API_URL = 'https://swapi.co/api/'
  const PEOPLE_URL = 'people/:id/'

  fetch(`${API_URL}${PEOPLE_URL.replace(':id',id)}`)
        .then(response => response.json())
        .then(data => {
          console.log(`Hola soy ${data.name}`)
          if(callback){
            callback()
          }
        })
}

  obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
      obtenerPersonaje(3, function () {
        obtenerPersonaje(4, function () {
          obtenerPersonaje(5, function() {
            obtenerPersonaje(6, function () {
              obtenerPersonaje(7, function () {
                obtenerPersonaje(8, function () {
                  obtenerPersonaje(9, function () {
                    obtenerPersonaje(10)
                  })
                })
              })
            })
          })
        })
      })
    })
  })