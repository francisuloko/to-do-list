import './style.css';
// eslint-disable-next-line import/no-named-default
import { default as checkboxesEvent, list } from './status-update.js';
// eslint-disable-next-line import/no-named-default
import { default as dragAndDrop, displayTasks } from './drag-and-drop.js';

displayTasks();
dragAndDrop();
checkboxesEvent(list);
