// Transform an Array (MAP)
// map function: Va devolver un nuevo array en el cual va modificar cada uno de los elementos que le pasemos del array original.

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

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

// const pasarAlturaACms = persona => {
//     //persona.altura *= 100
//     return { 
//         ...persona,
//         altura: persona.altura * 100
//     }//Nuevo objeto para no modificar el objeto original
// }

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})
//Para retornar un objeto y no poner return abre la función primero con parentesis y luego llaves.

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)