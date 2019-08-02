var alexis = {
  nombre: 'Alexis',
  edad: 28
}

function imprimirSiesMayor(persona) {
  if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} no es mayor de edad`)
  }
}

imprimirSiesMayor(alexis)