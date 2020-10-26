//Devolver valores de una matriz en forma de array
const data = {
    frontend: 'Gerardo',
    backend: 'Cristo',
    design: 'Alfonso'
}

const entries = Object.entries(data)
console.log(entries)
//Crea 3 arrays de strings con 2 valores cada uno, el puesto y el nombre
console.log(entries.length)

const data = {
    frontend: 'Gerardo',
    backend: 'Cristo',
    design: 'Alfonso'
}

const values = Object.values(data)
console.log(values)
console.log(values.length)
//Crea un array de strings con los valores, que son los nombres, dentro


const string = 'hello'
console.log(string.padStart(7,'hi'))//hihello
console.log(string.padEnd(12,' ----- '))//hello------
console.log('food'.padEnd(12,' ----- '))

const obj = {
    name: 'Gerardo', //Ya no causa error el tener una coma ahí
}

//Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error ('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

helloAsync()
//otra manera (manera recomendada)
const anotherFunction = async () => {
    try{
        const hello = await helloWorld()
        console.log(hello)
    } catch (err) {
        console.log(err)
    }
}

anotherFunction()
