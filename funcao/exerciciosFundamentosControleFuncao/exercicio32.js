// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
const media = function(number) {
    let media = 0
    for(i=0 ; i < number.length ; i++) {
        media += number[i]
    }
    media = (media / number.length).toFixed(2)
    console.log(`A média é ${media}`)
}

media([5,5,5,5,5,5,5,5,10])