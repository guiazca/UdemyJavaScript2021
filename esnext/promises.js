function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //Aceita apenas 1 parametro, OBJETO!!!!
        },segundos * 1000) 
    })
}

falarDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))

    //função .catch trata o erro!!!!