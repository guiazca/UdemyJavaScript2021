Array.prototype.map2 = function (callback) {
    let newArray = [];
    for(let i = 0; i < this.length ; i++) {
        newArray.push(callback(this[i], i. this))
    }
    return newArray
}

const carrinho2 = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho2.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)