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

const alexis = new Persona('Alexis', 'Lopez', 1.70)
const miguel = new Persona('Miguel', 'Araujo', 1.90)
miguel.soyAlto()
// console.log(alexis);
