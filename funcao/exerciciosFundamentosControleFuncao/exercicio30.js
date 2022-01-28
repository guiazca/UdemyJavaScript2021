// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const menorMaior = function(number) {
    let maior = 0
    let menor = number[0]
    for(let i = 0; i < number.length; i++) {
        if(maior < number[i]) {
            maior = number[i]
        }
        if(menor > number[i]) {
            menor = number[i]
        }
    }
    console.log(`O maior numero é ${maior}`)
    console.log(`O menor numero é ${menor}`)
}

menorMaior([5,3,6,8,7,10,22,9,44,22,100])