// Comparaciones dentro de JS

var x = 4, y = '4'
//x == y 
//true, lleva los dos valores a un mismo tipo de dato

//x === y
//false, verifica que los dos valores sean iguales y además sean el mismo tipo de dato
//conviene utilizar más este

var gerardo = {
    nombre: 'Gerardo'
}

var otraPersona = {
    nombre: 'Gerardo'
}

//gerardo == otra persona
//False, al comparar objetos Js pregunta por la referencia a la variable que estamos utilizando

//var otraPersona = gerardo
//otraPersona == gerardo
//true, así sí porque le estas dando la misma referencia al igualar su contenido