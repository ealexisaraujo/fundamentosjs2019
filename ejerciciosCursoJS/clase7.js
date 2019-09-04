// Clase 7 - Desestructurar objetos
// como no podemos pisar una variable y no podemos crear dos variables con el mismo nombre,
//la mejor opción es crear un objeto. básicamente es una variable que contiene varias opciones.

var persona1 = {
  nombre: 'Isabella',
  apellido: 'Ferreyro',
  edad: 29
};

var persona2 = {
  nombre: 'Dario',
  apellido: 'Ferreyro',
  edad: 30
};

// En esta clase aprenderemos otra forma de acceder a los atributos de los objetos que es la desestructurización de los mismos.
function imprimirNombreYEdad(persona) {
  var { nombre } = persona;
  var { edad } = persona;
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

//manera mejorada y clara de desglosar el objeto en la función.
function imprimeNombreEnMayuscula({ nombre, edad }) {
  //Desglosamos el objeto persona1, obteniendo el atributo nombre
  console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

imprimeNombreEnMayuscula(persona1);
imprimeNombreEnMayuscula(persona2);

imprimirNombreYEdad(persona1);
imprimirNombreYEdad(persona2);
