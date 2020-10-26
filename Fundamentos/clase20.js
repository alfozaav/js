//Reducir Arrays
// Reduce function: reducir un array a un valor

var gerardo = {
    nombre: 'Gerardo',
    apellido: 'Zavala',
    altura: 1.80,
    libros: 4
}

var alan = {
    nombre: 'Alan',
    apellido: 'Reynoso',
    altura: 1.70,
    libros: 8
}

var arce = {
    nombre: 'Arcelia',
    apellido: 'Pérez',
    altura: 1.55,
    libros: 7
}

var cristo = {
    nombre: 'Cristopher',
    apellido: 'Nava',
    altura: 1.75,
    libros: 15
}

var alfonso = {
    nombre: 'Alfoso',
    apellido: 'Zavala',
    altura: 1.80,
    libros: 3
}

var personas = [gerardo, alan, arce, cristo, alfonso]

// var acum = 0

// for (var i = 0; i < personas.lenght; i++) {
//     acum = acum + personas[i].libros
// }

const reducer = (acum, { libros }) => acum + libros

var totalDeLibros = personas.reduce(reducer, 0) //Necesitamos una funcion y el valor original, en este caso 0



console.log(`En total todos tienen ${totalDeLibros} libros.`)