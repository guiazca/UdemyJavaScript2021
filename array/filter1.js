const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return false
}))

console.log(produtos.filter(function(p) {
    return true
}))

console.log(produtos.filter(function(p) {
    return p.fragil === true
}))

console.log(produtos.filter(function(p) {
    return p.preco > 1000
}))

console.log(produtos.filter(function(p) {
    return (p.preco > 500 && p.fragil === true)
}))

const eCaro = p => p.preco >= 500
const eFragil = p => p.fragil === true

const newArray = produtos.filter(eCaro).filter(eFragil)
console.log(newArray)