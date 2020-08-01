let DB;

//  Selectores de la Interfaz
const form = document.querySelector('form'),
    nombreMascota = document.querySelector('#mascota'),
    nombreCliente = document.querySelector('#cliente'),
    telefono = document.querySelector('#telefono'),
    fecha = document.querySelector('#fecha'),
    hora = document.querySelector('#hora'),
    sintomas = document.querySelector('#sintomas'),
    citas = document.querySelector('#citas'),
    headingAdmininstra = document.querySelector('#administra');

//  Esperar por el DOM ready
document.addEventListener('DOMContentLoaded', () => {
    //  Crear la base de datos
    let crearDB = window.indexedDB.open('citas', 1); //Siempre usar numeros enteros en la versión

    //  Si hay un error, enviarlo a la consola
    crearDB.onerror = function() {
        console.log('Hubo un error');
    }
    //  Si todo está bien, entonces muestra en consola y asigna la base de datos
    crearDB.onsuccess = function() {
        // console.log('Todo Listo')

        //  Asignar a la base de datos
        DB = crearDB.result;
        // console.log(DB);

        mostrarCitas();
    }

    //  Este método solo corre una vez y es ideal para crear el Schema
    crearDB.onupgradeneeded = function(e) {
        //  El evento es la misma base de datos
        let db = e.target.result;
        
        //  Definir el objectstore, toma 2 parámetros el nombre de la db y segundo las opciones
        //  Keypath es el indice de la db
        let objectstore = db.createObjectStore('citas', {keyPath: 'key', autoIncrement: true} );

        //  Crear los indices y campos de la db, createIndex : 3 parametros, nombre, keypath y opciones
        objectstore.createIndex('mascota', 'mascota', {unique : false} );
        objectstore.createIndex('cliente', 'cliente', {unique : false} );
        objectstore.createIndex('telefono', 'telefono', {unique : false} );
        objectstore.createIndex('fecha', 'fecha', {unique : false} );
        objectstore.createIndex('hora', 'hora', {unique : false} );
        objectstore.createIndex('sintomas', 'sintomas', {unique : false} );

        console.log('Base de datos creada y lista!!');
    }

    //  Cuando el formulario se envía
    form.addEventListener('submit', agregarDatos);

    function agregarDatos(e) {
        e.preventDefault();

        const nuevaCita = {
            mascota: nombreMascota.value,
            cliente: nombreCliente.value,
            telefono: telefono.value,
            fecha: fecha.value,
            hora: hora.value,
            sintomas: sintomas.value
        }
        // console.log(nuevaCita);

        //  En IndexedDB se utilizan las transacciones
        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');
        // console.log(objectStore);
        let peticion = objectStore.add(nuevaCita);

        console.log(peticion);

        peticion.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('Cita agregada');
        }
        transaction.onerror = () => {
            console.log('Hubo un error');
        }
    }

    function mostrarCitas() {
        //  Limpiar las citas anteriores
        while (citas.firstChild) {
            citas.removeChild(citas.firstChild);
        }

        //  Creamos un objectStore
        let objectStore = DB.transaction('citas').objectStore('citas');

        //  Esto retorna una petición
        objectStore.openCursor().onsuccess = function(e) {
            //  Cursor de va a ubicar en el registro indicado para acceder a los datos
            let cursor  =e.target.result;

            // console.log(cursor);
            if  (cursor) {
                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id', cursor.value.key);
                citaHTML.classList.add('list-group-item');

                citaHTML.innerHTML = `
                    <p class="font-weight-bold"> Mascota: <span class="font-weight-normal"> ${cursor.value.mascota} </span> </p>
                    <p class="font-weight-bold"> Cliente: <span class="font-weight-normal"> ${cursor.value.cliente} </span> </p>
                    <p class="font-weight-bold"> Teléfono: <span class="font-weight-normal"> ${cursor.value.telefono} </span> </p>
                    <p class="font-weight-bold"> Fecha: <span class="font-weight-normal"> ${cursor.value.fecha} </span> </p>
                    <p class="font-weight-bold"> Hora: <span class="font-weight-normal"> ${cursor.value.hora} </span> </p>
                    <p class="font-weight-bold"> Sintomas: <span class="font-weight-normal"> ${cursor.value.sintomas} </span> </p>
                `;
                //  Botón de borrar
                const botonBorrar = document.createElement('button');
                botonBorrar.classList.add('borrar', 'btn', 'btn-danger');
                botonBorrar.innerHTML = '<span aria-hidden="true">X</span> Borrar';
                botonBorrar.onclick = borrarCita;
                citaHTML.appendChild(botonBorrar);

                //  Append en el padre
                citas.appendChild(citaHTML);

                //  Consultar los próximos registros
                cursor.continue();
            } else {
                if (!citas.firstChild) {
                    //  Cuando no hay registros
                    headingAdmininstra.textContent = 'Agrega citas para comenzar';
                    let listado = document.createElement('p');
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay registros';
                    citas.appendChild(listado);
                } else {
                    headingAdmininstra.textContent = 'Administra tus citas';
                }
            }
        }
    }

    function borrarCita(e) {
        let citaID = Number(e.target.parentElement.getAttribute('data-cita-id') );

        //  En IndexedDB se utilizan las transacciones
        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');
        // console.log(objectStore);
        let peticion = objectStore.delete(citaID);

        transaction.oncomplete = () => {
            e.target.parentElement.parentElement.removeChild( e.target.parentElement );
            console.log(` Se eliminó la cita con el ID: ${citaID} `);

            if (!citas.firstChild) {
                //  Cuando no hay registros
                headingAdmininstra.textContent = 'Agrega citas para comenzar';
                let listado = document.createElement('p');
                listado.classList.add('text-center');
                listado.textContent = 'No hay registros';
                citas.appendChild(listado);
            } else {
                headingAdmininstra.textContent = 'Administra tus citas';
            }
        }
    }
})