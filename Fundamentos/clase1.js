var nombre = 'Gerardo', apellido = 'Zavala'

var nombreEnMayusculas = nombre.toLocaleUpperCase()
var apellidoEnMinusculas = apellido.toLocaleLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = nombre + `${nombre} ${apellido.toLocaleUpperCase()}` //Interpolar variables

var str = nombre.substr(1, 2)