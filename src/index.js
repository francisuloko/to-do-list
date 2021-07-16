import ToDo from './todo.js';
import addEventsDragAndDrop from './drag-and-drop.js';
import Task from './task.js';
import './style.css';

const toDo = new ToDo();

// Add new task
document.getElementById('task-description').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const description = document.getElementById('task-description');
    const index = toDo.localStorageTasks.length;
    const task = new Task(description.value, index);
    description.value = '';
    toDo.add(task);
  }
});

const tasks = document.querySelectorAll('#to-do-list .task-item');
[].forEach.call(tasks, addEventsDragAndDrop);
