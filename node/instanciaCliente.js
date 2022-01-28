const contadorA = require ('./instanciaUnica')
const contadorB = require ('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()
// no contadorC, como estou invocando uma função preciso colocar '()'
// Estou invocando a função factory 

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor)
console.log(contadorB.valor)
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor)
console.log(contadorD.valor)