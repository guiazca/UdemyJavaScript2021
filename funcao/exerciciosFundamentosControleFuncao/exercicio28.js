// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares
getNumber = [1,2,1]

getNumber = function(number) {
    let pares = 0
    let impares = 0
    for(let i=0; i < number.length; i++) {
        if(number[i]%2 === 0) {
            pares++
        } else {
            impares++
        }
    }
    console.log(`São ${pares} numeros pares`)
    console.log(`São ${impares} numeros impares`)
}

getNumber([1,2,1])