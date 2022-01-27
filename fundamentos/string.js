const escola = "Cod3r"

console.log(escola.charAt(4)) // Letra no indice 4, começa com 0
console.log(escola.charAt(10)) //não retorna nada pois não existe
console.log(escola.charCodeAt(3)) //tabela asc II Unicode
console.log(escola.indexOf('C')) //Retorna o valor do indice da letra C

console.log(escola.substring(1)) // Retorna o valor a partir do indice 1
console.log(escola.substring(0,3)) //O primeiro e o ultimo indice - do 0 ao 3, sem incluir o indice final

console.log('Escola '.concat(escola).concat("!")) //Concatenar Strings
console.log("Escola " + escola + "!") //Concatenar Strings
console.log(escola.replace(3, "e")) //substitui o valor 3 pelo valor e

console.log('Ana,Maria,Pedro'.split(","))
