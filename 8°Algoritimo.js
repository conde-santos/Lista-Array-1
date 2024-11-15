/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/

let tarefasLimpeza = []

tarefasLimpeza[0] = prompt('Primeira:')
tarefasLimpeza[1] = prompt('Segunda:')
tarefasLimpeza[2] = prompt('Terceira:')
tarefasLimpeza[3] = prompt('Quarta:')

tarefasLimpeza.splice(2, 1, )
tarefasLimpeza[1] = 'Limpar banheiro'

alert(tarefasLimpeza)