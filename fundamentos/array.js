const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores)
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])

valores[10] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') //inserir valores no array, inseri no primeiro indice vazio
console.log(valores)  

valores.pop()
console.log(valores) //retira a ultimo valor do array
delete valores[0] //deleta o valor do indice
console.log(valores)

console.log(typeof valores)