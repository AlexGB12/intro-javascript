function contarVocales(cadena) {
  const cadenaEnMinusculas = cadena.toLowerCase();
  
  let contadorDeVocales = 0;
  const vocales = "aeiou";
  for (const caracter of cadenaEnMinusculas) {
    if (vocales.includes(caracter)) {
      contadorDeVocales++;
    }
  }
  return contadorDeVocales;
}
const textoDelUsuario = prompt("Ingresa una frase para contar sus vocales:");
const cantidad = contarVocales(textoDelUsuario);

console.log(`La frase "${textoDelUsuario}" tiene ${cantidad} vocales.`);