var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const id = params.get('id');

function connectWebSocket() {
    const socket = new WebSocket(`wss://rosin-bingo.glitch.me?id=${id}`);
  
    socket.onopen = function() {
        console.log('WebSocket-Verbindung hergestellt.');
    };
  
    socket.onclose = function() {
        console.log('WebSocket-Verbindung geschlossen. Versuche erneut zu verbinden...');
        setTimeout(connectWebSocket, 2000); // Verbindung nach 2 Sekunden erneut aufbauen
    };
  
    socket.onerror = function(error) {
        console.error('WebSocket-Fehler aufgetreten: ', error);
    };
  
    socket.onmessage = function(event) {
        const tableHtml = event.data;
        const tableContainer = document.getElementById('matrixTable');
    
        tableContainer.innerHTML = renderTable(tableHtml);
    
        renderText(tableHtml);
    
        adjustFontSize();
    
        console.log('Nachricht vom Server erhalten:', tableHtml);
    };
}
  
// Initialer Verbindungsaufbau
connectWebSocket();

function renderTable(tableHtml) {
    const endIndex = tableHtml.indexOf("<textbegin>");
    if (endIndex !== -1) {
        return tableHtml.substring(0, endIndex);
    }
    return tableHtml;
}

function renderText(tableHtml) {
    const textareas = document.getElementsByTagName("textarea");

    let startIndex = tableHtml.indexOf("<textbegin>");
    let endIndex = tableHtml.indexOf("<textbegin>", startIndex + 1);
    
    for (let index = 0; index < textareas.length; index++) {
        if (startIndex !== -1 && endIndex !== -1) {
            if (tableHtml.substring(startIndex + 11, endIndex).includes("marked")) {
                startIndex = startIndex + 29;
            } else {
                startIndex = startIndex + 22;
            }
            const example = tableHtml.substring(startIndex, endIndex);
            textareas[index].textContent = example.trim();
            startIndex = endIndex;
            endIndex = tableHtml.indexOf("<textbegin>", startIndex + 1);
        } else {
            textareas[index].textContent = "";
        }
    }
}

function adjustFontSize() {
    var textareas = document.getElementsByTagName("textarea");

    var count = 0;
    for (let index = 0; index*index < textareas.length; index++) {
        count++;
    }

    for (var i = 0; i < textareas.length; i++) {
        var textarea = textareas[i];
        textarea.style.fontSize = "25px"; // Reset font size
    
        var contentHeight = textarea.scrollHeight;
        var textareaHeight = textarea.clientHeight;
        
        // Calculate the ratio of content height to textarea height
        var ratio = contentHeight / textareaHeight;
        
        // Adjust the font size based on the ratio
        var fontSize = 25; // Initial font size
        var maxFontSize = 40; // Maximum font size
        var minFontSize = 14; // Minimum font size
        
        // Calculate the new font size within the specified range
        var newFontSize = Math.max(minFontSize, Math.min(maxFontSize, fontSize / ratio));
        
        textarea.style.fontSize = newFontSize + "px";
        textarea.style.height = (650 - ((count + 1) * 5))/count + "px";
    }
}
