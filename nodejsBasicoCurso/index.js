/**
 * *************
 * Comience aqui
 * *************
 */
const math = require("./math") 
const greet = require("./greetings")
const hello = require("./greetings/hello")
const cowsay = require("cowsay")


console.log(math.add(4,5));

console.log(greet.greet("alexis"));
console.log(hello.sayHello("alexis"));

// Uso o manejando modulos externos con NPM y require()
console.log(cowsay.say({
  text: "Alexis",
  e: "^^",
  T: "U"
}));


