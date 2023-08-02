// Define a TodoApp class that handles the todo list logic and DOM manipulation
var TodoApp = /** @class */ (function () {
    function TodoApp() {
        var _a;
        this.todoList = [];
        // Get references to the input element and list container in the constructor
        this.todoInput = document.getElementById('todoInput');
        this.todoListContainer = document.getElementById('todoList');
        // Bind event listener for adding new todo items
        (_a = document.getElementById('addButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.addTodo.bind(this));
        // Fetch and render existing todos from local storage on page load
        this.loadTodos();
    }
    TodoApp.prototype.addTodo = function () {
        var todoText = this.todoInput.value.trim();
        if (!todoText)
            return;
        var newTodo = {
            id: Date.now(),
            text: todoText,
            completed: false,
        };
        this.todoList.push(newTodo);
        this.saveTodos();
        this.renderTodoItem(newTodo);
        this.todoInput.value = '';
    };
    TodoApp.prototype.renderTodoItem = function (todo) {
        var _this = this;
        var todoItemContainer = document.createElement('div');
        todoItemContainer.classList.add('todo-item');
        todoItemContainer.innerHTML = "\n        <input type=\"checkbox\" class=\"todo-checkbox\" data-id=\"".concat(todo.id, "\">\n        <span class=\"todo-text\">").concat(todo.text, "</span>\n        <button class=\"delete-button\" data-id=\"").concat(todo.id, "\">Delete</button>");
        var deleteButton = todoItemContainer.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () { return _this.deleteTodoItem(todo.id); });
        var todoCheckbox = todoItemContainer.querySelector('.todo-checkbox');
        todoCheckbox.checked = todo.completed;
        todoCheckbox.addEventListener('change', function () { return _this.toggleTodoCompletion(todo.id); });
        this.todoListContainer.appendChild(todoItemContainer);
    };
    TodoApp.prototype.deleteTodoItem = function (todoId) {
        this.todoList = this.todoList.filter(function (todo) { return todo.id !== todoId; });
        this.saveTodos();
        this.renderTodos();
    };
    TodoApp.prototype.toggleTodoCompletion = function (todoId) {
        var todo = this.todoList.find(function (todo) { return todo.id === todoId; });
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
        }
    };
    TodoApp.prototype.saveTodos = function () {
        localStorage.setItem('todos', JSON.stringify(this.todoList));
    };
    TodoApp.prototype.loadTodos = function () {
        var storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            this.todoList = JSON.parse(storedTodos);
            this.renderTodos();
        }
    };
    TodoApp.prototype.renderTodos = function () {
        var _this = this;
        this.todoListContainer.innerHTML = '';
        this.todoList.forEach(function (todo) { return _this.renderTodoItem(todo); });
    };
    return TodoApp;
}());
// Initialize the todo app after the DOM has loaded
document.addEventListener('DOMContentLoaded', function () { return new TodoApp(); });
