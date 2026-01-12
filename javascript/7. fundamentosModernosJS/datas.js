const agora = new Date();

console.log(agora);
console.log('Ano:', agora.getFullYear());
console.log('Mês 0-11:', agora.getMonth());
console.log('Dia do MÊs:', agora.getDate());
console.log('Hora:', agora.getHours());
console.log('minutos:', agora.getMinutes());

const nascimento = new Date('1999-11-20:00:00.000Z');
console.log(nascimento);

console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-BR'));