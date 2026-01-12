for (let contador = 0; contador <= 5; contador++) {
    console.log('Número atual:', contador)
}

const palavra = 'calopsita';
for (let contador = 0; contador < palavra.length; contador++) {
    console.log(palavra[contador]);
}

for (const caractere of palavra) {
  console.log(caractere);
}


// for com duas variáveis:

for (let i = 0, j = 10; i < j; i++, j--) { 

console.log(`i: ${i}, j: ${j}`); 

} 

// Resultado: 

// i: 0, j: 10 

// i: 1, j: 9 

// i: 2, j: 8 

// i: 3, j: 7 

// i: 4, j: 6 