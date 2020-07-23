class Interfaz {

    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect() {
        cotizador.obtenerMonedasAPI()
            .then(monedas => {
                //  Crear un select de opciones
                const select = document.querySelector('#criptomoneda');
                //  Iterar por los resultados de la API
                for (const [key, value] of Object.entries(monedas.monedas.Data)) {
                    //  Añadir en Symbol y el Nombre como opciones
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
            //    Object.entries toma los objetos y los convierte en arreglo
            })
    }

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        //  Seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);
        //  Mostrar Contenido
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    //  Imprime el resultado de la cotización
    mostrarResultado(resultado, moneda, crypto) {

        //  En caso de un resultado anterior, ocultarlo
        const resultadoAnterior = document.querySelector('#resultado > div');
        //  > en el querySelector significa comprobar que exista

        if  (resultadoAnterior) {
            resultadoAnterior.remove();
        }

        const datosMoneda = resultado[crypto][moneda];

        //  Recortar digitos de precio
        let precio = datosMoneda.PRICE.toFixed(2),
            porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
            actualizado = new Date(datosMoneda.LASTUPDATE *1000).toLocaleDateString('es-mx');
            //  toLocaleDateString convierte la fecha hacia el formato que desees, en este caso MX

        //  Construir el template
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $${precio}</p>
                    <p>Variación del último día: %${porcentaje}</p>
                    <p>Última actualización: ${actualizado}</p>
                </div>
            </div>
        `;

        this.manejadorSpinner('block');

        //  Insertar el resultado
        setTimeout(() => {
            document.querySelector('#resultado').innerHTML = templateHTML;
            //  Ocultar el spinner
            this.manejadorSpinner('none');
        },3000);
    }

    //  Mostrar un spinner de carga al enviar la cotización
    manejadorSpinner(vista) {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }
}