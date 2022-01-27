//Objeto em javascript não é um objeto JSON
const prod1 = {} //par de chaves forma literal de criar objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = { //objeto é um conjunto de chave e valor
    nome: 'Camisa Polo', // o valor pode ser uma string, um numero, uma função , um objeto
    preco: 79.90,
}

prod2['Desconto Absurdo'] = 10 //posso adicionar por fora

console.log(prod2)

const prod3 = { //objeto é um conjunto de chave e valor
    nome: 'Camisa Polo', // o valor pode ser uma string, um numero, uma função , um objeto
    preco: 79.90,
    obj: { //'obj' é unico dentro de prod
        blabla: 1,
        obj: { //'obj' é unico dentro de obj
            blabla2: 2,
        }
    }
}

console.log(prod3)