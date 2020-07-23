const cotizador = new API('78ae191dcedac8fbeafa94f1599cedc27fad79095a8def5ec643c423d1b3a275');
const ui = new Interfaz();

//  Leer el formulario
const formulario = document.querySelector('#formulario');

//  Event Listener
formulario.addEventListener('submit', e => {
    e.preventDefault();
    
    //  Leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    //  Leer la Crypto Moneda seleccionada
    const cryptoSelect = document.querySelector('#criptomoneda');
    const cryptoSeleccionada = cryptoSelect.options[cryptoSelect.selectedIndex].value;

    //  Comprobar que ambos campos tengan algo seleccionado
    if (monedaSeleccionada === '' || cryptoSeleccionada === '') {
        //  Arrojar una alerta de error
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
    } else {
        //  Todo bien, consultar la API
        cotizador.obtenerValores(monedaSeleccionada, cryptoSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, cryptoSeleccionada);
            })
    }
})