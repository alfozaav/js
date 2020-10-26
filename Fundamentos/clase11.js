// Funciones que retornan un valor

var gerardo = {
    nombre: 'Gerardo',
    edad: 21
}
var arce = {
    nombre: 'Arce',
    edad: 17
}

const MAYORIA_DE_EDAD = 18 //las constantes no modifican su valor, es una buena practica escribirlas con mayúsculas y separadas por guiones bajos

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre} es:`)

    if (esMayorDeEdad(persona)) {
        console.log('Mayor de edad.')
    }else {
        console.log('Menor de edad.')
    }
}

imprimirSiEsMayorDeEdad(gerardo)
imprimirSiEsMayorDeEdad(arce)
