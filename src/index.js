import './style.css';
import checkboxesEvent, {list, save} from './status-update.js';
import dragAndDrop from './drag-and-drop.js';
import {
  displayTasks, remove, edit, clear,
} from './crudtodo.js';

displayTasks();
checkboxesEvent();
dragAndDrop();
edit();
clear();