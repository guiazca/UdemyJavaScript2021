console.log(typeof Object)
console.log(typeof new Object)
console.log(typeof new Object())

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)
console.log(typeof new Cliente())

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)
console.log(typeof new Produto())

// A função define a estrutura do objeto gerado com o new
// Instanciar uma função e chamar a função construtora
//Exemplo retirado do perguntas e respostas
function Funcionario(nome, cargo, salario) {
    this.nome = nome
    this.cargo = cargo
    this.salario = salario
}
 
const funcionario1 = new Funcionario('Ana Silva' , 'Analista de TI', 8400)
const funcionario2 = new Funcionario('Pedro Mesquita' , 'Gerente', 15600)
const funcionario3 = new Funcionario('Rafael Souza' , 'Contador', 10512.50)

console.log(funcionario1)
console.log(funcionario2)
console.log(funcionario3)
console.log(funcionario1.nome)
console.log(funcionario1.cargo)
console.log(funcionario1.salario)
console.log(typeof funcionario1)