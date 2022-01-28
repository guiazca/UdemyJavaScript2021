// 6) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos

const aplicacaoSimples = function (inicial, juros, tempo) {
    const jurosSimples = inicial * juros * tempo
    return console.log(jurosSimples)
}

const aplicacaoComposta = function (inicial, juros, tempo) {
    const jurosCompostos = inicial * Math.pow((1+ juros), tempo)
    return console.log(jurosCompostos.toFixed(2))
}

aplicacaoSimples(3, 4, 5)
aplicacaoComposta(300, 0.02, 3)