/*
    Tabela Verdade
    Operador Binário -> "e"
    v e v -> v
    v e f -> f
    f e f -> f
    f e v -> f

    Operador Binário -> "ou"
    v ou v -> v
    v ou f -> v
    f ou v -> v
    f ou f -> f

    "Ou exclusivo -> xor"
    Para ser verdade tem que ser diferente
    Operador Binário -> "xor"
    v xor v -> f
    v xor f -> v
    f xor v -> v
    f xor f -> f

    Negação
    Operador Unário
    !v -> f
    !f -> v
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
    // objeto, sem valor, a chave o nome do valor
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

