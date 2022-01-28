// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

let string1 = 'ythka'
let string2 = 'htythsdglkalkxm'

const testeString = function (string1, string2) {
    let Arrayspring1 = string1.split("")
    let Arrayspring2 = string2.split("")
    let Arrayspring1Length = Arrayspring1.length
    let Arrayspring2Length = Arrayspring2.length
    let teste = []
    let resultado
    if(Arrayspring1Length <= Arrayspring2Length) {
        for(let i = 0; i < Arrayspring1Length; i++) {
            for(let n = 0; n <Arrayspring2Length; n++){
                if(Arrayspring1[i] === Arrayspring2[n]) {
                    teste.push(true)
                    break
                } 
            }
        }
    } else {
        for(let i = 0; i < Arrayspring2Length; i++) {
            for(let n = 0; n <Arrayspring1Length; n++){
                if(Arrayspring2[i] === Arrayspring1[n]) {
                    teste.push(true)
                    break
                } 
            }
        }
    }
    if((teste.length === Arrayspring1Length) || (teste.length === Arrayspring2Length)) {
        resultado = true
    } else {
        resultado = false
    }
    console.log(`Resultado é ${resultado}`)
}

testeString(string1, string2)