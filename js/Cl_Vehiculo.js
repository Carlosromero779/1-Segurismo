import Cl_Poliza from "./Cl_Poliza.js";
export default class Cl_Vehiculo extends Cl_Poliza {
    constructor(numIden, montoSegura, porcentaje, ano) {
        super(numIden, montoSegura, porcentaje);
        this.ano = ano;
    }

   

    montoPagar() {
        if (this.ano < 2000) 
            return this.montoSegura * 0.07;
        else 
        return this.montoSegura * 0.12;
    }
}