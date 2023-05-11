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
var randomizeButton = document.getElementById("randomizeButton");

function startBingo() {
    if(bingoStarted) {
        window.location.href = "index.html";
    } else {
        randomizeButton.remove();
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

function randomizeBingo() {
    var textareas = document.getElementsByTagName("textarea");
    loadSentences(function(sentences) {
        var numOfRequestedSentences = matrix[0].length * matrix.length;
        var totalSentences = sentences.length;
        var selectedSentences = [];
  
        if (numOfRequestedSentences <= totalSentences) {
            while (selectedSentences.length < numOfRequestedSentences) {
                var randomIndex = Math.floor(Math.random() * totalSentences);
                var sentence = sentences[randomIndex];
                if (!selectedSentences.includes(sentence)) {
                    selectedSentences.push(sentence);
                }
            }
        } else {
            console.log("Not enough sentences available.");
        }
  
        for (var i = 0; i < textareas.length; i++) {
            var textarea = textareas[i];
            textarea.value = selectedSentences[i] || "";
        }
    });
}

function loadSentences(callback) {
    // const fileInput = document.getElementById('fileInput');
    // const file = fileInput.files[0];

    // const reader = new FileReader();
    // reader.onload = function(event) {
    //     const content = event.target.result;
    //     const sentences = JSON.parse(content);
    //     callback(sentences);
    // };
    // reader.readAsText(file);
    fetch('data/prompts.json')
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error('Error loading sentences:', error));
}

function generateRandomText() {
    loadSentences(function (sentences) {
        var numOfRequestedSentences = matrix[0].length * matrix.length;
        var totalSentences = sentences.length;
        var selectedSentences = [];
    
        if (numOfRequestedSentences <= totalSentences) {
            while (selectedSentences.length < numOfRequestedSentences) {
                var randomIndex = Math.floor(Math.random() * totalSentences);
                var sentence = sentences[randomIndex];
                if (!selectedSentences.includes(sentence)) {
                    selectedSentences.push(sentence);
                }
            }
        } else {
          console.log("Not enough sentences available.");
        }
    
        callback(selectedSentences);
    });
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
  