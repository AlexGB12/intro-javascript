/**CONVERSIONES - EXPLICIT type casting**/

const string ='54'
const integer = parseInt(string)

console.log(string)
console.log(integer)

const flotante = parseFloat("3.14159")
console.log(typeof flotante)//number

const binario = 1010
const decimal = parseInt(binario, 2)

console.log(decimal)

const hexa = "CAFE"
const decimalh = parseInt(hexa,16)
console.log(decimalh)


//Implicit Type Casting
const resultado ="5" + 3
//
const sumaBooleana = "3"+true
//console.log(typeof sumaBooleana)

const sumaConNumero = true + 2
console.log(typeof sumaConNumero)

const valorString = '29'
const valorNumber = 11
const valorBoolean = true
console.log(valorString + valorString)//2929
console.log(valorString + valorNumber)//2911
console.log(valorString + valorBoolean)//29true

console.log(valorNumber + valorNumber)//22
console.log(valorNumber + valorString)//1129
console.log(valorNumber + valorBoolean)//12

console.log(valorBoolean + valorBoolean)//2
console.log(valorBoolean + valorNumber)//12
console.log(valorBoolean + valorString)//true 29


