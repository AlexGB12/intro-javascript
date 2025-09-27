const anio = parseInt(prompt("Ingresa un anio para saber si es bisiesto"));

if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
  console.log("¡El año " + anio + " es bisiesto!");
} else {
  console.log("El año " + anio + " no es bisiesto.");
}