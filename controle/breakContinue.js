const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break //não atua no bloco IF, atua em outro bloco mais próximo, no caso o "FOR"
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if (y == 5) {
        continue //vai interromper a repetição atual e vai pra pŕoxima, age no "FOR ou WHILE"
        //interrompe no indice 5 e continua no 6
    }
    console.log(`${y} = ${nums[y]}`)
}

//não usar isso, desestruturado, mal organizado falta de elegancia
//quebra em pequenas funções
externo: //Rótulo
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) {
            break externo
            
        }
        console.log(`Par = ${a}, ${b}`)
    }
}