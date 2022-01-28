const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 11 22 9 3', function(){
    console.log("Tarefa 1", new Date().getSeconds())
})
//Vamos entender
// */5 -> a cada 5 segundos ou só 5, no segundo 5
// * -> Qualquer minuto
// * -> Qualquer Hora
// * -> Qualquer dia do mês
// * -> Qualquer Mês
// * -> Qualquer dia da semana
// 6 -> Minuto 6
// 11 -> Horas
// 22 -> Dia do Mês
// 9 -> Setembro
// 3 -> Quarta-feira (começa com 0)

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelamento Tarefa 1!')
}, 20000)

// setImmediate -> Dispara imediatamente
// setInterval -> Dispara uma função de tempos em tempos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] // 0 - 6 -> Dias da semana
regra.hour = 11
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds())
})