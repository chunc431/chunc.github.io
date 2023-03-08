const scrollRightButton = document.getElementById('scroll-right-button');
const grid = document.querySelector('.grid');
const columns = grid.children;

let currentColumnIndex = 0;

scrollRightButton.addEventListener('click', () => {
  const currentColumn = columns[currentColumnIndex];

  if (currentColumn) {

    const previousColumnIndex = currentColumnIndex - 1;
    const previousColumn = columns[previousColumnIndex];

    if (previousColumn) {
      previousColumn.style.width = '';
    }

     /* Remove the active-columnall class from the previous column */
    if (currentColumnIndex > 0) {
      columns[currentColumnIndex - 1].classList.remove('active-columnall');
    }

    /* Add the active-columnall class to the current column*/
    if ([25].includes(currentColumnIndex)) {
    currentColumn.classList.add('active-columnall');
    }

    /* Remove the active-column5 class from the previous column */
    if (previousColumn) {
      previousColumn.classList.remove('active-column5');
    }

   /* Add the active-column5 class to the current column */
    if ([19, 21, 22, 24].includes(currentColumnIndex)) {
    currentColumn.classList.add('active-column5');
    }

    /* Remove the active-column4 class from the previous column */
    if (previousColumn) {
      previousColumn.classList.remove('active-column4');
    }

   /* Add the active-column4 class to the current column */
    if ([14, 16, 17].includes(currentColumnIndex)) {
    currentColumn.classList.add('active-column4');
    }

    /* Remove the active-column3 class from the previous column */
    if (previousColumn) {
      previousColumn.classList.remove('active-column3');
    }

   /* Add the active-column3 class to the current column */
    if ([8, 10, 11].includes(currentColumnIndex)) {
    currentColumn.classList.add('active-column3');
    }

    /* Remove the active-column2 class from the previous column */
    if (previousColumn && currentColumnIndex > 2) {
      previousColumn.classList.remove('active-column2');
    }

    /* Add the active-column2 class to the current column */
    if ([5].includes(currentColumnIndex)) {
    currentColumn.classList.add('active-column2');
    }

      /* Remove the active-columnblank class from the previous column */
    if (currentColumnIndex > 0) {
      columns[currentColumnIndex - 1].classList.remove('active-columnblank');
    }

    /* Add the active-columnblank class to the current column */
    if ([1, 2, 13, 18, 23].includes(currentColumnIndex)) {
    currentColumn.classList.add('active-columnblank');
    }

    /* Remove the active-column class from the previous column */
    if (currentColumnIndex > 0) {
      columns[currentColumnIndex - 1].classList.remove('active-column');
    }

    /* Add the active-column class to the current column*/
    if ([0, 3, 4, 6, 7, 9, 12, 15, 20].includes(currentColumnIndex)) {
    currentColumn.classList.add('active-column');
    }


    currentColumnIndex++;
  }
});