import ToDoList from './to-do-list.js';
import { addEventsDragAndDrop } from './drag-and-drop.js';
import Task from './task.js'
import './style.css';


const toDo = new ToDoList();
const toDoList = document.getElementById('to-do-list');
const tasks = document.querySelectorAll('task-item');


// Add new task
document.getElementById('task-description').addEventListener('keypress', (event) => {
  if(event.key === 'Enter'){
    event.preventDefault();
    let description = document.getElementById("task-description");
    let index = toDo.localStorageTasks.length;
    let task = new Task(description.value, index);
    description.value = '';
    toDo.add(task);
  }
});

let listItens = document.querySelectorAll('.task-item');
[].forEach.call(listItens, function(item) {
  addEventsDragAndDrop(item);
});
