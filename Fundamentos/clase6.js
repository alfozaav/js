//Objects in JS

var alfonso = {
    nombre: 'Alfonso', //value: key,
    apellido: 'Zavala', //value: key,
    edad: 22 //value: key
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susniky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona) {
    console.log(persona.nombre.toUpperCase())
}
//Another way of doing it
function imprimirNombreEnMayusculas2({nombre}) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(alfonso)
imprimirNombreEnMayusculas(dario)

imprimirNombreEnMayusculas2(alfonso)
imprimirNombreEnMayusculas2(dario)

//Calling a function with another parameter
imprimirNombreEnMayusculas2({ nombre: "pepito"})