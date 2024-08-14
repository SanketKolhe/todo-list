const inputTodo = document.getElementById('input_todo');
const addTodo = document.getElementById('add_todo');
const todoDisplay = document.getElementById('todo-display');

let edit = null;

// To add todo list item
const add = () => {
    const inputText = inputTodo.value.trim();

    if (inputText.length <= 0) {
        alert('List is empty');
        return false;
    }

    if (addTodo.value === 'Edit') {
        const inputTodoText = edit.target.previousElementSibling.innerHTML;
        edit.target.previousElementSibling.innerHTML = inputText;
        editLocal(inputTodoText, inputText);
        addTodo.value = 'Add';
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
        saveLocal(inputText);
    }
};


// To edit/remove todo list item
const changeTodo = (e) => {
    if (e.target.innerHTML === 'Remove') {
        todoDisplay.removeChild(e.target.parentElement);
        deleteLocal(e.target.parentElement);
    }

    if (e.target.innerHTML === 'Edit') {
        inputTodo.value = e.target.previousElementSibling.innerHTML;
        inputTodo.focus();
        addTodo.value = 'Edit'
        edit = e;
    }
};

// To save todo list item in local storage
const saveLocal = (todo) => {
    let todoList;
    if (localStorage.getItem('todoList') === null) {
        todoList = [];
    } else {
        todoList = JSON.parse(localStorage.getItem('todoList'));
    }
    todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(todoList));
};

// To get todo list item from local storage
const getLocal = () => {
    let todoList;
    if (localStorage.getItem('todoList') === null) {
        todoList = [];
    } else {
        todoList = JSON.parse(localStorage.getItem('todoList'));
        todoList.forEach(todo => {
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.innerHTML = todo;
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
        });
    }
};

// To delete todo list item from local storage
const deleteLocal = (todo) => {
    let todoList;
    if (localStorage.getItem('todoList') === null) {
        todoList = [];
    } else {
        todoList = JSON.parse(localStorage.getItem('todoList'));
    }
    let todoText = todo.children[0].innerHTML;
    let todoIndex = todoList.indexOf(todoText);
    todoList.splice(todoIndex, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));
};


// To delete todo list item from local storage
const editLocal = (oldText, newText) => {
    let todoList = JSON.parse(localStorage.getItem('todoList'));
    let todoIndex = todoList.indexOf(oldText);
    todoList[todoIndex] = newText;
    localStorage.setItem('todoList', JSON.stringify(todoList));
};


document.addEventListener('DOMContentLoaded', getLocal);
addTodo.addEventListener('click', add);
todoDisplay.addEventListener('click', changeTodo);