function teste1(num) {
    if(num > 7) //sem chaves uma unica sentença de código
        console.log(num)

    console.log('Final') //javascrit igora identacao
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num >7);{ //cuidado com o ";" , não usar com as estruturas de controle 
    
        console.log(num)
    }
}

teste2(6)
teste2(8)