import {Cliente} from './cliente.js';

//  Exportar Variables
export const nombreEmpresa = 'GerZav';
export let ahorro = 200000000;
export const categoria = 'Bussiness';

//  Exportar Funciones
export function mostrarInformacion(nombre, ahorro, categoria) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro} - Categoria: ${categoria}`;
}

//  Utilizar la clase del modulo de Cliente
export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}