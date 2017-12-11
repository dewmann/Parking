"use strickt"

/**
 * @file Aplicación para la gestion de un parking
 * @author Carlos Perez
 * @version 1.0
 */

/**
 * @class Parking
 * @property {numbre} capacidad Nuemero de coches que pueden haber en el parking
 * @prop {array} tunelLavado Lista de coches para labar
 * @prop {array} coches Lista de coches en el parking
 */
class parking {
    /**
     * 
     * @param {number} capacidad Numero de coches que entran en el parking
     */
    constructor(capacidad) {
        this._capacidad = capacidad;
        this._tunelLavado = [];
        this._coches = [];
    }
    meterCoche(coche) {
        // si el parking esta libre
        if (this._coches.length + this._tunelLavado.length < this._capacidad) {
            // si el coche se va a lavar
            if (coche.lavado == true) {
                // metemos la matricula en la el array de los coches registrados para labado
                this._tunelLavado.push(coche.matricula);
                // se resta una unidad a la capacidad restante
                this._capacidad--;
            }
            // si el coche no se va a labar
            else if (coche.lavado == false) {
                // metemos la matricula en la el array de los coches registrados para aparcar
                this._coches.push(coche.matricula);
                // se resta una unidad a la capacidad restante
                this._capacidad--;
            }
            return 0
        }
        // si el parking esta lleno
        else if (this._coches.length + this._tunelLavado.length > this._capacidad) {
            // devuelve -1
            return -1;
        }
    }
    /**
     * @description nos devuelve si el coche esta en el parking o no
     * @param {string} matricula coche a buscar
     * @returns {booleans}
     */
    buscarcoche(matricula){
        if (matricula){
            // indexOf
        }
        return true;
    }
}
let parkingg=new parking(2);
let coche1={
    matricula:"G54738285",
    lavado:true
}

console.log(parkingg.meterCoche(coche1))
console.log(parkingg)