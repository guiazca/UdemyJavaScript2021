// console.log(global)
// cuidado ao mexer no objeto global, usar em excessão
global.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
}

global.MinhaApp2 = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})