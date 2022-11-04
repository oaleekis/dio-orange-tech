/* Neste desafio, receba um número inteiro N, 
calcule e imprima o somatório de todos os números de N até 0. */

let n = 10

function somatorio(n) {
    let soma = 0
    const listaDeNumeros = []

    for (let i = n; i > 0; i--) {
        listaDeNumeros.push(i)
    }

    for (let i in listaDeNumeros) {
        soma += listaDeNumeros[i]
    }

    return soma
}

console.log(somatorio(n))