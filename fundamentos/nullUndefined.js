let valor //não inicializada
console.log(valor)
// console.log(valor2) "its not defined" é diferente de "undefined" ->
// "its not defined" -> A variavel não foi declarada
// "undefined" - > Não foi dado nenhum valor a ela, não foi definida, inicializada

valor = null // ausência de valor, não aponta para nenhum objeto de memoria, está VAZIA
console.log(valor)
// console.log(valor.toString()) ERRO!! não pode realizar a operação de um objeto nulo

//sempre usar nulo quando quer zerar o valor de uma várivel

const produto = {}
console.log(produto)
console.log(produto.preco)
// console.log(produto.preco.a) acessar uma chave de outra chave undefined

produto.preco = 3.50
console.log(produto)
console.log(produto.preco)
console.log(produto.preco.a)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco 
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)