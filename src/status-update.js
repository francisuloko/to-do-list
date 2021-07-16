import ToDo from './todo.js';

const toDo = new ToDo();

const checkboxes = document.getElementsByClassName('checkbox');

export default function completeTaskEvent() {
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('change', () => {
      if (toDo.tasks[i].completed === true) {
        toDo.tasks[i].completed = false;
        document.getElementById(`${toDo.tasks[i].index}`).classList.remove('completed');
        toDo.save();
      } else {
        toDo.tasks[i].completed = true;
        document.getElementById(`${toDo.tasks[i].index}`).classList.add('completed');
        toDo.save();
      }
    });
  }
}
