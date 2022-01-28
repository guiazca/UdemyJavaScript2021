// sem promisse -> usando CallBack
// as funcções são amarradas porque sei o que quero buscar, o que vai chegar
// funções flexiveis, são mais abertas
// callback Hell -> uma callback dentro da outra
const http = require('http')

const getturma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = '' //os dados chegam aos poucos, por isso preciso acumular essa "variável"
        res.on('data', dados =>{
            resultado += dados
        })
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes =[]
getturma('A', alunos => {
    nomes = nomes.concat(alunos.map(a=> `A: ${a.nome}`))
    getturma('B', alunos => {
        nomes = nomes.concat(alunos.map(a=> `B: ${a.nome}`))
        getturma('C', alunos => {
            nomes = nomes.concat(alunos.map(a=> `c: ${a.nome}`))
            console.log(nomes)
        })
    })
})