class Account {
    summonerId;
    name;
    hashtag;
    accountId;
    puuid;
    tier;
    rank;
    leaguePoints;
    combinedLP;
    wins;
    loses;
    hotstreak;

    constructor(
        summonerId,
        name,
        hashtag,
    ) {
        this.summonerId = summonerId;
        this.name = name;
        this.hashtag = hashtag;
    }
}

var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const id = params.get('id');

var socket;
const endTime = 1706137199000;
var timerInterval;
var pingInterval;
var better = "";
var connectAgain = true;
var savedAccounts;

function connectWebSocket() {
    socket = new WebSocket(`wss://modserver-dedo.glitch.me?id=${id}`);
    // socket = new WebSocket(`ws://localhost:8080?id=${id}&type=${type}&channel=${channel}`);

    pingInterval = setInterval(ping, 60000);

    socket.onopen = function () {
        console.log('WebSocket-Verbindung hergestellt.');
        // if (id === "LPRace2024GET") {
            socket.send("getLeagueData");
        // }
    };

    socket.onclose = function () {
        console.log('WebSocket-Verbindung geschlossen. Versuche erneut zu verbinden...');
        if (id === "LPRace2024" && connectAgain) {
            clearInterval(pingInterval);
            connectWebSocket(); // Verbindung nach 2 Sekunden erneut aufbauen
        }
    };

    socket.onerror = function (error) {
        console.error('WebSocket-Fehler aufgetreten: ', error);
    };

    socket.onmessage = function (event) {
        const message = event.data;

        if (message === "pong") {
            return;
        }
        
        const data = JSON.parse(message);
        const accounts = data.accounts;
        
        if (savedAccounts && !eloDiffernce(accounts)) {
            return;
        }
        savedAccounts = accounts;
        
        document.getElementById("V9Player").innerHTML = '';
        document.getElementById("NNOPlayer").innerHTML = '';
        
        var V9ELo = 0;
        var NNOELo = 0;
        var besterSpieler = undefined;
        
        accounts.forEach(player => {
            if (!besterSpieler || besterSpieler.combinedLP < player.combinedLP) {
                besterSpieler = player;
            }
            if (player.name === "Sola" || player.name === "Kutcher") {
                V9ELo += player.combinedLP
                generatePlayer(player.name, player.tier, player.rank, player.leaguePoints, "V9");
            } else {
                NNOELo += player.combinedLP
                generatePlayer(player.name, player.tier, player.rank, player.leaguePoints, "NNO");
            }
        });
        
        setELO("V9", V9ELo);
        setELO("NNO", NNOELo);
        
        if (V9ELo > NNOELo) {
            betterTeam("V9");
            worseTeam("NNO");
            better = "V9";
        } else if (V9ELo < NNOELo) {
            betterTeam("NNO");
            worseTeam("V9");
            better = "NNO";
        }
        
        coronation(besterSpieler.name);

        if (!timerInterval) {
            updateTime();
            timerInterval = setInterval(updateTime, 499);
        }
    };
}

function updateTime() {
    const timeDifference = endTime - Date.now();

    if (timeDifference <= 0) {
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        clearInterval(pingInterval);
        socket.close();
        connectAgain = false;
        showWinner();
        return;
    }
    // show time
    const totalSeconds = Math.floor(timeDifference / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    document.getElementById("timer").innerText = formattedTime;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function ping() {
    socket.send("ping");
}

// Initialer Verbindungsaufbau
connectWebSocket();

function coronation(name) {
    var existingImg = document.getElementById(name + "img");
    var overlayImg = document.createElement('img');
    overlayImg.src = rPath + "crown.png";
    overlayImg.alt = 'Overlay Image';
    overlayImg.style.position = 'absolute';
    overlayImg.style.bottom = '0';
    overlayImg.style.left = '0';
    overlayImg.style.width = "70px"
    overlayImg.style.height = "70px"
    existingImg.appendChild(overlayImg);
}

function betterTeam(team) {
    const eloP = document.getElementById(team + "ELO");
    eloP.style.border = "2px solid rgba(0, 250, 0, 0.4)"
}

function worseTeam(team) {
    const eloP = document.getElementById(team + "ELO");
    eloP.style.border = "2px solid rgba(250, 0, 0, 0.2)"
}

function setELO(team, LP) {
    var eloP = document.getElementById(team + "ELO");
    eloP.innerHTML = team + " " + LP + " LP";
}

const rPath = "../ressources/";

function generatePlayer(playerName, eloSymbolSrc, rank, lpValue, team) {
    var playerDiv = document.createElement('div');

    var imageDiv = document.createElement('div');
    imageDiv.id = playerName + "img";
    imageDiv.classList.add("profileImgDiv");

    var img1 = document.createElement('img');
    img1.classList.add("profileImg");
    img1.src = rPath + playerName + ".png";
    img1.alt = '';
    imageDiv.appendChild(img1);

    var pText = document.createElement('p');
    pText.textContent = playerName;

    var eloDiv = document.createElement('div');
    eloDiv.className = 'ELO';

    var eloImg = document.createElement('img');
    eloImg.src = rPath + eloSymbolSrc + ".png";
    eloImg.alt = '';

    var lpP = document.createElement('p');
    if (eloSymbolSrc !== "EMERALD" && eloSymbolSrc !== "DIAMOND") {
        lpP.textContent = lpValue + ' LP';
    } else {
        lpP.textContent = rank + " " + lpValue + ' LP';
    }

    eloDiv.appendChild(eloImg);
    eloDiv.appendChild(lpP);

    playerDiv.appendChild(imageDiv);
    playerDiv.appendChild(pText);
    playerDiv.appendChild(eloDiv);

    var parentplayerDiv = document.getElementById(team + "Player");
    parentplayerDiv.appendChild(playerDiv);
}

function showWinner() {
    if (better === "NNO") {
        document.getElementById('V9').classList.add('hide'); 
        document.getElementById(better).classList.add('winNNO');
    } else {
        document.getElementById('NNO').classList.add('hide'); 
        document.getElementById(better).classList.add('winV9');
    }
    document.getElementById('VS').classList.add('hide');

    document.getElementById("timer").innerText = better + " GEWINNT!";
}

function eloDiffernce(accounts) {

    for (let i = 0; i < accounts.length; i++) {
        const newA = accounts[i];
        const oldA = savedAccounts[i];
        if (newA.combinedLP !== oldA.combinedLP) {
            return true;
        }
    }
    return false;
}

// Beispielaufruf der Funktion mit Dummy-Werten
// generatePlayer('SOLA', 'CHALLENGER', 'I', 95, 'V9');
