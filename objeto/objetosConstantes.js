//pessoa -> Endereço de memória(123) -> {...}
const pessoa = { nome: 'joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> Endereço de memória(456) -> {...}
//pessoa = { nome: 'Ana'}

//Objeto é congelado
//Não consegue alterar
//Não consegue delete
//Não consegue Adicionar
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)