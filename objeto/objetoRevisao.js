const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica' //não usar espaços
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
        },
        condutores: [{ //Array de objetos
            nome: 'Junior',
            idade: 19
        }, {
            nome:'Ana',
            idade: 42
        }],
      

        calcularValordoSeguro: function() {
    }
}

carro.proprietario.endereco.numero = 1000 //usado quando voce conhece
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' //usado quando voce não conhece e recebe uma string
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValordoSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) //testar para acessar