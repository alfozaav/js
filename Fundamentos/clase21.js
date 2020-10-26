//Clases en Js
//Prototipos

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    //return this, está implicito en Js, no hay que ponerlo
}
//This hace referencia al objeto que se acaba de construir, no a la función

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
//Le decimos al prototipo de persona que existe la función saludar
//Dentro del prototipo persona existe un atributo saludar que es una función sin parametros y lo unico que hace es un console.log

Persona.prototype.alta = function () {
    if (this.altura >= 1.80) {
        console.log('Soy una persona alta')
    } else {
        console.log('No soy una persona alta')
    }
}

var gerardo = new Persona('Gerardo', 'Zavala', '1.80')
var erika = new Persona('Erika', 'Luna', '1.60')
var arturo = new Persona('Arturo', 'González', '1.82')
//New hace que se cree un nuevo objeto, y a ese objeto se le asigna como prototipo la función.
gerardo.saludar()
gerardo.alta()
erika.saludar()
erika.alta()
arturo.saludar()
arturo.alta()


