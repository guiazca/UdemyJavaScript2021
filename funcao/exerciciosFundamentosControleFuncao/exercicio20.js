// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

const notas = function(valor) {
    let print
    if(valor >= 100) {
        let result100 = Math.floor((valor/100))
        print = `${result100} notas de R$100. `        
        valor = valor - (result100 * 100)
    } 
    if(valor>=50) {
        let result50 = Math.floor((valor / 50))
        print = `${print}` + `${result50} notas de R$50. `
        valor = valor - (result50 * 50)
    } 
    if(valor>=10) {
        let result10 = Math.floor((valor / 10))
        print = `${print}` + `${result10} notas de 10. `        
        valor = valor - (result10 * 10)
    } 
    if(valor>=5) {
        let result5 = Math.floor((valor / 5))
        print = `${print}` + `${result5} notas de 5. `
        valor = valor - (result5 * 5)
    } 
    if(valor>=1) {
        let result1 = Math.floor((valor / 1))
        print = `${print}` + `${result1} notas de 1. `
    }
    console.log(print)
}

notas(387)
