// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.
// Exemplos:
// simboloMais(2) // retornará "++"
// simboloMais(4) // retornará "++++"

const simboloMais = function(numero) {
    let string = ''
    for(let i = 0; i < numero; i++) {
        string += '+'
    }
    console.log(string)
}
simboloMais(10)