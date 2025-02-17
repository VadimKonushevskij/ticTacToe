const cellElementArray = document.querySelectorAll("#field td");

function start(cells) {
  let i = 0;
  cells.forEach((cell, num) => {
    cell.addEventListener("click", function func() {
      this.textContent = ["X", "O"][i % 2];
      console.log(num);
      this.removeEventListener("click", func);

      if (isVictory(cellElementArray)) {
        alert(this.textContent);
        location.reload();
      } else if (i === 8) {
        alert("Draw");
        location.reload();
      }

      i++;
    });
  });
}

function isVictory(cells) {
  let victoryCombs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let victoryComb of victoryCombs) {
    if (
      cells[victoryComb[0]].textContent === cells[victoryComb[1]].textContent &&
      cells[victoryComb[1]].textContent === cells[victoryComb[2]].textContent &&
      cells[victoryComb[0]].textContent !== ""
    ) {
      return true;
    }
  }
  return false;
}

start(cellElementArray);
