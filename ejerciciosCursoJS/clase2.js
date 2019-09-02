var nombre = 'Alexis', apellido = 'Lopez'

//Pasar a mayuscula
var nombreEnMayus = nombre.toUpperCase()

//Pasar a minuscula
var apellidoEnMinus = apellido.toLowerCase()

//Primera letra
var primeraLetraDelNombre = nombre.charAt(0)

//Contar el numero de caracteres
var cantidadDeLetrasDelNombre = nombre.length

//Concatenar dos strings
var nombreCompleto = nombre + apellido

//Interpolacion de texto
var nombreCompletobacktip = `${nombre} ${apellido.toUpperCase()}`

//Acceder a un substring
var str = nombre.charAt(1) + nombre.charAt(2)

var str = nombre.substr(1, 2)