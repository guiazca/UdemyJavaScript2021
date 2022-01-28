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

// Recurso ES8
// Objetivo de simplificar o uso de promises...

let obterAlunos = async () => { //função marcada com async
    const ta = await getturma('A') // poderá usar o await
    const tb = await getturma('B')
    const tc = await getturma('C')
    return [].concat(ta, tb, tc)
} // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

    