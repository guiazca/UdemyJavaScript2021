// Criar uma função que receba um array de números e retorne o menor número desse array.
// Exemplos:
// menorNumero([10, 5, 35, 65]) // retornará 5
// menorNumero([5, -15, 50, 3]) // retornará -15

const menorNumero = function(array) {
    let menor = array[0]
    array.forEach(e => {
        if(e <= menor){
            menor = e
        }
    })
    return menor
}
console.log(menorNumero([5, -15, 50, 3]))