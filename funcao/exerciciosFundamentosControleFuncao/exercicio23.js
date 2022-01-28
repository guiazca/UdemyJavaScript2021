// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

const media = function(codigo, nota1, nota2, nota3) {
    let media
    if(codigo>=0) {
        media = ((nota1*4)+(nota2*3)+(nota3*3))/10
    } else {
        return
    }
    if(media >= 5) {
        console.log(`o código é ${codigo}, a nota é ${nota1}, a nota é ${nota2}, a nota é ${nota3}, a média é ${media}, "APROVADO"`)
    } else {
        console.log(`o código é ${codigo}, a nota é ${nota1}, a nota é ${nota2}, a nota é ${nota3}, a média é ${media}, "REPROVADO"`)
    }
    
    
}

function gerarcodigo (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
function gerarnota (min = 0, max=10) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let nota1
let nota2
let nota3

//Estrutura de Repetição
//Repete até o valor for falso
//Própria para executar uma quantidade inderteminada de repetição


while (opcao != -1) {
    media(opcao = gerarcodigo(-1,10) , nota1 = gerarnota(), nota2 = gerarnota(), nota3 = gerarnota())
}



