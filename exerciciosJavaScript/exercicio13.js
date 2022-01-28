// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.
// Exemplos:
// filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
// filtrarNumeros(["a", "c"]) // retornará []

// const isNumber = function(value) {
//     return typeof value === 'number'
// }
const isNumber = value => typeof value === 'number'
const filtrarNumeros = array => array.filter(isNumber)
console.log(filtrarNumeros([10,20,'1']))