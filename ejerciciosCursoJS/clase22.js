// Modulo Asincronismo
// Clase Funciones como paramteros

class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if (fn) {
      fn(nombre, apellido);
    }
  }
  soyAlto() {
    this.altura >= 1.8
      ? console.log(
          s`Hola me llamo ${this.nombre} ${this.apellido} ${this.altura} y soy alto`
        )
      : console.log(
          `Hola me llamo ${this.nombre} ${this.apellido} ${this.altura} y no soy alto`
        );
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }
  saludar(fn) {
    var { nombre, apellido } = this;
    // var apellido = this.apellido
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy dessarrollador/a`);
    if (fn) {
      fn(nombre, apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mira, no sabia que eras desarrollador/a`);
  }
}

const alexis = new Persona('Alexis', 'Lopez', 1.7);
const arturo = new Desarrollador('Arturo', 'Martinez', 1.7);
const miguel = new Persona('Miguel', 'Araujo', 1.9);

arturo.saludar(responderSaludo);
alexis.saludar();
miguel.saludar(responderSaludo);
