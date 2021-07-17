import './style.css';
import ToDo from './todo.js';
import dragAndDrop from './drag-and-drop.js';
import checkboxesEvent from './status-update.js';

const todo = new ToDo();

document.getElementById('task-description').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const description = document.getElementById('task-description');
    const todoIndex = todo.tasks.length;
    const task = { description: description.value, index: todoIndex, completed: false };
    description.value = '';
    todo.add(task);
    todo.displayTasks();
  }
});

const items = document.querySelectorAll('.task-item');
for (let i = 0; i < items.length; i += 1) {
  items[i].addEventListener('click', () => {
    todo.edit(items[i].id);
    todo.displayTasks();
  });
}

todo.displayTasks();
dragAndDrop();
checkboxesEvent(todo.tasks);
