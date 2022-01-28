Array.prototype.filter2 = function (callback) {
    let newArray = [];
    for(let i = 0; i < this.length ; i++) {
        if(callback(this[i], i. this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]
const eCaro = produto => produto.preco >= 500
const eFragil = produto => produto.fragil

const newArray = produtos.filter2(eCaro).filter2(eFragil)
console.log(newArray)