/* 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado. */


const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 24]

function verificarNumerosPar(num){
    
    for(i = 0; i < num.length; i++){

        const par = num[i] % 2        
        if(par == 0){
            console.log(num[i])
        }

      
    }
}

verificarNumerosPar(numeros)