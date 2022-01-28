const moduloA = require('./moduloA') //Se tiver importanto um arquivo JS, dentro de um runtime JS, não precisa colocar a extensão ".js"
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)