import checkboxesEvent, {list, save, fixIndex, setList} from './status-update.js';

const todoList = document.getElementById('todo-list');
const items = document.getElementsByClassName('task-item')

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
  checkboxesEvent();
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
  checkboxesEvent();
  save();
};

export function edit() {
  for (let i = 0; i < items.length; i += 1) {
    items[i].children[1].addEventListener('click', (event) => {
      console.log(items[i].children[1]);
      if(event.target) {
        items[i].children[1].addEventListener('mouseleave', () => {
          localStorage.setItem('edit', JSON.stringify(editable[i].textContent));
          list[i].description = JSON.parse(localStorage.getItem('edit'));
          save();
        });
      }
    });
  }
  displayTasks();
  checkboxesEvent();
  remove();
}

export function clear() {
  document.getElementById('clear-complete').addEventListener('click', (event) => {
    const callback = (task) => task.completed === false;
    const todo = list.filter(callback);
    setList(todo)
    fixIndex(list);
    checkboxesEvent();
    save();
  });
}

export function remove() {
  for (let i = 0; i < items.length; i += 1) {
    items[i].children[3].addEventListener('click', (event) => {
      if (event) {
        list.splice(i, 1);
        fixIndex(list);
        save();
      }
      checkboxesEvent();
      displayTasks();
      remove();
    });
  }
}

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
