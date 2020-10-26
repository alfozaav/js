function sum (n1, n2) {
    return n1 + n2
}

function calc (n1, n2, callback) {
    return callback(n1, n2)
}

console.log(calc(6, 2, sum))

function date(callback) {
    console.log(new Date)
    setTimeout(()=> {
        let date = new Date
        callback(date)
    }, 3000)
}

function printDate (dateNow) {
    console.log(dateNow)
}

date(printDate)
/* Para que corra en node es bueno poner un script en package.json con el archivo que se va a aejecutar, en este caso callback*/

