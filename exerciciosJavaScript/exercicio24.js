// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.
// Exemplos:
// contarCaractere("r", "A sorte favorece os audazes") // retornará 2
// contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1

const contarCaractere = function(letra, string) {
    let newArray = []
    let contador = 0
    newArray = string.split('')
    newArray.forEach(e => e === letra ? contador ++ : contador)
    return contador
}

console.log(contarCaractere("C", "ConheceCC-te a ti mesmo"))