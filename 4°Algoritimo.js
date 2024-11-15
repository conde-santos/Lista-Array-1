/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/

let tarefas = []

tarefas[0] = prompt('Primeira tarefa:')
tarefas[1] = prompt('Segunda tarefa:')
tarefas[2] = prompt('Terceira tarefa:')

tarefas.splice(1, 1, )
tarefas.push('Ligar para o médico')

alert(tarefas)