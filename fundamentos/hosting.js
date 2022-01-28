// hosting é o içamento, vc declara a variavel (VAR) depois de chamar ela
// usando LET não funciona
console.log('a =', a)
var a = 2
console.log('a =', a)

// código original
var b
console.log('b =', b)
b = 2
console.log('b =', b)

// dentro da função
function teste(){
    console.log('c =', c)
    var c = 2
    console.log('c =', b)
}

teste()