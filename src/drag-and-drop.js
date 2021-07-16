import ToDo from './todo.js';

const toDo = new ToDo();
let dragged;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  dragged = this;
  ev.dataTransfer.setData('text', this.outerHTML);
}

function sortItems() {
  const sortedItems = document.getElementById('to-do-list').querySelectorAll('.task-item');
  const itemsIndex = [];
  sortedItems.forEach((item) => {
    itemsIndex.push(item.children[1].id);
  });

  const tasks = toDo.localStorageTasks;
  const temp = [];
  for (let i = 0; i < tasks.length; i += 1) {
    temp[i] = tasks[itemsIndex[i]];
    temp[i].index = i;
  }
  toDo.localStorageTasks = temp;
  toDo.save();
}

function drop(ev) {
  if (dragged !== this) {
    this.parentNode.removeChild(dragged);
    const task = ev.dataTransfer.getData('text');
    this.insertAdjacentHTML('beforebegin', task);
    const itemsAfter = this.previousSibling;
    itemsAfter.addEventListener('dragstart', drag, false);
    itemsAfter.addEventListener('dragover', allowDrop, false);
    itemsAfter.addEventListener('drop', drop, false);
    sortItems();
  }
}

export default function addEventsDragAndDrop(elem) {
  elem.addEventListener('dragstart', drag, false);
  elem.addEventListener('dragover', allowDrop, false);
  elem.addEventListener('drop', drop, false);
}
