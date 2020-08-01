class PlayList{
    constructor(nombre) {
        this.nombre = nombre;
    }
    play() {
        console.log(`Reproduciendo la playlist ${this.nombre}`);
    }
    eliminar() {
        console.log(`Eliminando la playlist ${this.nombre}`);
    }
}

const playlist = new PlayList('Rock 90s');
const playlist2 = new PlayList('Blues');

playlist.play()
playlist2.play()

playlist.eliminar()
playlist2.eliminar()