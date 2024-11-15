/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/


let metasSemana = []

metasSemana.push('Jejum')
metasSemana[1] = prompt('Fale uma meta')
metasSemana.push('Alimentação melhor')

if(metasSemana[1] != 'exercício físico'){
    metasSemana[1] = 'praticar esportes'
    alert(metasSemana)
} else{
    alert(metasSemana)
}