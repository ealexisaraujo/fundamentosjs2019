/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */
 const call = require("./src/call")

 //Funcion normal
//  call.greet("Pedro Alexis")

 //
async function callWithAsync() {
  const fullName = await call.withPromise("Alexis", "Lopez")
  console.log(fullName); 
}

callWithAsync()