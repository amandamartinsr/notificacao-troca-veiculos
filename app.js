// Seleciona os elementos do DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Função para adicionar uma tarefa
function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
}

// Evento de submit do formulário
taskForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o recarregamento da página
    const taskText = taskInput.value.trim(); // Remove espaços em branco
    if (taskText !== '') {
        addTask(taskText); // Adiciona a tarefa
        taskInput.value = ''; // Limpa o campo de input
    }
});
