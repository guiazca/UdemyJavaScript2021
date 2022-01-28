// Object.preventExtensions -> Bloqueia a adição de novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal -> Não adiciona, nem exclui
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze -> Não adiciona, não exclui e não altera
const carro = { marca: 'Renaut', modelo: 'Clio'}
Object.freeze(carro)
console.log('Congelado:', Object.isFrozen(carro))

carro.marca = 'Ferrari'
delete carro.modelo
carro.ano = 1990
console.log(carro)