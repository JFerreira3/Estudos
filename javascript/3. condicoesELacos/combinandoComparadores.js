const idade = 15;

const maiorDeIdade = idade >= 18;
const possuiCNH = false;

// AND
const podeDirigir = maiorDeIdade && possuiCNH;
console.log('Pode dirigir? ', podeDirigir);

// OR
const podeViajarSozinha = maiorDeIdade || possuiCNH;
console.log('Pode viajar sozinha? ', podeViajarSozinha);

// NOT
const precisaDeAcompanhante = !maiorDeIdade;
console.log('Precisa de acompanahnte para viajar? ', precisaDeAcompanhante);