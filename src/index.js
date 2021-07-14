import ToDoList from './to-do-list.js'
import Task from './task.js'
import './style.css';
import Menu from './assets/menu.svg';
import Refresh from './assets/refresh.svg';
import { drag, drop, allowDrop } from './drag-and-drop.js'

let toDoList = new ToDoList();

// Add new task
document.getElementById('task-description').addEventListener('keypress', (event) => {
  if(event.key === 'Enter'){
    event.preventDefault();
    let description = document.getElementById("task-description");
    let index = toDoList.localStorageTasks.length;
    let task = new Task(description.value, index);
    description.value = '';
    toDoList.add(task);
  }
});

const toDoHeader = document.getElementById('to-do-header');
const refreshIcon = document.createElement('img');
refreshIcon.classList.add('icons');
refreshIcon.src = Refresh;
toDoHeader.appendChild(refreshIcon);
