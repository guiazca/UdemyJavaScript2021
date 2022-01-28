const alunos = [
    { nome: 'João', nota: 7.9},
    { nome: 'Maria', nota: 9.2}
]

//Imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

//Imperativo Vs Declarativo
//Imperativo
// - Menos Re-uso
// - Faz tudo ao mesmo tempo
// - Foco em como tem que ser feito
// - Funções não especialistas, fazem tudo

//Declarativo
// - Mais Re-uso
// - Funções separadas
// - Foco em o que tem que ser feito
// - Funções pequenas especialistas
// - Paradigma Funcional

// select codigo, nome, email from clientes where ativo = 1
// Não estou preocupado em como o banco vai percorrer e sim o que você quer pegar
// foco no resultado e não no processo