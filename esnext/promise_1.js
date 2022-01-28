const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    resolve (['Ana', 'Bia', 'Calos', 'Daniel']) //uma promisse retorna apenas 1 valor, use Objeto para mais valores, array 
})  
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)