// For Structures

var gerardo = {
    nombre: 'Gerardo',
    apellido: 'Zavala',
    edad: 28,
    peso: 63
}

console.log(`Al inicio del año ${gerardo.nombre} pesa ${gerardo.peso}kg`)

const INCREMENTO_PESO = 0.2

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= 365; i++) { //for (parte inicial; condición; complemento)
    var random = Math.random() //Te da un numero random entre 0 y 1
    if (random < 0.25) {
        aumentarDePeso(gerardo)
    } else if (random < 0.5) {
        adelgazar(gerardo)
    }
    
}

console.log(`Al final del año ${gerardo.nombre} pesa ${gerardo.peso.toFixed(1)}kg`)//toFixed(2) toma 2 decimales