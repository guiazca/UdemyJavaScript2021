let a = 7;
let b = 94;
let c = 10;
let d = 20;
let f = 30;
let g = 40;
let temp;

temp = a;
a = b;
b = temp;

// depois da troca... a = 94 e b = 97
console.log(a);
console.log(b);
// Usando recurso javascript
[f, g] = [g, f];
console.log(f);
console.log(g);
