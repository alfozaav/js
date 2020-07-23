document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBtn').addEventListener('click', cargarREST);

function cargarTXT() {
    fetch('datos.txt')
    //  Conexion en la que le dices como quieres los datos, en este caso en text
        .then(res => res.text()) 
    //  Aquí ya devuelve los datos
        .then(data => document.getElementById('resultado').innerHTML = data)
    //  En caso de que haya un error
        .catch(error => console.log(error))
}

function cargarJSON() {
    fetch('empleados.json')
    //  Conexión
        .then(res => res.json())
    //  Devolución de datos
        .then(data => {
            let html = '';
            data.forEach(dato => {
                html += `
                    <li>${dato.nombre} ${dato.puesto}</li>
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        })
    //  Manejo de errores
        .catch(error => console.log(error))
}

function cargarREST() {
    fetch('https://picsum.photos/list')
    //  Conexión
        .then(res => res.json())
    //  Devolución de datos
        .then(function(imagenes){
            let html = '';
            imagenes.forEach(imagen => {
                html += `
                    <li>
                        <a target="_blank" href="${imagen.post_url}">Ver Imagen</a>
                        ${imagen.author}
                    </li>
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        })
    //  Manejo de errores
        .catch(error => console.log(error))
}