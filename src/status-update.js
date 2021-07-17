import ToDo from './todo.js';

const todo = new ToDo();
const checkboxes = document.getElementsByClassName('checkbox');

export default function checkboxesEvent(list) {
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('change', () => {
      if (list[i].completed === true) {
        list[i].completed = false;
        document.getElementById(`${todo.tasks[i].index}`).classList.remove('completed');
        todo.save(list);
      } else {
        list[i].completed = true;
        document.getElementById(`${todo.tasks[i].index}`).classList.add('completed');
        todo.save(list);
      }
    });
  }
}
