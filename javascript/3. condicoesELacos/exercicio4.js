// contar quantos numeros pares e quantos numeros impares há entre 0 e 100

let totalNumerosPares = 0;
let totalNumerosImpares = 0;

for (contador = 0; contador <= 100; contador++) {
    if (contador % 2 == 0) {
        totalNumerosPares++;
    } else {
        totalNumerosImpares++;
    }
}

console.log('Numeros pares', totalNumerosPares);
console.log('Numeros ímpares', totalNumerosImpares);