const a = 1
const b = 2
const c = 3

obj1 = { a: a, b: b, c: c } //forma antiga
obj2 = { a, b, c } // forma nova, sem mudar o nome do atributo
obj3 = { a, altera: b, c} //mudando o nome do atributo
console.log(obj1)
console.log(obj2)
console.log(obj3)

const nomeAttr = 'nota' //variável/constante
const valorAttr = 7.87 //variável/constante

const obj4 = {}
obj4[nomeAttr] = valorAttr
console.log(obj4)

const obj5 = {[nomeAttr]: valorAttr}
console.log(obj5)

const obj6 = {
    funcao1: function(){ //forma Antiga
        // ...
    }, 
    funcao2() { //forma nova
        //...
    }
}
console.log(obj6)