const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)


const [n10, , n13, , n15, n16 = 0] = [10, 7, 9, 8, 20, 30]
console.log(n1, n3, n5, n6)

//criando um array, 
//ignorando o primeiro elemento
// o segundo elemento é outro array
// ignorando o primeiro elemento do segundo array
const [, [, nota]] = [[, 8,8], [9,6,8]]
console.log(nota)
