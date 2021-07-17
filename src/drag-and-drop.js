import { default as checkboxesEvent, save, list } from './status-update.js';

const todoList = document.getElementById('todo-list');

export const displayTasks = () => {
  todoList.innerHTML = '';

  const sortedList = list.sort((a, b) => {
    if (a.index > b.index) {
      return 1;
    }
    if (a.index < b.index) {
      return -1;
    }
    return 0;
  });

  sortedList.forEach(task => {
    createTask(task)
  });

  save()
};

const createTask = (task) => {
  let todoObj = '';
  if (task.completed === true) {
    todoObj = `
      <article id="${task.index}" class="task-item" draggable="true">
        <input type='checkbox' name='completed' class="checkbox" checked>
        <span class='task-description completed' id="desc-${task.index}">${task.description}</span>
        <i class="bi bi-three-dots-vertical"></i>
      </article>`;
  } else {
    todoObj = `
        <article  id="${task.index}" class="task-item" draggable="true">
          <input type='checkbox' name='completed' class="checkbox">
          <span class='task-description' id="desc-${task.index}">${task.description}</span>
          <i class="bi bi-three-dots-vertical"></i>
        </article>`;
  }

  todoList.innerHTML += todoObj;
}

export default function dragAndDrop() {
  let dragged;

  document.addEventListener('dragstart', (event) => {
    dragged = event.target;
    event.dataTransfer.setData('text', event.target.classList)
  }, false);

  document.addEventListener('dragover', (event) => {
    event.preventDefault();
  }, false);

  document.addEventListener('drop', (event) => {
    event.preventDefault();
    if (event.dataTransfer.getData('text') === 'task-item') {
      const taskIndex = list[dragged.id].index;

      list[dragged.id].index = list[event.target.id].index
      list[event.target.id].index = taskIndex
      dragged.id = list[dragged.id].index
      event.target.id = list[event.target.id].index
    }
    displayTasks();
    checkboxesEvent(list);
  }, false);
}
