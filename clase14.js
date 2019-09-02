// Inicio de clase estructuras repetitivas: while

var alexis = {
  nombre: "Alexis",
  edad: 28,
  peso: 75
};

console.log(`Al inicio del año ${alexis.nombre} pesa ${alexis.peso}kg`);

// Convertir funcion en arrow function
// function aumentarDePeso(persona) {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;
const aumentarDePeso = persona => (persona.peso += INCREMENTO_PESO);
const adelgazar = persona => (persona.peso -= INCREMENTO_PESO);
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = alexis.peso - 3;
var diasAdelgazar = 0;

while (alexis.peso > META) {
  if (comeMucho()) {
    //aumentardepeso
    aumentarDePeso(alexis);
  }
  if (realizaDeporte()) {
    adelgazar(alexis);
  }
  diasAdelgazar += 1;
}

console.log(
  `Pasaron ${diasAdelgazar} dias hasta que ${alexis.nombre} adelgazo 3kg`
);
