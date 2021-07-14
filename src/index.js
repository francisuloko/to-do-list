import './style.css'

function component() {
  const toDoList = document.getElementById('to-do-list');
  const tasks = [
    {
      description: 'Wake up',
      completed: false,
      index: 0
    },
    {
      description: 'Eat breakfast',
      completed: false,
      index: 1
    },
    {
      description: 'Write some code',
      completed: false,
      index: 2
    }
  ];

  function createHTML(task){
    let markup = `
     <article>
       <input type='checkbox' name='completed' id='${task.index}'>
       <span>${task.description}</span>
     </article>
     `
    return markup;
  }

  tasks.forEach(item => {
    toDoList.innerHTML += createHTML(item)
  });
  
  return toDoList;
}

document.getElementById('to-do-list').appendChild(component());
