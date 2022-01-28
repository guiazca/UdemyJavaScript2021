// operador ... rest(juntar)/spread(espalhar)
// usar rest com parametros de função

// usar spread com objeto
const funcionarios = { nome: 'Maria', salario: 12348.99}
const clone = { ativos: true, ...funcionarios }
console.log(clone)
console.log(funcionarios)
console.log(clone === funcionarios)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Maria']
const grupoFinal = [ 'Ana', 'Carla', ...grupoA, 'Carla Gloria']
console.log(grupoFinal) 