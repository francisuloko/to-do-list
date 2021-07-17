// eslint-disable-next-line import/no-mutable-exports

export let list = [
  {
    description: 'This is the first test',
    completed: true,
    index: 0,
  },
  {
    description: 'This is the second test',
    completed: false,
    index: 1,
  },
  {
    description: 'This is the third test',
    completed: true,
    index: 2,
  },
  {
    description: 'This is the fourth test',
    completed: false,
    index: 3,
  },
];

if (localStorage.getItem('list')) {
  const localStorageTasks = JSON.parse(localStorage.getItem('list'));
  list = localStorageTasks;
}

export const save = () => {
  localStorage.setItem('list', JSON.stringify(list));
};

const checkboxes = document.getElementsByClassName('checkbox');
export default function checkboxesEvent(list) {
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
