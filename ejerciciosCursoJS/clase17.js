var alexis = {
  nombre: "Alexis",
  apellido: "Lopez",
  altura: 1.65
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.65
};

const esAlta = ({ altura }) => altura > 1.8;

const esBaja = persona => persona.altura < 1.8;

var personas = [alexis, alan, martin, paula];

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

const pasarAlturaCMS = persona => ({
  ...persona,
  altura: persona.altura * 100
});

// {
//   return {
//     ...persona,
//     altura: persona.altura * 100
//   }
// }

var personasCms = personas.map(pasarAlturaCMS);
console.log(personasCms);
console.log(personas);
