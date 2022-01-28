const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y) {
    return x - y
}) //muito utilizado dentro do javascript

imprimirResultado(3, 4, (x , y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar() //acessar através de um atributo de um objeto

const pessoa2 = {
    falar() {
        console.log('Opa2')
    }
}

pessoa2.falar()