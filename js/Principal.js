/*Una empresa Aseguradora requiere un programa para el control de sus pólizas. Cada
póliza posee un número de identificación único, monto a asegurar y el porcentaje de
cobertura. El monto a pagar por las pólizas de Vida depende la edad del cliente: menores de
18 años la póliza es el 5% del monto a asegurar, caso contrario el 10%. Para los vehículos, el
monto a pagar por la póliza es el 7% si el año es menor que el 2000, y el 12% en otros casos.
Mostrar el Monto a Pagar por cada Póliza y el monto de la cobertura, y por la 
Aseguradora elPromedio de Monto Pagado.
Se conoces los siguientes datos de los clientes: (numIden, montoSegura, porcentaje, edad) -
- (22. 1000, 80,15)- (11,500, 90,22)-(55, 2000, 70, 18)- (88, 1500, 90,30)
Se conocen los siguienrte datos de los vehiculos (numIden, montoSegura, porcentaje, ano)
- (33,2000,80, 2000)- (90,1500,90,2005)- (77, 1000, 90,1995)- (44,2500, 85, 2010)*/
import Cl_Vehiculo from "./Cl_Vehiculo.js";
import Cl_Cliente from "./Cl_Cliente.js";
import Cl_Aseguradora from "./Cl_Aseguradora.js";
 let cliente = new Cl_Cliente(22, 1000, 80, 15);
 let cliente2 = new Cl_Cliente(11, 500, 90, 22);
 let cliente3 = new Cl_Cliente(55, 2000, 70, 18);
 let cliente4 = new Cl_Cliente(88, 1500, 90, 30);
 let vehiculo = new Cl_Vehiculo(33, 2000, 80, 2000);
 let vehiculo2 = new Cl_Vehiculo(90, 1500, 90, 2005);
 let vehiculo3 = new Cl_Vehiculo(77, 1000, 90, 1995);
 let vehiculo4 = new Cl_Vehiculo(44, 2500, 85, 2010);
 let aseguradora = new Cl_Aseguradora();
 aseguradora.procesarPoliza(cliente);
 aseguradora.procesarPoliza(cliente2);
 aseguradora.procesarPoliza(cliente3);
 aseguradora.procesarPoliza(cliente4);
 aseguradora.procesarPoliza(vehiculo);
 aseguradora.procesarPoliza(vehiculo2);
 aseguradora.procesarPoliza(vehiculo3);
 aseguradora.procesarPoliza(vehiculo4);

 let salida = document.getElementById("salida");

 let mostrarPoliza = (poliza) => {
    return`
    <tr>
        <td>${poliza.numIden}</td>
        <td>${poliza.montoSegura.toFixed(2)}</td>
        <td>${poliza.porcentaje}%</td>
        <td>${poliza.edad}</td>
        <td>${poliza.cobertura().toFixed(2)}</td>
        <td>${poliza.montoPagar().toFixed(2)}</td>
    </tr>
    
    `;
 };
 
 salida.innerHTML = `<table>
 <tr>
    <th> NumIden </th>
    <th> Monto Segura </th>
    <th> Porcentaje </th>
    <th> Edad </th>
    <th> Cobertura </th>
    <th> Monto a Pagar </th>
 </tr>

 ${mostrarPoliza(cliente)}
 ${mostrarPoliza(cliente2)}
 ${mostrarPoliza(cliente3)}
 ${mostrarPoliza(cliente4)}
  </table>
`
let mostrarPoliza2 = (poliza) => {
    return`
    <tr>
        <td>${poliza.numIden}</td>
        <td>${poliza.montoSegura.toFixed(2)}</td>
        <td>${poliza.porcentaje}%</td>
        <td>${poliza.ano}</td>
        <td>${poliza.cobertura().toFixed(2)}</td>
        <td>${poliza.montoPagar().toFixed(2)}</td>
    </tr> 
    `;
 };
 salida.innerHTML += `<table>
 <tr>
    <th> NumIden </th>
    <th> Monto Segura </th>
    <th> Porcentaje </th>
    <th> Año </th>
    <th> Cobertura </th>
    <th> Monto a Pagar </th>
 </tr>

 ${mostrarPoliza2(vehiculo)}
 ${mostrarPoliza2(vehiculo2)}
 ${mostrarPoliza2(vehiculo3)}
 ${mostrarPoliza2(vehiculo4)}
  </table>
  <br> Total pagado: $${aseguradora.montoPagado().toFixed(2)}
  <br> Cantidad de polizas procesadas: ${aseguradora.cantidadPolizas()}
  <br> Monto Promedio pagado por poliza: $${aseguradora.promedioPagos().toFixed(2)}
`
;