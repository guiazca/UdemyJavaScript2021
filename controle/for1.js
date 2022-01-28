let contador = 1
while(contador <= 10) {
    // contador++ -> Da erro porque ele soma antes    
    console.log(`O Valor do Contator é ${contador}`)
    contador++
}

for (let i = 1; i <=10; i++) {
    console.log(`O Valor do i é ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7 ]

for(let i = 0; i < notas.length; i++) {
    console.log(`notas = ${notas[i]}`)
}