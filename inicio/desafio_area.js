// PI * raio * raio

const PI = Math.PI //Math.PI é igual ao valor de PI
console.log(PI)
let raio = 10 
let area = PI * raio * raio
let area2 = Math.PI * raio * raio
let area3 = Math.PI * Math.pow(raio, 2) //Math.pow(base, expoente)

console.log("O Valor da área da circuferencia é: "+ area + "m²")
console.log("O Valor da área da circuferencia é: "+ area2 + "m²")
console.log("O Valor da área da circuferencia é: "+ area3 + "m²")

console.log("O Valor da área da circuferencia é: "+ area.toFixed(2) + "m²")
console.log("O Valor da área da circuferencia é: "+ area2.toFixed(3) + "m²")
console.log("O Valor da área da circuferencia é: "+ area3.toFixed(4) + "m²")


