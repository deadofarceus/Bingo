function initField() {
    var rows = document.getElementById('rows').value;
    var columns = document.getElementById('columns').value;

    if (rows < 1 || columns < 1) {
        return;
    }
    // Create the matrix
    var matrix = [];
    for (var i = 0; i < rows; i++) {
        matrix[i] = [];
        for (var j = 0; j < columns; j++) {
            matrix[i][j] = "";
        }
    }

    // Store the matrix in localStorage
    localStorage.setItem("bingoMatrix", JSON.stringify(matrix));

    // Redirect to bingo.html
    window.location.href = "bingo.html";
}