// 12) Faça um algoritmo que calcule o fatorial de um número.

const fatorial = function(numero) {
    let resultado = numero
    let fat = numero - 1
    for(i=fat; i >= 1; --i) {
        resultado = resultado * i
    }
    return console.log(resultado)
}

fatorial(8)