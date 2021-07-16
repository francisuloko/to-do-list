export default class ToDo {
  constructor() {
    this.tasks = [];
    this.toDoList = document.getElementById('to-do-list');
    this.localStorageTasks = JSON.parse(localStorage.getItem('tasks'));
    this.notice = document.getElementById('notice');

    if (this.localStorageTasks == null) {
      localStorage.setItem('tasks', JSON.stringify([]));
    } else {
      this.displayTasks();
    }
  }

  createTask(task) {
    const taskObj = `
        <article class="task-item" id="task-${task.index}" draggable="true">
          <input type='checkbox' name='completed'>
          <span class='task-description'>${task.description}</span>
          <i class="bi bi-three-dots-vertical"></i>
        </article>`;

    this.toDoList.innerHTML += taskObj;
  }

  displayTasks() {
    document.getElementById('to-do-list').innerHTML = '';
    const tasks = this.localStorageTasks;
    for (let i = 0; i < tasks.length; i += 1) {
      this.createTask(tasks[i], i);
    }

    const removeButtons = document.querySelectorAll('.remove-button');
    for (let i = 0; i < removeButtons.length; i += 1) {
      removeButtons[i].addEventListener('click', (event) => {
        event.preventDefault();
        this.remove(i);
      });
    }
  }

  save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  add(task) {
    if (task.description !== '') {
      this.tasks = this.localStorageTasks;
      this.tasks.push(task);
      this.save();
      this.displayNotice(['success', `${task.description} added successfully!`]);
      this.displayTasks();
    } else {
      this.displayNotice(['fail', 'Task Description cannot be empty']);
    }
  }

  remove(id) {
    this.tasks = this.localStorageTasks;
    const task = this.tasks.splice(id, 1);
    this.displayNotice(['success', `${task[0].description} removed successfully!`]);
    this.save();
    this.displayTasks();
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
}
