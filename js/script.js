const inputTodo = document.getElementById('input_todo');
const addTodo = document.getElementById('add_todo');
const todoDisplay = document.getElementById('todo-display');

const add = () => {
    const inputText = inputTodo.value.trim();

    if (inputText.length <= 0) {
        alert('List is empty');
        return false;
    }

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerHTML = inputText;
    li.appendChild(p);
    todoDisplay.appendChild(li);
    inputTodo.value = "";
}

addTodo.addEventListener('click', add);