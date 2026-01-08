const frutas = ['maçã', 'banana', 'goiaba'];

const maisFrutas = ['uva', 'morango', 'kiwi'];

const clone = [...frutas];
const todasAsFrutas = [...frutas, ...maisFrutas];

frutas.push('Pitanga');

// pegas primeiras propriedades do array
const [primeira, segunda, ...restante] = todasAsFrutas;
console.log(primeira);
console.log(segunda);
console.log(restante);




