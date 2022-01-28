console.log(module.exports) //comeca com um objeto vazio
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 //referencia -> Aponta para o module.exports
exports.b = 2 //referencia -> Aponta para o module.exports
module.exports.c = 3

exports = null
console.log(module.exports)

exports = { // mesmo que vc mude a referencia de exports ->
    nome: 'teste'
}
console.log(module.exports) // -> Esse será exportado

module.exports = {publico: true}