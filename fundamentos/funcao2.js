//Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
} 

imprimirSoma(2, 3)

//armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito
const subtracao = (a, b) => a - b

console.log(subtracao(5, 2))

const imprimir2 = a => console.log(a) // a sem parenteses pois só existe um parametro de entrada
imprimir2("Legal!!!")