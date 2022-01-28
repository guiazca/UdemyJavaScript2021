const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) //this, acessa o objeto Pessoa, que é o dono da função falar
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO
//dentro da funcao falar, não existe o objeto pessoa, 

const falarDePessoa = pessoa.falar.bind(pessoa) //.bind amarrar o objeto pessoa a const , sempre será chamado o objeto pessoa
//tudo por conta do "this" resolver para a pessoa
falarDePessoa()

// não altera a pessoa
const falar2 = pessoa.falar
falar2()