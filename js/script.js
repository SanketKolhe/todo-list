const inputTodo = document.getElementById('input_todo');
const addTodo = document.getElementById('add_todo');
const todoDisplay = document.getElementById('todo-display');

let edit = null;

const add = () => {
    const inputText = inputTodo.value.trim();

    if (inputText.length <= 0) {
        alert('List is empty');
        return false;
    }

    if (addTodo.value === 'Edit') {
        edit.target.previousElementSibling.innerHTML = inputText;
        addTodo.value = 'Add'
        inputTodo.value = '';
    } else {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerHTML = inputText;
        li.appendChild(p);

        // Edit button
        const editTodo = document.createElement('button');
        editTodo.innerText = 'Edit';
        editTodo.classList.add('action-btn', 'edit-btn');
        li.appendChild(editTodo);

        // Delete button
        const deleteTodo = document.createElement('button');
        deleteTodo.innerText = 'Remove';
        deleteTodo.classList.add('action-btn', 'delete-btn');
        li.appendChild(deleteTodo);

        todoDisplay.appendChild(li);
        inputTodo.value = "";
    }
}

const changeTodo = (e) => {
    if (e.target.innerHTML === 'Remove') {
        todoDisplay.removeChild(e.target.parentElement);
    }

    if (e.target.innerHTML === 'Edit') {
        inputTodo.value = e.target.previousElementSibling.innerHTML;
        inputTodo.focus();
        addTodo.value = 'Edit'
        edit = e;
    }
}

addTodo.addEventListener('click', add);
todoDisplay.addEventListener('click', changeTodo);