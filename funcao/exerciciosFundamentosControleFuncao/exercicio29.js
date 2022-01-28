// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

const setIntervalo = function(number) {
    let dentro = 0
    let fora = 0
    for(let i=0; i < number.length; i++) {
        if(number[i] >= 10 && number[i] <= 20) {
            dentro++
        } else {
            fora++
        }
    }
    console.log(`Dentro do intervalo são ${dentro}`)
    console.log(`Fora do intervalo são ${fora}`)
}

setIntervalo([20])