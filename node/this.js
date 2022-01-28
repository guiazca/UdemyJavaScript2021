console.log(this === global) //this dentro de um módulo não é global
console.log(this === module) //this é um objeto, que é a referencia de module.exports

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
     console.log('Dentro de uma função...')
     console.log(this === exports)
     console.log(this === global)

     this.perigo = '...' //aponta pra global
}

this.perigo = '...' //aponta para module.exports

logThis()