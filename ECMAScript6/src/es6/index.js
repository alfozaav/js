//ECMAScript 6
//Funciones
function newFunction(name, age, country) {
    var name = name || 'Gerardo';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}
// es6
function newFunction2(name = 'Gerardo', age = 32, country = 'MX') {
    console.log(name, age, country);
};
newFunction2();
newFunction2('Ricardo', '23', 'CO')

//Concatenación
let hello = 'Hello';
let world = 'World';
let ephicPhrase = hello + ' ' + world;
console.log(ephicPhrase);
//es6
let ephicPhrase2 = `${hello} ${world}`;
console.log(ephicPhrase);

//multilinea en srtrings
let lorem = 'Lorem ipum badabada badabada badans \n'
+ 'otra frase'
//es6
let lorem2 = `otra frase épica 
ahora es otra frase épica`

console.log(lorem)
console.log(lorem2)

//Destructuración de elementos
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age);
//es6
let {name, age,country} = person;
console.log(name, age, country);

//Spread Operator
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesika', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

//Let y Const
{
    var globalVar = 'Global';
}
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}
console.log(globalVar);

const a = 'b';
a = 'a';
console.log(a)

//Objetos
let name = 'Gerardo'
let age = 21
//es5
obj = {name: name, age: age};
//es6
obj2={name, age};
console.log(obj2)

const names = [
    {name: 'Oscar', age: 32},
    {name:'Yesica', age:  27}
]

let listOfNames = names.map(function ( item ) {
    console.log(item.name);
})
//es6
let listOfNames2 = names.map(item => console.log(item.name));
//es6
const listOfNames3 = (name, age) = (name, age, country) => {
    //...
}
//es6
const listOfNames4 = name => {
    //...
}
//es6
const square = num => num * num;

//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(err => console.log(err))

//Clases
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }//Constructor es el método para inicializar la clase
    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}
const calc = new calculator()
console.log(calc.sum(2,2))
//Modulos
import { hello } from './module'
hello()
//generators, es una funcion especial que retorna una serie de valores segun el algoritmo definido, un caso famoso es el fibonashi
function* helloWorld() {
    if(true) {
        yield 'Hello'
    }
    if (true) {
        yield 'World'
    }
}
const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
