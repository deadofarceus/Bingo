document.getElementById('joinButton').addEventListener('click', function() {
    const gameID = document.getElementById('gameID').value;
    const name = document.getElementById('name').value;
    if (gameID !== "" && name !== "") {
        console.log(`Joining game ${gameID} as ${name}`);   
        window.location.href = `../html/PokerTable.html?gameID=${gameID}&name=${name}`;
    }
});

document.getElementById('createButton').addEventListener('click', function() {
    const gameID = document.getElementById('gameID').value;
    const name = document.getElementById('name').value;
    if (gameID !== "") {
        console.log(`Creating game ${gameID}`);
        window.location.href = `../html/PokerController.html?gameID=${gameID}`;
    }
});
