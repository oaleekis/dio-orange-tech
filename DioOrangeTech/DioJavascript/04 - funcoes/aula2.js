function meuNome(nome) {
    console.log('Meu nomé é ' + nome)
}

meuNome('Alexsander\n')

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade')
    } else if (idade < 18 && idade > 0) {
        console.log('Você é menor de idade')
    } else {
        console.log('Idade Invalida')
    }
}

verificarIdade(18)
verificarIdade(17)
verificarIdade(0)

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)))
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

console.log(aplicarDesconto(100, 10))
console.log(aplicarJuros(100, 10))