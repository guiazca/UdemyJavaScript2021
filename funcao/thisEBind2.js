function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa 

function Pessoa2() {
    this.idade = 0

    const self = this //o this, fica associado a constante, não importa onde ela esteja
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa 