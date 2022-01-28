const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// forEach
// Parametro 1 -> Valor
// Parametro 2 -> Indice
// Parametro 3 -> o proprio Array
aprovados.forEach(function(nome, indice, array,x) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    console.log(x)
})

aprovados.forEach(nome => console.log(nome))

console.log("-----")

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)