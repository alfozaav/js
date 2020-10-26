// Manejo de errores de Callbacks con Promesas
// Las promesas son valores que aún no concemos. Tienen 3 estados : Pending, inicia en este estado. Si se resuelve pasa a fulfilled y si se rechaza pasa a rejected.
//new Promise(function(resolve, reject) {
//     ...
// }).then(valor => {
//     ... Si se resuelve con then podemos obtener el valor pasando una funcion como parámetro
// }).catch(err => {
//     ... con catch optenemos el error para poder hacer alguna tarea como mostrar un mensaje, hacer una tarea, etc.
// })
// Promesas encadenadas: Luego de llegar al estado de fulfilled se puede retornar una promesa dentro del .then para irlas encadenando, cada una de ellas puede ser rechazada y resuelta.

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, opts, function (data) {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}
function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
    .then(function (personaje) {
        console.log(`Èl personaje 1 es ${personaje.name}`)
    })
    .catch(onError)