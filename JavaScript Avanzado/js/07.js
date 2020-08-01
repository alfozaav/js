//  Herencia vía Prototype

function PlayList(nombre) {
    this.nombre = nombre;
}

PlayList.prototype.play = function() {
    console.log(`Reproduciendo la playlist ${this.nombre}`);
}

PlayList.prototype.eliminar = function() {
    console.log(`Eliminando la playlist ${this.nombre}`);
}

//  Herencia
function Cancion(nombre, genero) {
    PlayList.call(this, nombre); // Hereda esta propiedad
    this.genero = genero;
}

//  Heredar kos métodos
Cancion.prototype = Object.create(PlayList.prototype); //Clona el prototype de playlist en cancion

const cancion = new Cancion('Red', 'Pop');
const playlist = new PlayList('Rock 90s');

playlist.play();
cancion.play();

