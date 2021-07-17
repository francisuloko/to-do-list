export default class ToDo {
  constructor() {
    this.tasks = []
    if (localStorage.getItem('tasks')) {
      const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));
      this.tasks = localStorageTasks;
    }
    this.toDoList = document.getElementById('to-do-list');
    this.notice = document.getElementById('notice');
    this.displayTasks();
  }

  createTask(task) {
    let taskObj;

    if (task.completed === true) {
      taskObj = `
        <article class="task-item" draggable="true">
          <input type='checkbox' name='completed' class="checkbox" checked>
          <span class='task-description completed' id="${task.index}">${task.description}</span>
          <i class="bi bi-three-dots-vertical"></i>
        </article>`;
    } else {
      taskObj = `
          <article class="task-item" draggable="true">
            <input type='checkbox' name='completed' class="checkbox">
            <span class='task-description' id="${task.index}">${task.description}</span>
            <i class="bi bi-three-dots-vertical"></i>
          </article>`;
    }

    this.toDoList.innerHTML += taskObj;
  }

  displayTasks() {
    document.getElementById('to-do-list').innerHTML = '';
    for (let i = 0; i < this.tasks.length; i += 1) {
      this.createTask(this.tasks[i]);
    }

    const removeButtons = document.querySelectorAll('.remove-button');
    for (let i = 0; i < removeButtons.length; i += 1) {
      removeButtons[i].addEventListener('click', (event) => {
        event.preventDefault();
        this.remove(i);
      });
    }
  }

  save(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  add(todoObj) {
    if (todoObj.description !== '') {
      this.tasks.push(todoObj);
      this.save(this.tasks);
      this.displayTasks();
      this.displayNotice(['success', `${todoObj.description} added successfully!`]);
    } else {
      this.displayNotice(['fail', 'Task Description cannot be empty']);
    }
  }

  remove(id) {
    const task = this.tasks.splice(id, 1);
    this.displayNotice(['success', `${task[0].description} removed successfully!`]);
    this.save(this.tasks);
    this.displayTasks();
  }

  edit(elem) {
    const description = document.getElementById(elem);
    for (let i = 0; i < this.tasks.length; i += 1) {
      if (this.tasks[i].index === +elem && this.tasks[i].completed !== true) {
        description.contentEditable = true;
        this.tasks[i].description = description.innerHTML;
        this.save(this.tasks);
      }
    }
  }

  displayNotice(message) {
    if (message[0] === 'success') {
      this.notice.style = 'color: green';
      [, this.notice.textContent] = [...message];
    } else {
      this.notice.style = 'color: red';
      [, this.notice.textContent] = [...message];
    }

    setTimeout(() => {
      this.notice.innerHTML = '';
    }, 2000);
  }

  sortItems() {
    const sortedItems = document.getElementById('to-do-list').querySelectorAll('.task-item');
    const itemsIndex = [];
    sortedItems.forEach((item) => {
      itemsIndex.push(item.children[1].id);
    });
  
    const temp = [];
    for (let i = 0; i < this.tasks.length; i += 1) {
      temp[i] = this.tasks[itemsIndex[i]];
      temp[i].index = i;
    }
    this.save(temp);
  }
}
