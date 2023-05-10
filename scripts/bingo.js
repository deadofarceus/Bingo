// Retrieve the matrix from localStorage
var matrix = JSON.parse(localStorage.getItem("bingoMatrix"));

// Generate the matrix table
var matrixTable = document.getElementById("matrixTable");
for (var i = 0; i < matrix.length; i++) {
  var row = matrixTable.insertRow(i);
  for (var j = 0; j < matrix[i].length; j++) {
    var cell = row.insertCell(j);
    var input = document.createElement("textarea");
    input.type = "text";
    input.value = matrix[i][j];
    cell.appendChild(input);
  }
}

var bingoStarted = false;
var startable = false;

function startBingo() {
    if(bingoStarted) {
        window.location.href = "index.html";
    } else {
        bingoStarted = true;
        for (var i = 0; i < textareas.length; i++) {
            var textarea = textareas[i];
            textarea.classList.add("clickable");
            textarea.addEventListener("click", toggleBackgroundColor);
            textarea.readOnly = true;
        }

        var startButton = document.getElementById("startButton");
        startButton.innerHTML = "Init new Bingo";
    }
}

function toggleBackgroundColor(event) {
    if (bingoStarted) {
        var textarea = event.target;
        textarea.classList.toggle("white-background");
    }
}

// Function to adjust the font size dynamically based on the text content
function adjustFontSize() {
    var textareas = document.getElementsByTagName("textarea");
    for (var i = 0; i < textareas.length; i++) {
        var textarea = textareas[i];
        textarea.style.fontSize = "25px"; // Reset font size
    
        // Calculate the height required to fit the content without scrolling
        var scrollHeight = textarea.scrollHeight;
        var clientHeight = textarea.clientHeight;
        var heightDiff = scrollHeight - clientHeight;
    
        // Adjust the font size based on the height difference
        if (heightDiff > 0) {
            var fontSize = parseInt(window.getComputedStyle(textarea).fontSize);
            var newFontSize = fontSize - heightDiff / 17; // Adjust the division factor as needed
            textarea.style.fontSize = newFontSize + "px";
        }
    }
}
  
// Call the adjustFontSize function whenever the content of a textarea changes
var textareas = document.getElementsByTagName("textarea");
for (var i = 0; i < textareas.length; i++) {
    textareas[i].addEventListener("input", adjustFontSize);
}
  