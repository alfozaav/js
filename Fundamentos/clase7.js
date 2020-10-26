//Destructuring Objects

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
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}


imprimirNombreEnMayusculas(alfonso)
imprimirNombreEnMayusculas(dario)

function imprimirNombreYEdad(persona) {
    var { nombre } = persona
    var { edad } = persona
    console.log('Hola, me llamo ' + nombre + ' y tengo ' + edad + ' años.')
}

imprimirNombreYEdad(alfonso)
imprimirNombreYEdad(dario)