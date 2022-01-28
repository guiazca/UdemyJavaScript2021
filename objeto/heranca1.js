const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.prototype) //prototype faz parte de Object
console.log(ferrari.__proto__) //quem é o objeto PAI !!!! _ _ proto _ _
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(ferrari.__proto__ === volvo.__proto__)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object)
console.log(typeof MeuObjeto)
console.log(Object.prototype)
console.log(MeuObjeto.prototype)

