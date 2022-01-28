// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
// Exemplos:
// segundoMaior([12, 16, 1, 5]) // retornará 12
// segundoMaior([8, 4, 5, 6]) // retornará 6

const segundoMaior = function(array) {
    var numArray = array;
    numArray.sort(function(a, b) {
    return a - b;
    });
    console.log(numArray[numArray.length - 2]);
}
segundoMaior([8, 4, 5, 6])