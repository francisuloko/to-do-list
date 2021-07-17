import Todo from './todo.js';
import checkboxesEvent from './status-update.js';

const todo = new Todo();

export default function dragAndDrop() {
  let dragged;

  document.addEventListener('dragstart', (event) => {
    dragged = event.target;
    event.dataTransfer.setData('text', event.target.outerHTML);
  }, false);

  document.addEventListener('dragover', (event) => {
    event.preventDefault();
  }, false);

  document.addEventListener('drop', (event) => {
    event.preventDefault();
    if (dragged !== event.target) {
      event.target.parentNode.removeChild(dragged);
      const task = event.dataTransfer.getData('text');
      event.target.insertAdjacentHTML('beforebegin', task);
      todo.sortItems();
    }
    checkboxesEvent(todo.tasks);
  }, false);
}

document.location.reload;