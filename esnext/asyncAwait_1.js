function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
} // promise espera 5 segundos

async function retornaValorRapido () {
    return 20 // promise resolvida na hora
}

// Por trás do asyn/await tem que ter uma promise
// o await espera a promise ser resolvido para continuar o condigo

async function executar() {
    let valor = await retornaValorRapido() 

    await esperarPor(2000)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(2000)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(2000)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

// executar().then(console.log)

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()