// Minha versão
function criarProdutos (nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 5
    }
}

const detergente = new criarProdutos ("Detergente", 20)
console.log(detergente)

console.log(criarProdutos("detergente", 10))

//versão Professor
function criarProduto(nome, preco){
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Ipad', 1199.49))