// Clase: Clases en javascript

class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }
  soyAlto() {
    this.altura >= 1.8
      ? console.log(
          `Hola me llamo ${this.nombre} ${this.apellido} ${this.altura} y soy alto`
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
  saludar() {
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido} y soy dessarrollador/a`
    );
  }
}

const alexis = new Persona('Alexis', 'Lopez', 1.7);
const arturo = new Desarrollador('Arturo', 'Martinez', 1.7);
const miguel = new Persona('Miguel', 'Araujo', 1.9);
arturo.saludar();
alexis.soyAlto();
miguel.saludar();
miguel.soyAlto();
// console.log(alexis);
