const nome = 'Rebeca'
const concatenacao = "Olá " + nome + "!"
const template = `
    Olá
    ${nome}!`
console.log(concatenacao)
console.log(template)
console.log(concatenacao , template)

//expresões
console.log(`1 + 1 = ${1 + 1}`) // soma dentro do dolar e chaves

const up = texto => texto.toUpperCase() //Arrow Function, transforma em letra maiuscula UpperCase
console.log(`Ei...${up('cuidado')}!`) //chamei a funcao dentro do template string

