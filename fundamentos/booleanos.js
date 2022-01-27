let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)
console.log(typeof isAtivo)
console.log(!!isAtivo) //! -> Negação !! -> Negação duas vezes gera o valor verdaeiro
console.log(!isAtivo) // ! -> Negação -> Falso

console.log(!true) //false
console.log(!false) //true
console.log(!!true) //true
console.log(!!false) // false

console.log('os verdadeiros')
console.log(!!13)
console.log(!!-1)
console.log(!!' ') // espaço vazio
console.log(!!'texto') 
console.log(!![]) //array
console.log(!!{}) //objeto
console.log(!!Infinity)
// o valor resolvido da atribuição é verdadeiro, então é verdadeiro
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 33))
console.log(!!(isAtivo = ' '))

console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
// o valor resolvido da atribuição é falso, então é falso
console.log(!!(isAtivo = false))
console.log(!!(isAtivo = null))
console.log(!!(isAtivo = NaN))
console.log(!!(isAtivo = ''))
console.log('pra finalizar...')
console.log(!!(''|| null || 0 || ' ')) // Simbolo "ou" || -> uma verdade expressão verdadeira
console.log((''|| null || 0 || 'epa')) // pega o primeiro ou o unico valor verdeiro
console.log((''|| null || 0 || '' || 123)) // pega o primeiro ou o unico valor verdeiro  

let nome = ''

console.log(nome || 'Desconhecido')

nome = "Guilherme"

console.log(nome || 'Desconhecido')



