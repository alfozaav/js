//Filtar un array

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

const esAlta = ({ altura }) => altura > 1.75

const esBaja = ({altura }) => altura <= 1.70

var personas = [gerardo, alan, arce, cristo, alfonso]

//Para filtrar necesitamos un array y una condición

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

//Tambien se puede usar una función anónima dentro del filter:
// var personasAltas = personas.filter(function (persona) {
//     return persona.altura > 1.75
// })

console.log(personasAltas) //Solo muestra dos personas, que son mayores a esa altura
console.log(personasBajas)
