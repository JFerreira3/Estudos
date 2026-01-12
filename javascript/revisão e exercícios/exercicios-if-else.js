// IF/ELSE

// definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2;
const num2 = 4;
const operacao = 'soma';

if (operacao === 'soma') {
    console.log(num1 + num2);
} else if (operacao === 'multiplicacao') {
    console.log(num1 * num2);
} else {
    console.log('Operação não identificada');

}

// localizar o nível de bônus de acordo com a faiza salarial
// ex: $11000 e acima: 3% de bônus
// ex: $10999 a $7000: 5% de bônus
// ex: $6999 a $4000: 7% de bônus
// ex: $3999 para baixo: 9% de bônus


const salario = 2000;

if (salario >= 11000) {
    console.log('3% de bônus');
} else if (salario < 11000 && salario >= 7000) { 
    console.log('5% de bônus');    
} else if (salario < 7000 && salario >= 4000) { 
    console.log('7% de bônus');    
} else {
    console.log('9% de bônus');    
}