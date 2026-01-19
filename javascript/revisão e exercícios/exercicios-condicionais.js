// OP CONDICIONAL E SWITCH

// Verificar se estudante receberá bônus de nota
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas

const nome = "Roberta";
const nota = 8;
const faltas = 3;

const recebeBonus = (nota >= 8) && (faltas <= 2)
    ? `${nome} recebe bônus`
    : `${nome} não recebe bônus`;

console.log(recebeBonus);


// criar um fluxo que identifica o tipo de usuário e comunica de acordo.
// ex: usuário free tem acesso limitado ao app
//     usuário premium tem acesso a todas as funções
//     usuário super premium tem acesso total e bônus especiais

const user = 'premium';

switch (user) {
    case 'free':
        console.log('acesso limitado');
        break;
    case 'premium':
        console.log('aceddo total ao app');
        break;
    case 'super premium':
        console.log('acesso total ao app e bônus');
        break;
    default:
        console.log('tipo de user desconhecido');
        break;    
        
}










