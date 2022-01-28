// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

const trocaVetor = function(vetor1, vetor2) {
    tamanhoVetor = vetor1.length
    vetor1 = vetor1.concat(vetor2)
    for(let i = 0; i < tamanhoVetor ; i++) {
        vetor2[i] = vetor1[i]
    }
    vetor1.splice(0,tamanhoVetor)
    console.log(vetor1)
    console.log(vetor2)
}

trocaVetor([1,2,3,4,5], [6,7,8,9,10])