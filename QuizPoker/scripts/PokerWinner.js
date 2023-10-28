var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const gameID = params.get('gameID');
const playerName = params.get('name');
const controller = params.get('controller');
const winner = params.get('winner');

const winnerText = document.getElementById("winner");
winnerText.textContent = winner;

function playAgain() {
    if (controller === "1") {
        window.location.href = `../html/PokerController.html?gameID=${gameID}`;
    } else {
        window.location.href = `../html/PokerTable.html?gameID=${gameID}%name=${playerName}`;
    }
}