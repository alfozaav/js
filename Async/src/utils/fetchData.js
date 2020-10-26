let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url_api, true) //Metodo, url, que se maneje de forma asincrona
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {

                (xhttp.status === 200)//If ternario
                    ? resolve(JSON.parse(xhttp.responseText))
                    :reject(new Error('Error', url_api))

            }
        })
        xhttp.send()
    })
}


module.exports = fetchData 
// Como estamos usando NodeJS se utiliza todavia en la manera de Common ES y no ES6