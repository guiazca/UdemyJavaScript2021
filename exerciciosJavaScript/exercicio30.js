// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
// num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
// com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
// Exemplo:
// recerberMelhorEstudante({
//     Joao: [8, 7.6, 8.9, 6], // média 7.625
//     Mariana: [9, 6.6, 7.9, 8], // média 7.875
//     Carla: [7, 7, 8, 9] // média 7.75
//     }) // retornará { nome: "Mariana", media: 7.875 }

const recerberMelhorEstudante = function(objeto) {
    let objetoResultado = {}
    let getMelhor = 0
    let getNome = 0
    Object.entries(objeto).forEach(e => {
        const resultado = e[1].reduce(function(acumulador, atual) {
            return (acumulador + atual)
        })
        e[1] = (resultado / e[1].length)        
        if(e[1] > getMelhor) {
            getMelhor = e[1]
            getNome = e[0]
        }
        objetoResultado = { nome: getNome, media: getMelhor}    
   })  
   console.log(objetoResultado)
}
recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }) // retornará { nome: "Mariana", media: 7.875 }