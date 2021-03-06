//  This con Explicit binding

function persona(el1, el2) {
    console.log(`Hola soy ${this.nombre} y me gusta el ${el1} y el ${el2}`);
}

const informacion = {
    nombre: 'Gerardo',
    trabajo: 'Programador'
}
const generosMusicales = ['Rock', 'Blues'];

//  Explicit binding con .call, cuando pasas arreglo debes colocar todas las posiciones
persona.call(informacion, generosMusicales[0], generosMusicales[1]);

//  Explicit binding con .apply, (si toma un arreglo)
persona.apply(informacion, generosMusicales);

//  Explicit binding .bind
const nuevaFn = persona.bind(informacion, generosMusicales[0], generosMusicales[1]);
nuevaFn();