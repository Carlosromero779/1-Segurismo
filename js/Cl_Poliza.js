export default class Cl_Poliza {
    constructor(numIden, montoSegura, porcentaje) {
        this.numIden = numIden;
        this.montoSegura = montoSegura;
        this.porcentaje = porcentaje;
    }
    
cobertura() {
    return this.montoSegura * (this.porcentaje / 100);
}
}