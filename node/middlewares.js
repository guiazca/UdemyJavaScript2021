// middleware pattern (chain of responsability)

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}
const ctx = {}

exec(ctx, passo3, passo2, passo1) // O passo 3, não tem next, não aparece os proximos passos
console.log(ctx)

const ctx2 = {}

exec(ctx2, passo2, passo1, passo3)
console.log(ctx2)

const ctx3 = {}

exec(ctx3, passo2)
console.log(ctx3)