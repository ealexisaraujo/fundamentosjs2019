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

var personas = [alexis, alan, martin]

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i]
  console.log(`${persona.nombre} ${persona.apellido} mide ${persona.altura}`)
}