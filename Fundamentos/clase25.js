// Herencia prototipada en ECMAScript 2015
// Anque parezcan clases, por debajo siguen siendo prototipos.

//Manera moderna

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar () {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto () {
        if (this.altura >= 1.80) {
            console.log('Soy una persona alta')
        } else {
            console.log('No soy una persona alta')
        }
    }

}//Existe la clase Persona que tiene un método llamado constructor el cual se va a ejecutar cuando creemos objetos de esa clase.

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
//Tememos que llamar a super primero para heredar
    saludar () {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)
    }

}//Lo que se llamaba herencia ahora se llama extensión

//Manera vieja de hacer una herencia
// function heredaDe(prototipoHijo, prototipoPadre) {
//     var fn = function () {}
//     fn.prototype = prototipoPadre.prototype
//     prototipoHijo.prototype = new fn
//     prototipoHijo.prototype.constructor = prototipoHijo
// }//Esta funcion lo que hace es ver si dentro de su prototipo tinene el atributo, sino, lo va a buscar del prototipo padre, sino, lo buscará del padre del padre y así hasta encontrarlo.

//Prototype es un atributo que tienen todas las funciones y es un objeto
// function Persona(nombre, apellido, altura) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.altura = altura
//     //return this, está implicito en Js, no hay que ponerlo
// }
//This hace referencia al objeto que se acaba de construir, no a la función

// Persona.prototype.saludar = function () {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }
// //Le decimos al prototipo de persona que existe la función saludar
// //Dentro del prototipo persona existe un atributo saludar que es una función sin parametros y lo unico que hace es un console.log

// Persona.prototype.alta = function () {
//     if (this.altura >= 1.80) {
//         console.log('Soy una persona alta')
//     } else {
//         console.log('No soy una persona alta')
//     }
// }

// function Desarrollador(nombre, apellido) {
//     this.nombre = nombre
//     this.apellido = apellido
// }

// heredaDe(Desarrollador, Persona)

// Desarrollador.prototype.saludar = function () {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)
// }
//Si la haces arrow function, this va a apuntar a quien sea this fuera de la funcion (en este caso, window)


// var gerardo = new Persona('Gerardo', 'Zavala', '1.80')
// var erika = new Persona('Erika', 'Luna', '1.60')
// var arturo = new Persona('Arturo', 'González', '1.82')
