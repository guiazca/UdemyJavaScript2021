const notas = [6.7, 7.4, 9.8, 7.7]

//para array, tem outras formas de percorrer
//let para garantir dentro do escopo
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

//para objeto faz mais sentido
//let para definir dentro do escopo
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
