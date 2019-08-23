var alexis = {
  nombre: 'Alexis',
  edad: 28
}

var juan = {
  nombre: 'Juan',
  edad: 13
}

const MAYOR_DE_EDAD = 18

function esMayorDeEdad(persona) {
  return persona.edad >= MAYOR_DE_EDAD
}

function imprimirSiEsMayoDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(` ${persona.nombre} es mayor de edad`)
  } else {
    console.log(` ${persona.nombre} es menor de edad`)
  }
}


imprimirSiEsMayoDeEdad(alexis)