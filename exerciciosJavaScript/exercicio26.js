// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
// consoantes, ou seja, sem as vogais.
// Exemplos:
// removerVogais("Cod3r") // retornará "Cd3r"
// removerVogais("Fundamentos") // retornará "Fndmnts"

const removerVogais = function(string) {
    let resultado = []
    resultado = string.replaceAll(/[aeiou]/g, '')
    return resultado
}
console.log(removerVogais('testeblablethiuysmou'))