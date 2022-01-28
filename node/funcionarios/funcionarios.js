const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
// axios -> um clientes htpp -> requisicoes de algo remoto
// https://github.com/axios/axios

const getChines = p => p.pais === "China"
const getMulher = p => p.genero === "F"

axios.get(url).then(response => {
    const funcionarios = response.data
    const maior = funcionarios.filter(getChines).filter(getMulher).map(a => a.salario).reduce(function(acumulador, atual) {
        if(acumulador > atual) {
            acumulador = atual
        }
        return acumulador
    })
    console.log(funcionarios.filter(p => p.salario === maior))
    
})

console.log("Versão professor")

const chineses = f => f.pais === "China"
const mulheres = f => f.genero === "F"
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
        console.log(func)  
})
