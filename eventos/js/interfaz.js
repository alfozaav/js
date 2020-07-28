class Interfaz {
    constructor() {
        //  Inicializa la App al instanciar
        this.init();
        //  Leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }

    //  Método para cunado inicialice la app
    init() {
        //  Llamar a imprimir categorias de la REST API
        this.imprimirCategorias()
    }

    //  Imprimir categorias
    imprimirCategorias() {
        const listaCategorias = eventbrite.obtenerCategorias()
            .then(categorias => {
                const cats = categorias.categorias.categories;
                //  Seleccionar el select de categorias
                const selectCategoria = document.getElementById('listado-categorias');
                //  Recorremos el arreglo e imprimimos los <option>
                cats.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategoria.appendChild(option);
                })
            })
    }

    //  Método para imprimir mensajes
    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.classList = clases;
        //  Agregar texto
        div.appendChild(document.createTextNode(mensaje));
        //  Buscar al padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);
        //  Quitar el alert depues de 3s
        setTimeout(() =>{
            this.limpiarMensaje();
        }, 3000);
    }

    //  Desaparece el mensaje en caso de que exista
    limpiarMensaje() {
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }
}