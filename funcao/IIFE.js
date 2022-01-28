// IIFE -> Immediately Invoked Function Expression

// Executao na hora
// Fora do escopo Global
(function () {
    console.log('Será executada na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

// Dentro do escopo global
console.log('Será executada na hora!')
console.log('Foge do escopo mais abrangente!')