const valor = 'Global'

function minhaFuncao() {
    console.log(valor) 
}
// a constante valor foi achada no contexto superior
// por isso foi impresso o valor "Global"

function exec() {
    const valor = 'Local'
    minhaFuncao() //carrega o escopo lexico
}

exec()