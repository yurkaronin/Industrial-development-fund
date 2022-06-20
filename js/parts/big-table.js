if (bigTable) {
  window.onload = function () {
    for (let bigTableItem of bigTable) {
      const oldParent = bigTableItem.parentNode;

      var parent = document.createElement('div');
      parent.classList.add('big-table');
      oldParent.replaceChild(parent, bigTableItem);
      parent.appendChild(bigTableItem);
    }

    let customTable = document.querySelectorAll('.big-table');
    for (let customTableItem of customTable) {
      const oldParent = customTableItem.parentNode;

      var parent = document.createElement('p');
      parent.classList.add('helper');
      parent.innerHTML = "Таблицу можно прокрутить вправо 🠖"
      oldParent.replaceChild(parent, customTableItem);
      parent.appendChild(customTableItem);
    }
  }


}
