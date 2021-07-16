let dragged;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  dragged = this;
  ev.dataTransfer.setData('text', this.outerHTML);
}

function drop(ev) {
  if (dragged !== this) {
    this.parentNode.removeChild(dragged);
    const task = ev.dataTransfer.getData('text');
    this.insertAdjacentHTML('beforebegin', task);
    const dropped = this.previousSibling;
    addEventsDragAndDrop(dropped);
  }
}

export default function addEventsDragAndDrop(elem) {
  elem.addEventListener('dragstart', drag, false);
  elem.addEventListener('dragover', allowDrop, false);
  elem.addEventListener('drop', drop, false);
}
