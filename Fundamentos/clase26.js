// Asincronismo en Js
// Funciones como parámetros

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar (fn) {
        var { nombre, apellido } = this
        // var nombre = this.nombre
        // var apellido = this.apellido
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido, false)
        }
    }

    soyAlto () {
        if (this.altura >= 1.80) {
            console.log('Soy una persona alta')
        } else {
            console.log('No soy una persona alta')
        }
    }

}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar (fn) {
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador.`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }

}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log('Ah mirá, no sabía que eras Desarrollador/a')
    }
}

var gerardo = new Persona('Gerardo', 'Zavala', '1.80')
var erika = new Persona('Erika', 'Luna', '1.60')
var arturo = new Desarrollador('Arturo', 'González', '1.82')

gerardo.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)
