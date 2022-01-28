// Funcao Factory tem vantagens no Browser por conta do "this"
// Copiar e colar as duas funções no broser
// Realizar o comando
// document.getElementsByTagName('body')[0].onclick = p1.falar
// document.getElementsByTagName('body')[0].onclick = p2.falar

class Pessoa {
    constructor(nome) {
        this.nome = nome //variavel passou a ser publica, uso do "this"
    }

    falar () {
        console.log(`Meu nome é ${this.nome}`)
        // console.log(`Meu nome é ${nome}`) -> Erro
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()