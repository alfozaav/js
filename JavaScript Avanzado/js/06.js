//  Classes y Prototypes

function PlayList(nombre) {
    this.nombre = nombre;
}

PlayList.prototype.play = function() {
    console.log(`Reproduciendo la playlist ${this.nombre}`);
}

PlayList.prototype.eliminar = function() {
    console.log(`Eliminando la playlist ${this.nombre}`);
}

const playlist = new PlayList('Rock 90s');
const playlist2 = new PlayList('Blues');

playlist.play()
playlist2.play()

playlist.eliminar()
playlist2.eliminar()