const fs = require ('fs')
const caminho = __dirname + '/arquivo.json'

//sincrono.... não é interessante, trava o event loop

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host} : ${config.db.port}`)
})

// Para arquivo JSON
const config = require('./arquivo.json')
console.log(config.db)

// Ler Pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta')
    console.log(arquivos )
})
