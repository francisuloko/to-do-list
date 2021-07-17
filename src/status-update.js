const checkboxes = document.getElementsByClassName('checkbox');
// eslint-disable-next-line import/no-mutable-exports
export let list = [];

if (localStorage.getItem('list')) {
  const localStorageTasks = JSON.parse(localStorage.getItem('list'));
  list = localStorageTasks;
}

export const save = () => {
  localStorage.setItem('list', JSON.stringify(list));
};

export default function checkboxesEvent(list) {
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('change', () => {
      console.log(list[i]);
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
