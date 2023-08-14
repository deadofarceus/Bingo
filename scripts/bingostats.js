var socket = new WebSocket(`wss://rosin-bingo.glitch.me`);

function connectWebSocket() {
    socket = new WebSocket(`wss://rosin-bingo.glitch.me`);
  
    socket.onopen = function() {
      console.log('WebSocket-Verbindung hergestellt.');
      sendMessage();
    };

    socket.onclose = function() {
      // console.log('WebSocket-Verbindung geschlossen. Versuche erneut zu verbinden...');
      // setTimeout(connectWebSocket, 2000); // Verbindung nach 2 Sekunden erneut aufbauen
    };
  
    socket.onerror = function(error) {
      console.error('WebSocket-Fehler aufgetreten: ', error);
    };

    socket.onmessage = function (event) {
        const data = event.data;

        showData(JSON.parse(data)); // ARRAY in form von [["deadofarceus",1]]

        console.log('Nachricht vom Server erhalten:', data);
    };
}

// Initialer Verbindungsaufbau
connectWebSocket();

function sendMessage() {
    socket.send("GET BINGO DATA");
    console.log('Request sent');
}

function showData(correctBingos) {
    const leaderboardDiv = document.getElementById("leaderboard");

    // Sortiere die Daten nach Punkten (absteigend)
    correctBingos.sort((a, b) => b[1] - a[1]);

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
      points.textContent = `${person[1]} Punkte`;
      points.classList.add("points");
      
      box.appendChild(placement);
      box.appendChild(name);
      box.appendChild(points);
      
      leaderboardDiv.appendChild(box);
    });
}