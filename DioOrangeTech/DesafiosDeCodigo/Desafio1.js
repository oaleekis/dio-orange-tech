/* Dado um número A e o seu limite N, 
encontre a soma de todos os múltiplos A até o seu limite N. */

let a = 3
let n = 18
let soma = 0

const listaDeNumeros = []


for (let i = a; i <= n; i++) {

    if (i % a === 0) {
        listaDeNumeros.push(i)
    }
}

for (let i in listaDeNumeros) {
    soma += listaDeNumeros[i]
}


console.log(soma)