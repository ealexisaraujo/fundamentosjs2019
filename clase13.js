var alexis = {
  nombre: 'Alexis', 
  edad: 28,
  peso: 75
}

console.log(`Al inicio del año ${alexis.nombre} pesa ${alexis.peso}kg`)

// Convertir funcion en arrow function
// function aumentarDePeso(persona) {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.2
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (let i = 1; i <= 365 ; i++) {
  var random = Math.random()
  if (random < 0.25) {
    aumentarDePeso(alexis)
  } else if (random < 0.5){
    adelgazar(alexis)
  }
}

console.log(`Al final del año ${alexis.nombre} pesa ${alexis.peso.toFixed(1)}kg`)