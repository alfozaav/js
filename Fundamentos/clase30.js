//Manejando el orden y el Asincronismo en Js//Múltiples requests

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)

        if (callback) {
            callback()
        }

    })
}
//Hacer que los requests lleguen como los ponemos
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6, function () {
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})
