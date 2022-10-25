function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc){
    if (imc < 18.5 ){
        return 'Você está a baixo do peso'
    } else if (imc >= 18.5 && imc < 25 ){
        return 'Você está com o peso normal'
    } else if (imc >= 25 && imc < 30 ){
        return 'Você está acima do peso'
    } else if (imc >= 30 && imc < 40 ){
        return 'Você está em grau de obesidade'
    } else if (imc >= 40 ){
        return 'Você está em grau de obesidade grave'
    } else{
        return 'Imc Invalido'
    }
}

(function (){
const peso = 75
const altura = 1.75

const imc = calcularImc(peso, altura)
console.log(classificarImc(imc))
})()

