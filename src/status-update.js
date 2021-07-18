import { displayTasks } from "./crudtodo";

export let list = [];

if (localStorage.getItem('list')) {
  list = JSON.parse(localStorage.getItem('list'));
}

export const save = () => {
  localStorage.setItem('list', JSON.stringify(list));
};

export function fixIndex(list) {
  for (let i = 0; i < list.length; i += 1) {
    list[i].index = i;
  }
}

export function setList(filter){
  list = []
  for(let i=0; i < filter.length; i +=1){
    list[i] = filter[i]
    save();
    displayTasks()
  }
}


export default function checkboxesEvent() {
  const checkboxes = document.getElementsByClassName('checkbox');
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('change', () => {
      if (list[i].completed === true) {
        list[i].completed = false;
        document.getElementById(`desc-${list[i].index}`).classList.remove('completed');
      } else {
        list[i].completed = true;
        document.getElementById(`desc-${list[i].index}`).classList.add('completed');
      }
      save();
    });
  }
}
