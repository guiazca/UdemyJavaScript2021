let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a 
//1 unico parematro , não precisa de parenteses
// retorno implicito
// funcoes especificas , facil reutilizacao, especialista, sintaxe reduzida

console.log(dobro(Math.PI.toFixed(2)))

let ola = function () {
    return 'Olá'
}

ola = () => 'Ola' // não possui parametros, forma padrão!!!!!
ola = _ => 'Olá' //possui parametro "_", mas pode ignorar
console.log(ola())
 
