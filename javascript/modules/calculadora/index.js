import { createInterface } from 'readline';
import { soma, subtracao } from './operacoesMatematicas.js';

const leitor = createInterface({ // criando interface
    input: process.stdin, // indicando que o terminal será a entrada
    output: process.stdout // indicando que o terminal será a saída
});

leitor.question('Digite o primeiro número: \n > ', (numero1) => {

    leitor.question('Digite a operação: \n +: soma \n -:subtracao\ n > ', (operacao) => {

        leitor.question('Digite o segundo número: \n >', (numero2) => {

            const num1 = Number(numero1);
            const num2 = Number(numero2);

            let resultado = null;

            switch (operacao) {
                case '+':
                    resultado = soma(num1,num2); break;
                case '-':
                    resultado = subtracao(num1,num2); break;
                default:
                    console.log('Operação inválida'); break;
            }

            if (resultado != null) {
                console.log('O resultado da operação é:', resultado);
            }

            leitor.close();
        });
    });
});
