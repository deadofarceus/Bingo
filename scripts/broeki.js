var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const id = params.get('id');

function connectWebSocket() {
    const socket = new WebSocket(`wss://rosin-bingo.glitch.me?id=${id}`);

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
        const message = event.data;

        if (message.startsWith("vote")) {
            // updateChart(message.substring(4));
        } else if (message.startsWith("start")) {
            // createNewChart();
            console.log('Nachricht vom Server erhalten:', message);
        } else if (message.startsWith("stopVoting")) {
            // deleteChart();
            console.log('Nachricht vom Server erhalten:', message);
        } else if (message.startsWith("<mega")) {
            // megaCounter(message.substring(5));
            console.log('Nachricht vom Server erhalten:', message);
        } else {
            renderText(message);
            adjustTextSize();

            console.log('Nachricht vom Server erhalten:', message);
        }
    };
}

// Initialer Verbindungsaufbau
connectWebSocket();

function renderText(tableHtml) {
    const texts = document.querySelectorAll('.displayText');

    let startIndex = tableHtml.indexOf("<textbegin>");
    let endIndex = tableHtml.indexOf("<textbegin>", startIndex + 1);

    for (let index = 0; index < texts.length; index++) {
        if (startIndex !== -1 && endIndex !== -1) {
            if (tableHtml.substring(startIndex + 11, endIndex).includes("marked")) {
                formatText("marked", startIndex, index, tableHtml, endIndex);
            } else if (tableHtml.substring(startIndex + 11, endIndex).includes("impossible")) {
                formatText("impossible", startIndex, index, tableHtml, endIndex);
            } else {
                formatText2(startIndex, index, tableHtml, endIndex);
            }
            startIndex = endIndex;
            endIndex = tableHtml.indexOf("<textbegin>", startIndex + 1);
        } else {
            texts[index].textContent = "";
        }
    }
}

function formatText(cssClass, startIndex, index, tableHtml, endIndex) {
    const texts = document.querySelectorAll('.displayText');
    const textContainers = document.querySelectorAll('.text-container');
    if (cssClass === "marked") {
        startIndex = startIndex + 29;
    } else {
        startIndex = startIndex + 33;
    }
    textContainers[index].classList.add(cssClass);

    const example = tableHtml.substring(startIndex, endIndex);
    var alhye = example.trim();
    if (alhye.includes("hide")) {
        alhye = alhye.replace("hide", "");
    }

    if (cssClass === "impossible") {
        alhye += " (nicht mehr m\u00F6glich)"
    }

    texts[index].textContent = alhye;
}

function formatText2(startIndex, index, tableHtml, endIndex) {
    const texts = document.querySelectorAll('.displayText');
    const textContainers = document.querySelectorAll('.text-container');
    startIndex = startIndex + 22;
    if (textContainers[index].classList.contains("marked")) {
        textContainers[index].classList.remove("marked");
    }
    if (textContainers[index].classList.contains("impossible")) {
        textContainers[index].classList.remove("impossible");
    }

    const example = tableHtml.substring(startIndex, endIndex);
    const alhye = example.trim();

    if (!alhye.includes("hide") && !alhye.includes("Philly")) {
        texts[index].textContent = alhye;
    } else {
        texts[index].textContent = "Verdeckt"
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