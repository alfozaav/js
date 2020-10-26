// Aync-await

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

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
    //Await detiene la ejecución de esa linea de código y la ejecuta en este caso hasta que todas las promesas sean resueltas y ahí se va a guardar el valor en la variable personajes.
}

obtenerPersonajes()
