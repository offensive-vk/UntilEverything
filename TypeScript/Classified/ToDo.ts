// Define a TodoItem interface to represent the structure of each todo item
interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

// Define a TodoApp class that handles the todo list logic and DOM manipulation
class TodoApp {
    private todoList: TodoItem[] = [];
    private todoInput: HTMLInputElement;
    private todoListContainer: HTMLDivElement;

    constructor() {
        // Get references to the input element and list container in the constructor
        this.todoInput = document.getElementById('todoInput') as HTMLInputElement;
        this.todoListContainer = document.getElementById('todoList') as HTMLDivElement;

        // Bind event listener for adding new todo items
        document.getElementById('addButton')?.addEventListener('click', this.addTodo.bind(this));

        // Fetch and render existing todos from local storage on page load
        this.loadTodos();
    }

    private addTodo() {
        const todoText = this.todoInput.value.trim();
        if (!todoText) return;

        const newTodo: TodoItem = {
            id: Date.now(),
            text: todoText,
            completed: false,
        };

        this.todoList.push(newTodo);
        this.saveTodos();
        this.renderTodoItem(newTodo);

        this.todoInput.value = '';
    }

    private renderTodoItem(todo: TodoItem) {
        const todoItemContainer = document.createElement('div');
        todoItemContainer.classList.add('todo-item');
        todoItemContainer.innerHTML = `
        <input type="checkbox" class="todo-checkbox" data-id="${todo.id}">
        <span class="todo-text">${todo.text}</span>
        <button class="delete-button" data-id="${todo.id}">Delete</button>`;

        const deleteButton = todoItemContainer.querySelector('.delete-button') as HTMLButtonElement;
        deleteButton.addEventListener('click', () => this.deleteTodoItem(todo.id));

        const todoCheckbox = todoItemContainer.querySelector('.todo-checkbox') as HTMLInputElement;
        todoCheckbox.checked = todo.completed;
        todoCheckbox.addEventListener('change', () => this.toggleTodoCompletion(todo.id));

        this.todoListContainer.appendChild(todoItemContainer);
    }

    private deleteTodoItem(todoId: number) {
        this.todoList = this.todoList.filter((todo) => todo.id !== todoId);
        this.saveTodos();
        this.renderTodos();
    }

    private toggleTodoCompletion(todoId: number) {
        const todo = this.todoList.find((todo) => todo.id === todoId);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
        }
    }

    private saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todoList));
    }

    private loadTodos() {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            this.todoList = JSON.parse(storedTodos);
            this.renderTodos();
        }
    }

    private renderTodos() {
        this.todoListContainer.innerHTML = '';
        this.todoList.forEach((todo) => this.renderTodoItem(todo));
    }
}

// Initialize the todo app after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => new TodoApp());
