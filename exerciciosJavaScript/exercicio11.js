// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:
// Exemplos:
// receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
// receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

const receberPrimeiroEUltimoElemento = function(array) {
    let newArray = []
    newArray[0] = array[0]
    newArray.push(array[array.length - 1]) 
    console.log(newArray)
}

receberPrimeiroEUltimoElemento([10, 20, 220, 189, 190, 839, 40])