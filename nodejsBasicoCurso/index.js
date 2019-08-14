/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */
 const call = require("./src/call")


call.withCallback("Alexis Araujo", call.sync)

// getUser
//   .then(function() {
//     console.log('todo está bien en la vida')
//   })
//   .catch(function(message) {
//     console.log(message)
//   })

call.withPromise("Alexis")
  .then(name => {console.log(name) })
  .catch(message => console.log(message)  )