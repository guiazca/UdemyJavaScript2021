console.log(soma(3, 4))
// console.log(sub(3, 4)) -> sub is not defined
// console.log(mult(3, 4)) -> sub is not defined

// function declaration
// posso chamar ela antes de declarar
// primeiro o javacript carrega as funções, e depois percorre o código
function soma(x, y) {
    return x + y
}


// function expression
// não posso chamar antes de declarar
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
// muito pouco usada
// usado para debugar, stack3
// não posso chamar antes de declarar
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))



