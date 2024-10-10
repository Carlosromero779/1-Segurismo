import Cl_Poliza from "./Cl_Poliza.js";
export default class Cl_Cliente extends Cl_Poliza{
    constructor(numIden, montoSegura, porcentaje, edad) {
        super(numIden, montoSegura, porcentaje);
        this.edad = edad;
    }
   
    montoPagar(){
       if(this.edad < 18)
        return this.montoSegura*0.05;
       else 
       return this.montoSegura*0.10;
}
          
}