// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// selecting form and adding event listener on form submission
const myForm = document.querySelector("#sizePicker");
myForm.addEventListener("submit", makeGrid, true);

function makeGrid(event) {
  // Your code goes here!
  //selecting table  and taking input for making grid
  const table = document.querySelector("#pixelCanvas");
  const newRow = document.querySelector("#inputHeight").valueAsNumber;
  const newCol = document.querySelector("#inputWidth").valueAsNumber;
  //selecting color from color selector
  const tdColor = document.querySelector("#colorPicker").value;
  //checking range for grid size, prompting appropriate message and preventing creation of grid
  if (newRow > 50 || newCol > 50) {
    alert(
      "Please enter reasonable size!\n Maximum value acceptable for gridheight and gridwidth is 50"
    );
    myForm.reset();
    myForm.stopPropagation();
  }
  //to prevent submission of form
  event.preventDefault();
  // creating grid using nested loop
  for (let i = 0; i < newRow; i++) {
    const tr = document.createElement("tr");
    table.appendChild(tr);
    for (let j = 0; j < newCol; j++) {
      const td = document.createElement("td");
      tr.appendChild(td);
    }
  }
  document.body.appendChild(table);
  // handler for selected grid
  function tdClickHandler(event) {
    let target = event.target;
    target.style.background = tdColor;
  }
  //selecting grid and adding event handler to selected grid
  let tdselected = document.querySelectorAll("#pixelCanvas td");
  tdselected.forEach((e) => e.addEventListener("click", tdClickHandler));
  // reset the grid on submit
  myForm.removeEventListener("submit", makeGrid, true);
}
