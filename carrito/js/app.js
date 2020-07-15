//Variables 
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//Listeners
cargarEventListeners();
function cargarEventListeners() {
    //Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);

    //Cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Al vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    //  Al cargar el documento, mostrar Local Storage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

//Funciones
//Funcion que añade el curso al carrito
function comprarCurso(e) {
    e.preventDefault();
    //Delegation para agregar carrito
    if(e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        //Enviamos curso seleccionado para obtener sus datos 
        leerDatosCurso(curso);
    };
}
//lee datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoCurso);
}
//Muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
}
//Elimina el curso del carrito en el dom
function eliminarCurso(e) {
    e.preventDefault();

    let curso, 
        cursoId;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }
    eliminarCursoLocalStorage(cursoId);
}
//Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
    //Forma lenta 
    // listaCursos.innerHTML = '';
    //Forma rapida (recomendada)
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }

    //Vaciar Local Storage
    vaciarLocalStorage();

    return false;
}

//Almacena Cursos en el carrito a Local Storage
function guardarCursoLocalStorage(curso) {
    let cursos;
    //Toma el valor de un Array con datos del Local Storage o vacío
    cursos = obtenerCursosLocalStorage();
    //El curso seleccionado se arregla al Array
    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos) );
    //Método contario a parse, convierte un array a string
}
// Comprueba que haya elementos en Local Storage
function obtenerCursosLocalStorage() {
    let cursosLS;

    //Comprobamos si hay algo en Local Storage
    if (localStorage.getItem('cursos') == null) {
         cursosLS = [];
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos') ); //JSON.parse manda lo que viene como string a arreglo
    }
    return cursosLS;
}

//Imprime los cursos de Local Storage en el carrito
function leerLocalStorage() {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function(curso) {
        //Construir el template
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width=100>
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
        listaCursos.appendChild(row);
    });
}
//Elimina el curso por el ID en el Local Storage
function eliminarCursoLocalStorage(curso) {
    let cursosLS;
    //Obtenermos el arreglo de cursos
    cursosLS = obtenerCursosLocalStorage();
    // Iteramos comparando el ID del curso borrado con los del LS
    cursosLS.forEach(function(cursoLS, index) {
        if ( cursoLS.id === curso) {
            cursosLS.splice(index, 1);
        }
    });
    // Añadimos el array virtual a Storage
    localStorage.setItem('cursos', JSON.stringify(cursosLS) );
}
// Elimina todos los cursos de Local Storage
function vaciarLocalStorage() {
    localStorage.clear();
}