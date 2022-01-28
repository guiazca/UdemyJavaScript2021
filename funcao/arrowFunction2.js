function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade) 
    }, 1000)
}

//arrow function, melhor para o uso do "this"
//contexto léxico, ou seja, onde ele foi escrito, dentro da funcao pessoa
new Pessoa