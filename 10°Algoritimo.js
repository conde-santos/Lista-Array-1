/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

let vetor = [12, 3, 45, 3, 67, 89, 3, 23, 78, 3];
let indices = [];

let numero = parseInt(prompt("Digite o número que deseja verificar no vetor:"));

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        indices.push(i);
    }
}

if (indices.length > 0) {
    alert(`O número ${numero} foi encontrado nos índices: ${indices}`);
} else {
    alert(`O número ${numero} não foi encontrado no vetor.`);
}
