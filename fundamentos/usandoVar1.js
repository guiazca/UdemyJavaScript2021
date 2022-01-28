{
    {
        {
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera) //variavel dentro de um bloco que não seja uma funcao fica visivel

function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local) -> não pega o valor pois está fora do escopo da função

// Variavel Global -> visivel pra todo mundo
// Variavel dentro do escopo da função -> visivel dentro da função


