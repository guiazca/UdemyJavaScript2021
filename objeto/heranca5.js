console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([0,1,2,3,4].first())
console.log(['a', 'b', 'c', 'd'].first())

String.prototype.toString = function () { //NÃO FAÇA ISSO
    return 'Lascou tudo' // SUBSTITUIR O QUE ESTÀ PRONTO
}

console.log('Escola Cod3r'.reverse())