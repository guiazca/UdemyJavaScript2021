// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

const div = function (valor1, valor2) {
    const divisao = valor1 / valor2
    const resto = valor1%valor2
    return [divisao, resto]
}

console.log(`O resultado da divisão é ${div(4,4)[0]}`)
console.log(`O resto da divisão é ${div(4,4)[1]}`)
console.log(div(243,5))
console.log(div(26,4))