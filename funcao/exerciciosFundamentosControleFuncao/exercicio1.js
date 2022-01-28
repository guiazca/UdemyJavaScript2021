// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function calculadora (valor1, valor2) {
    const soma = valor1 + valor2
    const sub = valor1 - valor2
    const multi = valor1 * valor2
    const div = valor1 / valor2
    return console.log(soma, sub, multi, div)
}

calculadora(3,4)

function calculadora2 (valor1, valor2) {
    let soma = valor1 + valor2
    let sub = valor1 - valor2
    let multi = valor1 * valor2
    let div = valor1 / valor2
    return [soma, sub, multi, div]
}

console.log(calculadora2(3,4))
console.log(`O valor da soma é ${calculadora2(3,4)[0]}`)
console.log(`O valor da subtração é ${calculadora2(3,4)[1]}`)
console.log(`O valor da multiplicação é ${calculadora2(3,4)[2]}`)
console.log(`O valor da divisão é ${calculadora2(3,4)[3]}`)