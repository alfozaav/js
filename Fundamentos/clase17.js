//Arrays in Javascript, Introduction

var gerardo = {
    nombre: 'Gerardo',
    apellido: 'Zavala',
    altura: 1.80
}

var alan = {
    nombre: 'Alan',
    apellido: 'Reynoso',
    altura: 1.70
}

var arce = {
    nombre: 'Arcelia',
    apellido: 'Pérez',
    altura: 1.55
}

var cristo = {
    nombre: 'Cristopher',
    apellido: 'Nava',
    altura: 1.75
}

var alfonso = {
    nombre: 'Alfoso',
    apellido: 'Zavala',
    altura: 1.80
}

var personas = [gerardo, alan, arce, cristo, alfonso]

//Para acceder a una persona del array
// personas[0] está accediendo a gerardo
// personas[0].altura  accede a la altura de gerardo o tambien con personas[0]['altura]


//Recorrer el array

for (var i = 0; 1< personas.length; i++) {
    var persona = personas[i]
    document.write(`${persona.nombre} mide ${persona.altura} mts.`)
}