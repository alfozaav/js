//  Instaciar ambas clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

//  Listeners
document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();

    //  Leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;

    //  Leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    //  Revisar que haya algo escrito en el buscador
    if (textoBuscador !== '') {
        //  Cuando si hay una busqueda
        eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
            .then(eventos => {
                if (eventos.eventos.events.length > 0) {
                    console.log('Si hay eventos');
                } else {
                    console.log('No hay eventos');
                }
            })
    } else {
        //  Mostrar un mensaje para que imprima algo
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }
})