const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})
fabricantes.forEach(fabricante => console.log(fabricante))

//o evento é para cada um dos elementos ele dispara a função
// a função for each, percorre o array
// em cada elemento ele dispara a funcao