var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const id = params.get('id');

function connectWebSocket() {
    const socket = new WebSocket(`wss://crystal-reliable-slipper.glitch.me?id=${id}`);

    socket.onopen = function () {
        console.log('WebSocket-Verbindung hergestellt.');
    };

    socket.onclose = function () {
        console.log('WebSocket-Verbindung geschlossen. Versuche erneut zu verbinden...');
        setTimeout(connectWebSocket, 2000); // Verbindung nach 2 Sekunden erneut aufbauen
    };

    socket.onerror = function (error) {
        console.error('WebSocket-Fehler aufgetreten: ', error);
    };

    socket.onmessage = function (event) {
        const tableHtml = event.data;

        renderText(tableHtml);
        adjustTextSize();

        console.log('Nachricht vom Server erhalten:', tableHtml);
    };
}

// Initialer Verbindungsaufbau
connectWebSocket();

function renderText(tableHtml) {
    const texts = document.getElementsByTagName("text");
    const textContainers = document.querySelectorAll('.text-container');

    let startIndex = tableHtml.indexOf("<textbegin>");
    let endIndex = tableHtml.indexOf("<textbegin>", startIndex + 1);
    
    for (let index = 0; index < texts.length; index++) {
        if (startIndex !== -1 && endIndex !== -1) {
            if (tableHtml.substring(startIndex + 11, endIndex).includes("marked")) {
                startIndex = startIndex + 29;
                textContainers[index].classList.add("marked");

                const example = tableHtml.substring(startIndex, endIndex);
                var alhye = example.trim();
                if (alhye.includes("hide")) {
                    alhye = alhye.replace("hide", "");
                }

                texts[index].textContent = alhye;
            } else {
                startIndex = startIndex + 22;
                textContainers[index].classList.remove("marked");

                const example = tableHtml.substring(startIndex, endIndex);
                const alhye = example.trim();

                if (!alhye.includes("hide") && !alhye.includes("Philly")) {
                    texts[index].textContent = alhye;
                } else {
                    texts[index].textContent = "Verdeckt"
                }
            }
            startIndex = endIndex;
            endIndex = tableHtml.indexOf("<textbegin>", startIndex + 1);
        } else {
            texts[index].textContent = "";
        }
    }
}


function adjustTextSize() {
    const textContainers = document.querySelectorAll('.text-container');
  
    textContainers.forEach((container) => {
        const textElement = container.querySelector('text');

        if (textElement.textContent === "") {
            return;
        }

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        let fontSize = 1;
        let lastFontSize = null;
        textElement.style.fontSize = `${fontSize}px`;

        while (textElement.offsetWidth <= containerWidth && textElement.offsetHeight <= containerHeight) {
            lastFontSize = fontSize;
            fontSize += 1;
            textElement.style.fontSize = `${fontSize}px`;
        }
        textElement.style.fontSize = `${lastFontSize}px`;
    });
}