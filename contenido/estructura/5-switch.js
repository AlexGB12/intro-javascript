/**
 *  ESTRUCTURA SWIYCH
 * 
 */

//Costos de una frita en la tienda

let comprar ="Mangos"

switch (comprar) {
    case "Naranjas":
        console.log("Las naranjas cuestan Q16 la mano");
        break;
    case"platanos":
        console.log("estan a Q18 la docena ");
        break
    case"Manzanas":
        console.log("El precio de las manzanas por unidad es de Q5");
    case "Mangos":
    case"papayas":
            console.log("El precio de mangos y  papayas  es de Q12 la libra");
        break;
        default:
        console.log('No se encontraron con inventario para ${comrar}')
        break;
}