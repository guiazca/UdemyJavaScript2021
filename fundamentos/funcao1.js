//funcao é um verbo
//bloco é o trecho de codigo

//funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6 ,7, 8)
imprimirSoma(10, 20, 4, 6, 3, 6, 3)
imprimirSoma()

//funcao com retorno
function soma(a, b = 10) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
