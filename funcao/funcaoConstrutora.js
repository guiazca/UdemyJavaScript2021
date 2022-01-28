function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado -> usei o "let" ou "const"
    let velocidadeAtual = 0

    //metodo publico -> usei o this
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }


    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro //usando os parametros padroes
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari =  new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)