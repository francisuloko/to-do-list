import ToDo from './todo.js';
import addEventsDragAndDrop from './drag-and-drop.js';
import completeTaskEvent from './status-update.js';
import Task from './task.js';
import './style.css';

const toDo = new ToDo();
completeTaskEvent(toDo.localStorageTasks);

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

document.querySelectorAll('.task-item span').forEach(task => {
  task.addEventListener('click', (ev) => {
    if(ev.target){
     toDo.edit(ev.target.id)
    }
  });
});

const tasks = document.querySelectorAll('#to-do-list .task-item');
[].forEach.call(tasks, addEventsDragAndDrop);
