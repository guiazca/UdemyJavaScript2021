// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

let resultado = []
let resultado2 = []
let vetor2 = []

const calcuBase = function (vetor, numero) {
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] > 5){
            vetor2.push(vetor[i])
        } else {
            resultado.push(vetor[i]*numero)
        }
      
    }
    console.log(resultado)
    calcuBase2(vetor2, numero)
}

const calcuBase2 = function (vetor, numero) {
    for(let i = 0; i < vetor.length; i++) {
        resultado2.push(vetor[i]*numero)
        console.log(resultado2)
    }
}

calcuBase([2,3,4,10], 4)