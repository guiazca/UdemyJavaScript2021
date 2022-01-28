// Boa prática
// Trabalhar com dados homogeneos
// const Array = [ 1, 2, 3]
// const Array = [ "string", "string1"]
// Não é interessante trabalhar com array com vários tipos:
// const Array = [1, "string", true]
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') //não recomendado
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados.length)

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //altera o proprio array
console.log(aprovados)

delete aprovados[1] //coloca undefined
console.log(aprovados[1])
console.log(aprovados[2])

// A partir do elemento 1, deleta 1 elemento
aprovados = ['Bia', 'Calor', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)

// A partir do elemento 1, deleta 2 elementos
aprovados = ['Bia', 'Calor', 'Ana']
aprovados.splice(1, 2)
console.log(aprovados)

// A partir do elemento 1, deleta 2 e adiciona 2 elemento
aprovados = ['Bia', 'Calor', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)

// A partir do elemento 1, não deleta e adiciona 2 elementos
aprovados = ['Bia', 'Calor', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)

// A partir do elemento 1, deleta 1 e adiciona 2 elementos
aprovados = ['Bia', 'Calor', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)

//Array
//Estrutura dinamica
// Cresce e diminui dinamicamente
//Estrutura indexada a partir do elemento [0]
// Array é um objeto
// Mesmo o array sendo constante, é possivel alterar seus indices
// array constante aponta para um endereço de memoria que não pode ser alterado