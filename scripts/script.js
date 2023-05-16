function initField() {
    const id = document.getElementById('query').value;
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;

    if (rows < 1 || columns < 1 || rows != columns || id == "") {
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
    window.location.href = `bingo.html?id=${id}`;
}

function passiv() {
    const id = document.getElementById('query').value;

    if (id == "") {
        return;
    }

    window.location.href = `passiv.html?id=${id}`
}