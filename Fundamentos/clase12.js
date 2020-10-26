// Arrow Functions
var gerardo = {
    nombre: 'Gerardo',
    edad: 21
}
var arce = {
    nombre: 'Arce',
    edad: 17
}

const MAYORIA_DE_EDAD = 18 

// function esMayorDeEdad(persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// var esMayorDeEdad = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = (persona) => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = persona => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre} es:`)

    if (esMayorDeEdad(persona)) {
        console.log('Mayor de edad.')
    }else {
        console.log('Menor de edad.')
    }
}

// function permitirAcceso(persona) {
//     if(!esMayorDeEdad(persona)) {
//         console.log('ACCESO DENEGADO')
//     }
// }

const permitirAcceso = persona => {if(!esMayorDeEdad(persona)) console.log('ACCESO DENEGADO')}

imprimirSiEsMayorDeEdad(gerardo)
imprimirSiEsMayorDeEdad(arce)
