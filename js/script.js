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

    // Edit button
    const editTodo = document.createElement('button');
    editTodo.innerText='Edit';
    editTodo.classList.add('action-btn', 'edit-btn');
    li.appendChild(editTodo);

    // Delete button
    const deleteTodo = document.createElement('button');
    deleteTodo.innerText='Remove';
    deleteTodo.classList.add('action-btn', 'delete-btn');
    li.appendChild(deleteTodo);

    todoDisplay.appendChild(li);
    inputTodo.value = "";
}

const changeTodo = (e)=> {
    if(e.target.innerText === 'Remove') 
    {
        todoDisplay.removeChild(e.target.parentElement);
    }
}

addTodo.addEventListener('click', add);
todoDisplay.addEventListener('click', changeTodo);