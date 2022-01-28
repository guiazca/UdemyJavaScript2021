const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa quebrou o carro! remove o ultimo
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona 1 elemento
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona na primeira
console.log(pilotos)

// splice pode adicionar ou remover elementos

// adicionar -> Antes do indice 2
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3 ,1) //massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //o indice 4 não entra
console.log(algunsPilotos2)