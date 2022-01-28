// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
// identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
// de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
// Exemplos:
// buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
// buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
array1 = ["programação", "mobile", "profissional", 'tremproblema']

const buscarPalavrasSemelhantes = function(palavra, array) {
    let teste
    let arrayFinal = []
    array.forEach(function(e) {
         teste = e.split(palavra)
        if(Object.keys(teste).length !== 1) {
            arrayFinal.push(e)
        }
    })
    return arrayFinal
}
console.log(buscarPalavrasSemelhantes('pro', array1))