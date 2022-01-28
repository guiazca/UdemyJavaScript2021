// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

const aumento = function(plano, salario) {
    switch (plano) {
        case 'a':
            salario = (salario*1.1).toFixed(2)
            break
        case 'b':
            salario = (salario*1.15).toFixed(2)
            break
        case 'c':
            salario = (salario*1.2).toFixed(2)
            break
        default:
            salario = "Plano Inexistente"
            break            
    }
    console.log(salario)
}

aumento('c', 100)