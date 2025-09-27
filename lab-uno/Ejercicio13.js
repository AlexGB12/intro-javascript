const numero = parseInt(prompt("Ingresa un número para calcular su factorial(NoNegativoOOOOOO):"));
function calcularFactorialConWhile(num) {
  if (num < 0) {
    return "Error: El factorial NO existe en numeros negas";
  }
  if (num === 0) {
    return 1;
  }
  let i = 1;
  let resultado = 1;
  while (i <= num) {
    resultado *= i;
    i++;  
  }return resultado;
}
console.log(`El factorial de ${numero} es:`, calcularFactorialConWhile(numero));