const forEach2 = function (array) {
    for(let i = 0; i < array.length ; i++) {
        console.log(`${i + 1}) ${array[i]}`)
    }
   
} 
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

forEach2(aprovados)

Array.prototype.forEach3 = function (callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i],i, this);
    }
} 

aprovados.forEach3(function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})