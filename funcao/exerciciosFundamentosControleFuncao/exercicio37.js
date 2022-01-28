// 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.

let paResultado = []
let paSoma = 0
let pgSoma = 0

const pa = function(n, a1, r) {
    paResultado.push(a1)
    for(let i = 0; i < (n-1); i++){
        paResultado.push(paResultado[i]+r)
    }
    paSoma = ((a1 + paResultado[paResultado.length - 1])*n) / 2
    console.log(paResultado, paSoma)
}

pa(2,1, 3)

pgResultado = []
pgSoma
const pg = function(n, a1, r) {
    for (let i = 1; i <= n; i++){
        tempo = i-1
        pgResultado.push(a1*Math.pow(r,(tempo)))
    }
    pgSoma = (a1*(Math.pow(r,n) - 1))/ (r - 1)
    console.log(pgResultado , pgSoma)
}

pg(5, 3, 4)