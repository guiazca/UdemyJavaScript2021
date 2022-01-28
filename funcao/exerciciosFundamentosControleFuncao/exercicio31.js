// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

const contaNegativo = function (number) {
    let negativo = 0
    for(let i = 0; i < number.length; i++) {
        if (number[i] < 0) {
            negativo++
        }
    }
    console.log(`O Vetor tem ${negativo} números negativos`)
}

contaNegativo([-1,-4,1,3,5,-1])