import './style.css';
import checkboxesEvent, { list } from './status-update.js';
import dragAndDrop from './drag-and-drop.js';
import {
  displayTasks, remove, edit, clear,
} from './crudtask.js';

displayTasks();
dragAndDrop();
checkboxesEvent(list);
edit();
remove();
clear();