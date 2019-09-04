// RESUMEN DE LA CLASE: 'COMPARACIONES'
//
// - ( = ) ---> El signo igual sirve para asignar un valor a una variable
//
// - En esta clase se va a ver 2 formas de comparar 2 variables o 2 objetos a mas:variables o 2 objetos a mas:
//
// CASO 1: 'PARA VARIABLES'
// - ( == ) ---> Lo que hace esta forma de comparacion es llevar a los valores
//               de las dos variables a un mismo tipo de dato , ya sea 'string'
//               o 'numero' y luego si son iguales los valor nos botara (true) ,
//               en caso contrario , sera (false).
//
// - ( === ) ---> Lo que hace esta forma de comparacion es primero saber si ambos
//                valores de la variables estan en un mismo tipo de dato (string
//                o numero), caso contrario de inmediato nos botara (false). Si
//                esta correcto el primer proceso entonces se seguira a comparar
//                si los valores de las variables son los mismos.
//
//CASO 2: 'PARA OBJETOS'
// - ( == ) ---> Lo que se explico en la clase es que por mas que compares
//               los objetos y tengan la misma extructura y valores , siempre
//               sera falso porque ambas estan en diferentes posicion en memoria
//               RAM.
//
// - ( === ) ---> Se realiza el mismo proceso con el de las variables pero como
//                se ha dicho por mas que tengan todo igual va a estar ubicados
//                en diferentes posiciones en a memoria RAM.
//
// --------------> CUANDO ES FALSO
var fernando = {
  nombre: 'Fernando'
};

var otraPersona = {
  nombre: 'Fernando'
};
//                 Por mas que sean lo mismo los objetos en estan en diferentes
//                 posiciones en la memoria RAM
//
//                 OJO: Si cambias el valor a uno de los objetos, esto no afectara
//                      al otro.
//
// ---------------> CUANDO ES VERDADERO
var miguel = {
  nombre: 'Miguel'
};

var segundaPersona = miguel;
//                  Se dice que segundaPersona va a ser un objeto que apunta
//                  a la misma ubicacion en la memoria RAM del objeto miguel
//
//                  OJO: Si alteras algun valor de uno de los objetos , en este
//                  caso, si se alterara en el otro objeto debido a que ambos estan
//                  en la misma posicion de la memoria RAM.```
