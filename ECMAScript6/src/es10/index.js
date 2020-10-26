//ECMAScript 10

let array = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array.flat(2))
//Devolver una matriz con cualquier submatriz aplanada

let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value * 2]))
// [
//     1, 2, 2, 4,  3,
//     6, 4, 8, 5, 10
//   ]

let hello = '         Hello World'
console.log(hello)
console.log(hello.trimStart())
//          Hello World
// Hello World

let hello = 'Hello World         '
console.log(hello)
console.log(hello.trimEnd())


try {

} catch {
    error
}//Ya no tienes que especificar error despues del catch como antes:
// catch(error) {
//     error
// }

//Tranformar clave valor a objetos
let entries = [["name", "oscar"], ["age", 32]]

console.log(Object.fromEntries(entries))

//Objeto de tipo simbolo
let mySymbl = 'My Symbol'
let symbol = Symbol(mySymbl)
console.log(symbol.description)