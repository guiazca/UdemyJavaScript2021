// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.
// Exemplo:
// multiplicar(5, 5) // retornará 25
// multiplicar(0, 7) // retornará 0

const multiplicar = function(numero1, numero2) {
    let soma = 0
    for(let i = 0; i < numero2; i++){
        soma +=numero1
    }
    console.log(soma)
}
multiplicar(5, 5)
multiplicar(0, 7)
multiplicar(10, 10)
