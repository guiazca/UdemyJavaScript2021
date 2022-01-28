// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

const compara = function (altura1, taxa1, altura2, taxa2) {
    let ano = 0
    if(altura1 > altura2 && taxa2 > taxa1) {
        while(altura1 > altura2) {
            altura1 += (ano*taxa1)
            altura2 += (ano*taxa2)
            ano++
           } 
    } else if(altura2 > altura1 && taxa1 > taxa2) {
        while(altura2 > altura1) {
            altura1 = altura1 + (ano*taxa1)
            altura2 = altura2 + (ano*taxa2)
            ano++
           }        
    } else if((altura1 > altura2 && taxa2 < taxa1)||(altura2 > altura1 && taxa1 < taxa2)){
        if(altura1>altura2) {
            console.log("A Criança 1 não irá alcançar a criança 2")
        } else {
            console.log("A Criança 2 não irá alcançar a criança 1")
        }
    } else if(altura1 === altura2) {
        console.log("As crianças tem a mesma altura")
    }
    console.log(`Criança menor ultrapassará a maior em ${ano} ano(s)`)
}

compara(1,2,2,1)
// 4 - 5
// 6 - 6
// 8 - 7