var numero = 1
{
    let numero = 2
    console.log('dentro(let) =', numero)
}

console.log('fora(var) =', numero)

// let -> tem escopo de Bloco

var numero = 1
{
    let numero2 = 2 //procura no escopo interno e depois no mais abrangente
    console.log('dentro(let) =', numero)
}

console.log('fora(var) =', numero)