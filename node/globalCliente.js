require('./global')
// para utilizar em outros arquivos não precisa mais fazer isso
// não atribui a uma variavel pois ele já é o objeto global

console.log(global.MinhaApp.saudacao())
console.log(MinhaApp.saudacao()) //não precisa chamar o global
MinhaApp.nome = 'Eita!' // mudar em qualquer lugar!! CUIDADO!!!!
console.log(MinhaApp.nome)

MinhaApp2.nome = 'Eita!' // mudar em qualquer lugar!! CUIDADO!!!!
console.log(MinhaApp2.nome) //usando o Object.freeze() -> Não consegue mudar