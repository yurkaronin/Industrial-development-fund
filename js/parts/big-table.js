
if(bigTable) {
  window.onload = function() {
    for (let bigTableItem of bigTable) {
      const oldParent = bigTableItem.parentNode;
      var parent = document.createElement('div');
      parent.classList.add('big-table');
      oldParent.replaceChild(parent, bigTableItem);
      parent.appendChild(bigTableItem);
    }
  }
}

