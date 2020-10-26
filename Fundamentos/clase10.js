// Conditions

var gerardo = {
    nombre: 'Gerardo',
    apellido: 'Zavala',
    edad: 28,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`) //`${interpolacion de variables}`

    if (persona.ingeniero === true) {
        console.log('Ingeniero')
    }
    if (persona.cocinero === true) {
        console.log('Cocinero')
    }
    if (persona.cantante === true) {
        console.log('Cantante')
    }
    if (persona.dj === true) {
        console.log('Dj')
    }
    if (persona.guitarrista === true) {
        console.log('Guitarrista')
    }
    if (persona.drone === true) {
        console.log('Piloto de drone')
    }
}

imprimirProfesiones(gerardo)

//Imprimir si es mayor de edad

var gerardo = {
    nombre: 'Gerardo',
    edad: 21
}
var arce = {
    nombre: 'Arce',
    edad: 17
}

function imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.edad >= 18) {
        console.log('Mayor de edad.')
    }else {
        console.log('Menor de edad.')
    }
}

imprimirSiEsMayorDeEdad(gerardo)
imprimirSiEsMayorDeEdad(arce)

