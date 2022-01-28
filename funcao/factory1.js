const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome:'...',
    preco: 1234
}

// Ao fazer isso, acima, você repete o código
// A função factory tem o objetivo de "cortar" essa repetição
// Factory retorna um objeto
// Pode-se criar uma factory que tem como objeto uma função, retorna uma função

// Factory Simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())