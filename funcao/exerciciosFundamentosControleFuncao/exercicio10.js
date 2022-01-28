// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

const verifica = function (numero) {
    if(numero%3 === 0) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

verifica(5)