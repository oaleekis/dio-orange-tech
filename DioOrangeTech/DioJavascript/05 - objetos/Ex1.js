/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */


class carro {
    marca
    cor
    gastoPorKm

    constructor(marca, cor, gastoPorKm){
        this.marca = marca
        this.cor = cor
        this.gastoPorKm = gastoPorKm
    }

    gastoEmReais(quilometrosRodado, precoCombustivel){
        if (quilometrosRodado > 0){
           const litros = quilometrosRodado / this.gastoPorKm
            const valor = litros * precoCombustivel
            console.log(`Você irá gastar R$ ${valor.toFixed(2)} para rodar ${quilometrosRodado}Km`)
        }

    }
}

const ferrari = new carro('Ferrari', 'Vermelho', 7)
const uno = new carro('Fiat', 'Branco', 16)
const cg = new carro('Honda', 'Preto', 23)

ferrari.gastoEmReais(100, 4.98)
uno.gastoEmReais(100, 4.98)
cg.gastoEmReais(100, 4.98)