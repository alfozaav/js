//  Exportar Variables
export const nombreCliente = 'Gerardo';
export let ahorro = 200;

//  Exportar Funciones
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}


//  Exportar una Clase
export class Cliente {
    constructor(nombre,ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}