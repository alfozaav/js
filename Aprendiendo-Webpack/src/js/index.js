import '../css/style.scss';

const clientes = ['Cliente1', 'Cliente2', 'Cliente3', 'Cliente4', 'Cliente5'];

let html = '';
clientes.forEach(cliente => {
    html += `
        <li>${cliente}</li>
    `;
});

document.querySelector('#clientes').innerHTML = html;