// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

const valorTotal = function (mes) {
    let mensalidade = 100
    if(mes <= 1) {
        console.log(mensalidade)
    } else if (mes <= 12){
        let total =  (mensalidade * Math.pow((1+ 0.05), mes)).toFixed(2)
        console.log(total)
    } else {
        console.log("mes inválido")
    }
}

valorTotal(12)