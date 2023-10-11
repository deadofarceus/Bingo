class User {
  constructor(name, points, numOfBets, pointsPerBingo) {
    this.name = name;
    this.points = points;
    this.numOfBets = numOfBets;
    this.pointsPerBingo = pointsPerBingo;
  }
}

var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const channel = params.get('channel');
async function getData() {
  try {
    const response = await fetch(`https://modserver-dedo.glitch.me:3000/RosinBingo/data?channel=${channel}`);
    // const response = await fetch(`http://localhost:3000/RosinBingo/data?channel=${channel}`);
    const data = await response.text();
    showData(JSON.parse(data)); // ARRAY in form von [["deadofarceus",1]]
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
  }
}

getData();

function sendMessage() {
  socket.send("GET BINGO DATA");
  console.log('Request sent');
}

function showData(correctBingos) {
  const leaderboardDiv = document.getElementById("leaderboard");

  // Sortiere die Daten nach Punkten (absteigend)
  correctBingos.sort((a, b) => b[1].points - a[1].points);

  correctBingos.forEach((person, index) => {
    const box = document.createElement("div");
    box.classList.add("box");

    const placement = document.createElement("p");
    placement.textContent = `${index + 1}`;
    placement.classList.add("placement");

    const name = document.createElement("p");
    name.textContent = person[0];
    name.classList.add("name");

    const points = document.createElement("p");
    points.textContent = `${person[1].points} Punkte`;
    points.classList.add("points");

    box.appendChild(placement);
    box.appendChild(name);
    box.appendChild(points);

    leaderboardDiv.appendChild(box);
  });
}