// class Pessoa {
//     constructor(nome) {
//         this.nome = nome //variavel passou a ser publica, uso do "this"
//     }

//     falar () {
//         console.log(`Meu nome é ${this.nome}`)
//         // console.log(`Meu nome é ${nome}`) -> Erro
//     }
// }

// const p1 = new Pessoa('João')
// p1.falar()
// não consegui fazer!!!!!!

function Pessoa(nome) {
        this.nome = nome //variavel passou a ser publica, uso do "this"

    this.falar  = function() {
        console.log(`Meu nome é ${this.nome}`)
        // console.log(`Meu nome é ${nome}`) -> Erro
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.nome) //tenho acesso ao nome


