/**
 * 
 *  FOR ciclo PARA
 */

//for | for-of|for-in

let lista = ["eat","sleep","code","repeat"];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

//for-of [{FOR EACH}]
let canasta = ["manzana","pera","naranja","uva"]
for (fruta of canasta) {
    console.log(fruta)
}


//for-in

const listeDeCompras ={
    nombre:"manzana",
    costo:3.4,
    cantidad:12,
    marca:"manzana feliz"
}
console.log("-------------------")
for (fruta in listeDeCompras) {
    console.log(fruta);
}
console.log("-------------------")
for (fruta in listeDeCompras) {
    console.log('${Fruta} : ${listeDeCompras[fruta]}')
}
console.log("-------------------")
for (fruta of listeDeCompras) {
    console.log(fruta);//error que listaDeCompras no es iterable
}