export default class Cl_Aseguradora {
    constructor() {
       this.acmPagos = 0;
       this.cntPolizas = 0;
    }
    procesarPoliza(poliza) {
        this.acmPagos += poliza.montoPagar();
        this.cntPolizas++;
    }
    promedioPagos() {
        return this.acmPagos / this.cntPolizas;
    }
    montoPagado(){
        return this.acmPagos
    }
    cantidadPolizas(){
        return this.cntPolizas
    }
}