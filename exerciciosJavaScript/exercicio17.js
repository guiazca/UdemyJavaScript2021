// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
// Exemplos:
// somarNumeros([10, 10, 10]) // retornará 30
// somarNumeros([15, 15, 15, 15]) // retornará 60
const array1 = [15, 15, 15, 15]
const reducer = (acumulador, valorAtual) => acumulador + valorAtual
console.log(array1.reduce(reducer))