function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// let opcao = -1

// Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao, ou seja, fazendo assim:
let opcao //somente iniciada a variável, sem valor inicial!

//Estrutura de Repetição
//Realiza uma vez e depois verifica e continua até falso
//Própria para executar uma quantidade inderteminada de repetição
// Teste é depois do bloco


 do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
}while (opcao != -1)

// Fazendo isso, garante que a estrutura vá rodar pelo menos uma vez.

console.log('Até a próxima')