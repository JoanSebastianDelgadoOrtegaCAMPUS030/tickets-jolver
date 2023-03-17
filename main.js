/*la empresa de eventos abc desea crear elementos que le permita calcular el costo total apagar por 
conecepto de pago en la adquidcicion de entradas para el concierto programado para el mes de agosoto
la empresa tiene una distribucion general del escenario de la siguiente forma 
    vip valor entrada 1000000
    vip general entrada 800000
    general entrada 600000
    graderia entrada 400000

si el cliente cancela en efectivo tiene un descuento del 10% en la compra. 
si el cliente cancela con tarjeta de credito tiene un descuento del 3% en la compra

SOLO SE PERMITE LA COMPRA DE 2 TICKETS por cliente 

nota debido a la acogida del evento se realizaran 2 presentaciones programadas de la siguiente forma 
    fecha 1: 10 de agosto del 2023
    fecha 2: 13 de agosto del 2023
el cliente debe seleccionar la fecha en la que desea asistir


EL
FORMULARIO DEBE PRESENTAR EL RESUMEN DE LA COMPRA Y PERMITIR
CONFIRMAR O CANCELAR LA COMPRA. SI EL CLIENTE CANCELA LA COMPRA SE LE
MOSTRARA UN MENSAJE INDICANDOLE QUE EL PROCESO FINALIZO CON LA
CANCELACION EN CASO QUE CONFIRME LA COMPRA SE LE INFORMARA QUE EL
TICKET SERA ENVIADO A LA DIRECCION Y CIUDAD INDICADA EN FORMULARIO DE
COMPRA.


*/

/*function calcularTotal() {
    let fecha = document.getElementById("fecha").value;
    let tipoEntrada = document.getElementById("tipoEntrada").value;
    let cantidad = document.getElementById("cantidad").value;
    let formaPago = document.getElementById("formaPago").value;
    let valorEntrada = 0;
    let subtotal = 0;
    let descuento = 0;
    let total = 0;
    
    switch (tipoEntrada) {
        case "vip":
            valorEntrada = 1000000;
            break;
        case "vip general":
            valorEntrada = 800000;
            break;
        case "general":
            valorGeneral = 600000;
            break
        case "graderia": 
            valorGraderia = 400000;
            break;
        }        
        */


        // Definimos los precios de las entradas y los descuentos correspondientes
const VIP_PRICE = 1000000;
const GENERAL_VIP_PRICE = 800000;
const GENERAL_PRICE = 600000;
const GRADERIA_PRICE = 400000;
const CASH_DISCOUNT = 0.1;
const CREDIT_CARD_DISCOUNT = 0.03;

// Solicitamos al usuario la cantidad de entradas y la forma de pago
let numTickets = prompt("Ingrese la cantidad de entradas que desea comprar:");
let paymentMethod = prompt("Ingrese la forma de pago (efectivo o tarjeta de crédito):");

// Convertimos la cantidad de entradas a un número entero
numTickets = parseInt(numTickets);

// Verificamos que el usuario haya ingresado una cantidad válida de entradas
if (isNaN(numTickets) || numTickets <= 0) {
  alert("Debe ingresar una cantidad válida de entradas");
} else if (numTickets > 2) {
  alert("Solo se permite la compra de 2 tickets por cliente");
} else {
  // Calculamos el precio total de la compra según la cantidad de entradas y la forma de pago
  let totalPrice;
  if (numTickets == 1) {
    if (paymentMethod.toLowerCase() == "efectivo") {
      totalPrice = VIP_PRICE * (1 - CASH_DISCOUNT);
    } else if (paymentMethod.toLowerCase() == "tarjeta de crédito") {
      totalPrice = VIP_PRICE * (1 - CREDIT_CARD_DISCOUNT);
    } else {
      alert("La forma de pago ingresada no es válida");
    }
  } else { // numTickets == 2
    if (paymentMethod.toLowerCase() == "efectivo") {
      totalPrice = (VIP_PRICE * 2) * (1 - CASH_DISCOUNT);
    } else if (paymentMethod.toLowerCase() == "tarjeta de crédito") {
      totalPrice = (VIP_PRICE * 2) * (1 - CREDIT_CARD_DISCOUNT);
    } else {
      alert("La forma de pago ingresada no es válida");
    }
  }

  // Mostramos el precio total de la compra al usuario
  alert(`El precio total de la compra es: ${totalPrice}`);
}

// obtener el valor de la forma de pago seleccionada
const formaDePago = document.querySelector('input[name="formaDePago"]:checked').value;

// obtener el monto de la compra
const montoCompra = 1000; // por ejemplo

// aplicar el descuento correspondiente
let montoFinal;
if (formaDePago === "efectivo") {
  montoFinal = montoCompra * 0.9; // 10% de descuento
} else if (formaDePago === "tarjeta") {
  montoFinal = montoCompra * 0.97; // 3% de descuento
} else {
  // si no se seleccionó ninguna forma de pago, mostrar un mensaje de error
  console.error("Seleccione una forma de pago");
}

// mostrar el monto final con el descuento aplicado
console.log(`Monto final: ${montoFinal}`);
