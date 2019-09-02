var alexis = {
  nombre: "Alexis",
  edad: 28
};

var juan = {
  nombre: "Juan",
  edad: 13
};

const MAYOR_DE_EDAD = 18;

// CONSTANTE ASGIGANDO UNA FUNCION
// const esMayorDeEdad = function (persona)  {
//   return persona.edad >= MAYOR_DE_EDAD
// }

const esMayorDeEdad = ({ edad }) => edad >= MAYOR_DE_EDAD;
const esMenorDeEdad = persona => !esMayorDeEdad(persona);

// function imprimirSiEsMayoDeEdad(persona) {
//   if (esMayorDeEdad(persona)) {
//     console.log(` ${persona.nombre} es mayor de edad`)
//   } else if (esMenorDeEdad(persona)) {
//     console.log(` ${persona.nombre} es menor de edad`)
//   }
// }

function permitirAcceso(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} eres bienvenido`);
  } else if (esMenorDeEdad(persona)) {
    console.log(`${persona.nombre} tienes acceso denegado`);
  }
}

permitirAcceso(juan);
