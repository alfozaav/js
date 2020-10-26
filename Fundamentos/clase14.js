// While Structures

var gerardo = {
    nombre: 'Gerardo',
    apellido: 'Zavala',
    edad: 28,
    peso: 63
}

console.log(`Al inicio del año ${gerardo.nombre} pesa ${gerardo.peso}kg`)

const INCREMENTO_PESO = 0.3

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = gerardo.peso - 3
var dias = 0

while (gerardo.peso > META) {
    //debugger //Va a detener la ejecución del programa cada que llegue a esta palabra
    if (comeMucho()) {
        aumentarDePeso(gerardo)
    }
    if (realizaDeporte()) {
        adelgazar(gerardo)
    }
    dias +=1
}

console.log(`Pasaron ${dias} días hasta que ${gerardo.nombre} adelgazó 3kg`)