var height, width, color;
let canvas = document.getElementById("pixelCanvas");

// Select size input
document.getElementById("sizePicker").onsubmit = function (event) {
  event.preventDefault();
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
 
  // When size is submitted by the user, call makeGrid()
  makeGrid(height, width);
};

// Function makeGrid
function makeGrid(height, width) {

  // Reset canvas
  document.getElementById("pixelCanvas").innerHTML = "";

  // creates a canvas row
  for (var i = 0; i < height; i++) {
    var row = document.createElement("tr");

    // Creates canvas column (data)
    for (var j = 0; j < width; j++) {
      var cell = document.createElement("td");
      row.appendChild(cell);
      cell.addEventListener("click", function (event) {

        // Add color:style to cells
        color = document.getElementById("colorPicker").value;
        if (event.target.hasAttributes()) {
          event.target.removeAttribute("style");
        } else {
          event.target.style.backgroundColor = color;
        }
      });
    }
    canvas.appendChild(row);
  }
}


// Storage for later

// build the nav

  // Reset NAV
  document.getElementById("navbar__list").innerHTML = "";

  // Add current sections to NAV
    sections = document.getElementById("section#");

// added line

  function addNavtags() {
    for (section of sections) {
    ul = document.getElementById("navbar__list");
    li = ul.createElement("li");
    ul.appendChild(li);
    }

  }
