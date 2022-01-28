// usando CallBack

const http = require('http')

const getturma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = '' //os dados chegam aos poucos, por isso preciso acumular essa "variável"
            res.on('data', dados =>{
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
        })
    })
}

// let nomes =[]
// getturma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a=> `A: ${a.nome}`))
//     getturma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a=> `B: ${a.nome}`))
//         getturma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a=> `c: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getturma('A'), getturma('B'), getturma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    
getturma('D').catch(e =>console.log(e.message))