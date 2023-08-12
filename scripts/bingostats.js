const baseUrl = 'https://crystal-reliable-slipper.glitch.me';

// Hier passt du den Pfad an, um die gewünschten Endpunkte auf deinem Server zu erreichen
const dataUrl = `${baseUrl}/data`;

fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        console.log('Empfangene Daten:', data);
        // Hier kannst du mit den empfangenen Daten arbeiten
    })
    .catch(error => {
        console.error('Fehler bei der Anfrage:', error);
    });