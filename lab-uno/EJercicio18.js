const cadena = prompt("Ingresa una palabra o frase para invertirla:");
let cadenaInvertida = "";
for (let i = cadena.length - 1; i >= 0; i--) {
  cadenaInvertida += cadena[i];
}
console.log("La cadena original es:", cadena);
console.log("La cadena invertida es:", cadenaInvertida);    