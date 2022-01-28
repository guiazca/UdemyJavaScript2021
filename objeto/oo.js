// CÓDIGO NÃO EXECUTÁVEL

// Antes da  OO ->  Procedural
// um prodimento recebe valores e manipula dados
processamento(valor1, valor2, valor3)

//OO
objeto = {
    valor,
    valor2,
    valor3,
    processamento() {
        //...
    }
}

objeto.processamento() //Foco passou a ser o objeto

//Principios importantes:
//1. Abstração
//Trazer o objeto do mundo real para dentro do sistema, Carro por exemplo
// não faz sentido, função acelerar, para um fiscal do DETRAN
// PLACA, RENAVAM..
//2. Encapsulamento
    //muda a implementação interna, é mais facil que mudar a interface
    //um objeto que mostra tudo é mais facil de dar erro, quando mais dependencia pior
//3. Herança (prototype)
    //re-uso-> compor objeto por objetos menores
    // Carro -> motor -> peças
    // Relação É um...
    // priorize a composição em relação da herança
//4. Poliformismo
    //multiplas formas, conceito genérico
    // Celular -> Iphone, Samsung
