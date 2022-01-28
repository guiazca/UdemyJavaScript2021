// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A

let notas = [1,2,3,4.9,5,6,7,8,9,10]

notas.forEach(function() {
    for(let i = 0; i < notas.length ; i++) {
        if(notas[i] < 5) {
            console.log(notas[i], "D")
        } else if(notas[i] < 7) {
            console.log(notas[i], "C")
        } else if(notas[i] < 9){
            console.log(notas[i], "B")
        } else {
            console.log(notas[i], "A")
        }
    }
})

