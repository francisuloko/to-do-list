import ToDo from './todo.js';

let toDo = new ToDo();

const checkboxes = document.getElementsByClassName('checkbox');

export default function completeTaskEvent(tasks) {
  for(let i=0; i < checkboxes.length; i+=1) {
    checkboxes[i].addEventListener('change', (ev) => {
      console.log(tasks[i]);
      if (tasks[i].completed === true) {
        tasks[i].completed = false;
        document.getElementById(`${tasks[i].index}`).classList.remove('completed');
        toDo.save(tasks);
      } else {
        tasks[i].completed = true;
        document.getElementById(`${tasks[i].index}`).classList.add('completed');
        toDo.save(tasks);
      }
    })
  }
}
