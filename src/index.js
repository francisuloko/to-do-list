// eslint-disable-next-line import/no-named-default
import './style.css';
import { default as checkboxesEvent, list } from './status-update.js';
import { default as dragAndDrop, displayTasks } from './drag-and-drop.js';

displayTasks();
dragAndDrop();
checkboxesEvent(list);
