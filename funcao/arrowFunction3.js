let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //objeto global
comparaComThis(this) // o "this" não é o "this"

const obj = {}
comparaComThis = comparaComThis.bind(obj)
//depois da linha superior
//sempre que chamar a funcao, vou estar chamano o objeto
//não aponta mais para o escopo global, resultado False
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) //pode acessar dentro de um arquivo do node, a partir do uso do this
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //Arrow function é mais forte caraio!!!
comparaComThisArrow(module.exports)