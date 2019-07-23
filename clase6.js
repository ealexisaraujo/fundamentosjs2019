// Clase 6 - OBJETOS
// como no podemos pisar una variable y no podemos crear dos variables con el mismo nombre,
//la mejor opción es crear un objeto. básicamente es una variable que contiene varias opciones.

var persona1 = {
  nombre: 'Isabella',
  apellido:  'Ferreyro',
  edad: 29
}

var persona2 = {
  nombre: 'Dario',
  apellido:  'Ferreyro',
  edad: 30
}

// La manera convencional de escribir una función es esta
function imprimirNombreEnMayusculas(nombre){
  var nombre = nombre.toUpperCase()
  console.log(nombre)
}

// una manera mas corta de escribir el mismo código
function imprimirNombreMayus(persona1){
  console.log('funcion corta ' + persona1.nombre.toUpperCase())
}

// imprimirNombreMayus(persona1)
// imprimirNombreMayus(persona2)

//manera mejorada y clara de desglosar el objeto en la función.
function imprimeNombreEnMayuscula({ nombre }){//Desglosamos el objeto persona1, obteniendo el atributo nombre
  console.log('manera mejorada de escribir el nombre de ' + nombre.toUpperCase())
}

imprimeNombreEnMayuscula(persona1)