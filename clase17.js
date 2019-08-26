var alexis = {
  nombre: 'Alexis',
  apellido: 'Lopez',
  altura: 1.65
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}

const esAlta = ({altura}) => altura > 1.80

const esBaja = (persona) => persona.altura < 1.80

var personas = [alexis, alan, martin]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.80
// })

console.log(personasAltas)
 
