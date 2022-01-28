// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função
// Tem memória do local de sua origens
// Acessa Local, logo acima dela

// Contexto léxico em ação

const x = 'Global'

function fora () {
    const x = 'Local'
    function dentro () {
        return x
    }
    return dentro
}

const minhaFuncao = fora ()
console.log(minhaFuncao())