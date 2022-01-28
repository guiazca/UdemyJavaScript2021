// Uma factory retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}

// Vai para o arquivo instanciaCliente.js
