const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');

let allTodos = getTodos();
updateTodoList();

// Form submit
todoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  addTodo();
});

// Add Todo
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    const todoObject = {
      text: todoText,
      completed: false
    };
    allTodos.push(todoObject);
    updateTodoList();
    saveTodos();
    todoInput.value = "";
  }
}

// Render List
function updateTodoList() {
  todoListUL.innerHTML = "";
  allTodos.forEach((todo, todoIndex) => {
    const todoItem = createTodoItem(todo, todoIndex);
    todoListUL.append(todoItem);
  });
}

// Create Todo Item
function createTodoItem(todo, todoIndex) {
  const todoId = "todo-" + todoIndex;
  const todoLI = document.createElement("li");
  todoLI.className = "todo";

  todoLI.innerHTML = `
    <input type="checkbox" id="${todoId}" />
    <label for="${todoId}" class="custom-checkbox">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="transparent">
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    </label>
    <label for="${todoId}" class="todo-txt">${todo.text}</label>
    <button class="delete-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="var(--secondary)">
        <path d="M12 14h16l-1.5 18.5H13.5L12 14zm5-6h6v2h-6V8zm-2 2V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h6v2H9V10h6z"/>
      </svg>
    </button>
  `;

  // Delete Button
  const deleteButtonEl = todoLI.querySelector(".delete-button");
  deleteButtonEl.addEventListener("click", () => {
    deleteTodoItem(todoIndex);
  });

  // Checkbox
  const checkbox = todoLI.querySelector("input");
  checkbox.addEventListener("change", () => {
    allTodos[todoIndex].completed = checkbox.checked;
    saveTodos();
  });

  checkbox.checked = todo.completed;
  return todoLI;
}

// Delete Todo
function deleteTodoItem(todoIndex) {
  allTodos = allTodos.filter((_, i) => i !== todoIndex);
  saveTodos();
  updateTodoList();
}

// Save Todos
function saveTodos() {
  const todosJson = JSON.stringify(allTodos);
  localStorage.setItem("todos", todosJson);
}

// Get Todos
function getTodos() {
  const todos = localStorage.getItem("todos") || "[]";
  return JSON.parse(todos);
}
