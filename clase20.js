// Clase 22 La verdad oculta sobre las clases en JS
function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn()
    prototipoHijo.prototype.constructor = prototipoHijo
  }
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
  this.altura >= 1.8 ? console.log(`Hola me llamo ${this.nombre} ${this.apellido} ${this.altura} y soy alto`) :
  console.log(`Hola me llamo ${this.nombre} ${this.apellido} ${this.altura} y no soy alto`)
}

function Desarrollador(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy dessarrollador/a`);
}



const alexis = new Persona('Alexis', 'Lopez', 1.70)
const miguel = new Desarrollador('Miguel', 'Araujo', 1.90)
alexis.saludar()
miguel.saludar()
// console.log(alexis);
