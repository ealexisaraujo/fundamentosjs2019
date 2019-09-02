var persona1 = {
  nombre: "Isabella",
  apellido: "Ferreyro",
  edad: 29
};

var persona2 = {
  nombre: "Dario",
  apellido: "Ferreyro",
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

// - La clase de hoy trata de cual seria la consecuencia si declaramos , en
//   una funcion, un "parametro como referencia", es decir, se declara como
//   parametro a un objeto.  Y un " parametro como valor ", es decir ,  se
//   declara como parametro a un atributo que le pertenece a un objeto.
//
//
// - Tenemos a dos objetos cuyos nombres son 'fernando' y 'Miguel'
//
// ----> PARAMETRO COMO REFERENCIA
function parametroComoReferencia(persona) {
  persona.edad = persona.edad + 1; // o tambien persona.edad += 1
  console.log(persona.edad);
}
//     - En este caso ,el parametro 'persona' va a recibir el nombre de un
//       objeto
//     - Dentro de la funcion el atributo 'edad' que le pertenece a cierto
//       objeto sera alterado tando dentro de la funcion  como fuera de la
//       funcion , es decir , tambien alterara al objeto.
//

// ----> PARAMETRO COMO VALOR
function parametroComoValor(edad) {
  edad = edad + 1; // o tambien persona.edad += 1
  console.log(edad);
}
//     - En este caso, el parametro 'edad' va a recibir el valor del
//       atributo de un objeto  por lo que a pesar de que se altere el
//       valor , no se alterara el objeto.
//
//
// ----> CASO ESPECIAL
//     - Pero si queremos crear un nuevo objeto y que tenga los mismos
//       atributos que el original pero alterando ciertos valores, lo que
//       se hace es retornar ('return') dentro de la funcion el
//       desglosamiento del objeto
//       EJEMPLO:
//                  return {
//                    ...persona,  ------> Se desglosa el objeto 'persona'
//                    edad: persona.edad + 1 ---->estamos alterando el
//                                      				 valor del atributo 'edad'.
//                  }
//       OJO: Tambien a la hora de crear un nuevo objeto , tambien se le
//				 	  puede añadir nuevos atributos. Ejemplo:
//                  return {
//                    ...persona,
//                    edad: persona.edad + 1,
//                    sexo: 'Masculino' ----> Agregamos el atributo 'sexo'
//
//                  }
function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
    sexo: "Masculino"
  };
}
