console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2) //comparando referencia de memoria
console.log('10)', d1 == d2) // comparando referencia de memoria
console.log('11)', d1.getTime() === d2.getTime()) //valor em milisegundos, number
console.log(typeof d1) //d1 e d2 são objetos
// Note que quando estou trabalhando com TIPOS PRIMITIVOS DO JS ocorre atribuição por valor.
// Note que quando estou trabalhando com tipos não primitivos(objetos, funções) do JS ocorre atribuição por referência(endereço memória).
console.log('12)', undefined == null)
console.log('13)', undefined === null)
// em regra é melhor usar "===" do que "=="
// leva em considerção o tipo e o valor
