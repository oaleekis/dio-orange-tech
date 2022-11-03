/* 1) Crie um programa que dado um número imprima a sua tabuada. */



function imprimirTabuada(numero){
    const tabuadas = []

    for (let i = 0; i <= 10; i++){
        tabuadas.push(numero * i)
        console.log(`${i} X ${numero} = ${tabuadas[i]}`)
    }
  
}

imprimirTabuada(3)