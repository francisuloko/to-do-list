import './style.css';
import Menu from './assets/menu.svg';
import Refresh from './assets/refresh.svg';

const toDoList = document.getElementById('to-do-list');
const tasks = [
  {
    description: 'Wake up',
    completed: false,
    index: 0,
  },
  {
    description: 'Make breakfast',
    completed: false,
    index: 1,
  },
  {
    description: 'Write some code',
    completed: false,
    index: 2,
  },
  {
    description: 'Submit code review',
    completed: false,
    index: 3,
  },
  {
    description: 'Merge pull request',
    completed: false,
    index: 4,
  },
];

const refrestContainer = document.getElementById('refreshcontainer');
const refreshIcon = document.createElement('img');
refreshIcon.src = Refresh;
refrestContainer.appendChild(refreshIcon);

function createHTML(task) {
  const markup = `
   <article class='task-item'>
     <input type='checkbox' name='completed' id='${task.index}'>
     <span>${task.description}</span>
     <img class='icons' src="${Menu}" alt="menu">
   </article>
   `;
  return markup;
}

function component() {
  tasks.forEach((item) => {
    toDoList.innerHTML += createHTML(item);
  });
}

component();
