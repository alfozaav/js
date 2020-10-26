//Callbacks

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//Para hacer un request
// $.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`, {crossDomain: true }, function (data) {
//     console.log(`Hola yo soy ${data.name}`)
// })
//.replace es un método que tienen todos los strings. Lo que hace es que cambia el primer string que le mandes por el segundo valor.
//$.get es una función que hace requests a una url, el primer parámetro que se le asigna es la url, el segundo es indicarle que el request se va a hacer hacia otra página, no la actual. Y por último el 3° parámetro que recibe es el callback.
//Calback es una función que se va a ejecutar en un futuro y el método get la va a llamar, no sabemos cuando.

//  Simplificación

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
    console.log(`Hola yo soy, ${persona.name}`)
}

$.get(lukeUrl, opts, onPeopleResponse)