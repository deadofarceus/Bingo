var socket = new WebSocket(`wss://rosin-bingo.glitch.me`);

function connectWebSocket() {
    socket = new WebSocket(`wss://rosin-bingo.glitch.me`);
  
    socket.onopen = function() {
      console.log('WebSocket-Verbindung hergestellt.');
      sendMessage();
    };

    socket.onclose = function() {
      console.log('WebSocket-Verbindung geschlossen. Versuche erneut zu verbinden...');
      setTimeout(connectWebSocket, 2000); // Verbindung nach 2 Sekunden erneut aufbauen
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
    //TODO zeig einfach die map als Leaderboard sollte nicht os schwer sein Clueless
    var textfeld = document.getElementById("test");
    textfeld.innerText = correctBingos;
}