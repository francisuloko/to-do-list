/* eslint-disable no-alert */
// eslint-disable-next-line import/no-named-default
import checkboxesEvent, { list, save } from './status-update.js';


const todoList = document.getElementById('todo-list');


export function edit() {
  const edit = document.querySelectorAll('span');
  for (let i = 0; i < edit.length; i += 1) {
    edit[i].addEventListener('click', () => {
      if (true) {
        const { id } = edit[i].parentNode;
        if (edit[i].textContent) {
          edit[i].addEventListener('mouseleave', (event) => {
            localStorage.setItem('edit', JSON.stringify(edit[i].textContent));
            list[i].description = JSON.parse(localStorage.getItem('edit'));
            save();
            displayTasks();
          });
        }
      }
    });
  }
}

export function clear() {
  document.getElementById('clear-complete').addEventListener('click', (event) => {
    const filtered = list.filter((element) => {
      if (element.completed === false) {
        return true;
      }
      return false;
    });
    list = filtered;
    for (let i = 0; i < list.length; i += 1) {
      list[i].index = i;
    }
    checkboxesEvent();
    save();
  });
}

export function remove() {
  const remove = document.querySelectorAll('.bi-trash');
  for (let i = 0; i < remove.length; i += 1) {
    remove[i].addEventListener('click', (event) => {
      if (true) {
        const { id } = remove[i].parentNode;
        list.splice(id, 1);
        save();
        displayTasks();
      }
    });
  }
}

const createTask = (task) => {
  let todoObj = '';
  if (task.completed === true) {
    todoObj = `
      <article id="${task.index}" class="task-item" draggable="true">
        <input type='checkbox' name='completed' class="checkbox" checked>
        <span class='task-description completed' id="desc-${task.index}" contenteditable="true">${task.description}</span>
        <i class="bi bi-three-dots-vertical"></i>
        <i class="bi bi-trash"></i>
      </article>`;
  } else {
    todoObj = `
        <article  id="${task.index}" class="task-item" draggable="true">
          <input type='checkbox' name='completed' class="checkbox">
          <span class='task-description' id="desc-${task.index}" contenteditable="true">${task.description}</span>
          <i class="bi bi-three-dots-vertical"></i>
          <i class="bi bi-trash"></i>
        </article>`;
  }

  todoList.innerHTML += todoObj;
};

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

  sortedList.forEach((task) => {
    createTask(task);
  });
  remove();
  save();
};

document.getElementById('task-entry').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const description = document.getElementById('task-entry');
    const id = list.length;
    const task = { description: description.value, completed: false, index: id };
    description.value = '';
    list.push(task);
    save();
    displayTasks();
    checkboxesEvent();
  }
});
