const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) //verifica se é número inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

console.log(Number.isInteger(avaliacao1))
console.log(Number.isInteger(avaliacao2))

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log("o Total é: " + total.toFixed(2)) //não altera o valor
console.log("A média é: " + media.toFixed(2))
console.log("o Total é: " + total)
console.log("A média é: " + media)

console.log(media.toString(2)) //converte em valor binário
console.log(typeof media) //number -> tipo e dado
console.log(typeof Number) //funcão