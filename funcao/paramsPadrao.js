// estrategia 1) para gerar valor padrao
function soma1 (a, b, c) {
    a = a || 1 //se "a" for falso, ele utiliza o valor "1"
    b = b || 1 //se a primeira parte for verdadeira, ele não olha para a segunda
    c = c || 1 // se voce criar uma variavel dentro de uma funcao, esta é a melhor estratégia
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0 ,0))
//o Valor "0" retorna falso, a funcao utiliza o valor 1

// estratégia 2), 3) e 4) para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //"!=" ele funciona com o nulo
    b = 1 in arguments ? b : 1 // b = "1" in... esse 1 é o indice, caso fosse a, seria "0" e c seria "3"
    c = isNaN(c) ? 1 : c //melhor estratégia, verifica se é número
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))


//valor padrão es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
