// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
// Exemplos:
// maiorOuIgual(0, 0) // retornará true
// maiorOuIgual(0, "0") // retornará false
// maiorOuIgual(5, 1) // retornará false

const maiorOuIgual = function(numero1, numero2) {
    if(numero1 >= numero2) {
        return true
    } else {
        return false
    }
}

console.log(maiorOuIgual (11,10))