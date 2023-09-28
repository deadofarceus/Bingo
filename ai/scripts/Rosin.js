const lebensWeisheiten = [
    "Wenn Chancen nicht anklopfen, baue eine Tür!",
    "Manchmal hält man alle Asse in der Hand - doch das Leben spielt Schach.",
    "In jeder Minute Ärger verlieren wir 60 Sekunden Lebensfreude.",
    "Du erfährst das, was du glaubst.",
    "Wer für seine Beschränkungen kämpft, wird sie behalten.",
    "Man kann nicht dankbar und unglücklich zugleich sein.",
    "Wer ein guter Mensch ist, verliert keine Freunde. Sie verlieren dich.",
    "Der Weg aus Angst heraus geht immer durch Angst hindurch.",
    "Wem du die Schuld gibst, dem gibst du die Macht.",
    "Innen muss etwas brennen, damit außen etwas leuchten kann.",
    "Es gibt Feststeller und Absteller.",
    "Die Tat unterscheidet das Ziel vom Traum.",
    "Vorne ist immer da, wo sich keiner auskennt.",
    "Bessere Aussichten schaffen bessere Einsichten.",
    "Für gute Gewohnheiten bezahlen Sie in der Gegenwart, für schlechte in der Zukunft.",
    "Oft fühlt sich das Leben wie ein Test an, für den man nicht gelernt hat.",
    "Menschen sind aggressiver, wenn sie sich unsicher fühlen.",
    "Wer immer in Eile ist, begegnet niemandem - nicht einmal sich selbst.",
    "Es gibt mehr Menschen, die aufgeben als jene, die scheitern.",
    "Lebe dein Leben, nicht das der anderen.",
    "Kleine Schritte sind besser als keine Schritte.",
    "Sei die Veränderung, die du in der Welt sehen willst.",
    "Wer langsam geht, kommt auch zum Ziel.",
    "Achte auf deine Gedanken, denn sie sind der Anfang deiner Taten.",
    "Ob ein Mensch klug ist, erkennt man an seinen Antworten; die Weisheit an seinen Fragen.",
    "Wenn der Klügere stets nachgibt, regieren die Dummen die Welt.",
    "Arroganz ist das Selbstbewusstsein des Minderwertigkeitskomplexes.",
    "EIN Tag oder ERSTER Tag - du entscheidest!",
    "Man sieht sich immer zwei Mal im Leben.",
    "Unsere Sichtweise entscheidet über unsere Zufriedenheit.",
    "Wenn ein Drache steigen will, muss er gegen den Wind fliegen.",
    "Wenn sich niemand über dein Werk aufregt, ist es bedeutungslos.",
    "Bevor du mit dem Kopf durch die Wand willst, frage dich: Was will ich im Nebenzimmer?",
    "Nichts ist hilfreicher als eine Herausforderung, um das Beste in einem Menschen hervorzubringen.",
    "Auf Dauer nimmt die Seele die Farbe deiner Gedanken an.",
    "Das höchste Gut ist die Harmonie der Seele mit sich selbst.",
    "Begeisterung ist Dünger für das Gehirn.",
    "Wenn du es nicht versuchst, wirst du nie wissen, ob du es kannst.",
    "Das Schönste, was wir erleben können, ist das Geheimnisvolle.",
    "Denke nicht so oft an das, was dir fehlt, sondern an das, was du hast.",
    "Der größte Feind des Fortschritts ist nicht der Irrtum, sondern die Trägheit.",
    "Lebe als würdest du morgen sterben. Lerne als würdest du für immer leben.",
    "Ziel des Lebens ist es nicht, ein erfolgreicher Mensch zu sein - sondern ein wertvoller.",
    "In der Wut verliert der Mensch seine Intelligenz.",
    "Der wahre Beruf des Menschen ist, zu sich selbst zu kommen.",
    "Auch im Alphabet kommt Anstrengung vor Erfolg.",
    "Wer sich selbst alles zutraut, wird andere übertreffen.",
    "Wer einen Misserfolg als kleinen Umweg betrachtet, verliert nie sein Ziel aus den Augen.",
    "Auch eine Enttäuschung bedeutet einen Schritt vorwärts.",
    "Leiden, Irrtum und Widerstandskraft halten das Leben lebendig.",
    "Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren.",
    "Sag einer Person, dass sie mutig ist, und du hilfst ihr es zu werden.",
    "Was du liebst, lass frei. Kommt es zurück, gehört es dir für immer.",
    "Neue Wege entstehen dadurch, dass man sie geht.",
    "Ohne Leiden bildet sich kein Charakter.",
    "Erfahrung ist der beste Lehrmeister. Nur das Schulgeld ist teuer.",
    "Mit dem Wissen wächst der Zweifel.",
    "Arbeit ist das beste Mittel gegen Verzweiflung.",
    "Eine Wahrheit kann erst wirken, wenn der Empfänger für sie reif ist.",
    "Der Kopf ist rund, damit das Denken die Richtung ändern kann.",
    "Jedermann klagt über sein Gedächtnis, niemand über seinen Verstand.",
    "Wer Stroh im Kopf hat, fürchtet den Funken der Wahrheit.",
    "Heute kennt man von allem den Preis, von nichts den Wert.",
    "Der unzufriedene Mensch findet keinen bequemen Stuhl.",
    "Dumme Gedanken hat jeder, aber der Weise verschweigt sie.",
    "Es gibt nur einen Weg, um Kritik zu vermeiden: Nichts tun, nichts sagen, nichts sein.",
    "Ein bisschen mehr Humor, täterätete uns allen ganz gut.",
    "Wenn dich das Leben in die Knie zwingt - tanze Limbo!",
    "Nicht jeder, der aus dem Rahmen fällt, war vorher im Bilde.",
    "Wer mit beiden Beinen auf dem Boden steht, kommt nicht vorwärts.",
    "Wer nie vom Weg abkommt, bleibt auf der Strecke.",
    "Wer nach allen Seiten offen ist, ist meistens nicht ganz dicht.",
    "Niemand, der sein Bestes gegeben hat, hat es später bereut.",
    "Das Leben ist zu kurz für irgendwann.",
    "Das kalte Wasser wird nicht wärmer, wenn du später springst.",
    "Wer sich selbst alles zutraut, wird andere übertreffen.",
    "Ein Diamant ist ein Stück Kohle, das Ausdauer hatte.",
    "Schmerz ist vergänglich, Erfolg bleibt für immer.",
    "Wer nur mit dem Herzen gut sieht, ist blind.",
    "Everybodys Darling is Everybodys Depp.",
    "Ich hatte in meinem Leben schon eine Menge Nahidioterfahrungen.",
    "Wenn das Leben ein Theater ist: Such dir die Rolle aus, die Spaß macht!",
    "Dummheit ist auch eine natürliche Begabung.",
    "Auch Umwege erweitern unseren Horizont.",
    "Liebe dich selbst, als ob dein Leben davon abhängt.",
    "Wer eine hilfreiche Hand sucht, findet sie am unteren Ende seines Armes.",
    "Alter schützt vor Liebe nicht, aber Liebe vor dem Altern!",
    "Wenn dir das Leben einen Geburtstag schenkt, mach ein Fest daraus!",
    "Kümmere dich nicht um die Zahl der Jahre, sondern darum, dass die Jahre zählen!",
    "Jeder Geburtstag ist die Erinnerung daran, die Vergangenheit zu akzeptieren, die Gegenwart zu lieben und sich auf die Zukunft zu freuen.",
    "Alt werden, das ist Gottes Gunst. Jung bleiben, das ist Lebenskunst.",
    "Je älter du wirst, desto mehr erkennst du: Es geht nicht darum, wie du aussiehst oder was du besitzt. Sondern um die Persönlichkeit, die du geworden bist.",
    "Man ist in den besten Jahren, wenn man die guten hinter sich hat.",
    "Es ist nicht Lebenslänge, sondern die Lebenstiefe, die zählt.",
    "Jeder, der sich die Fähigkeit erhält, Schönes zu erkennen, wird nie alt werden.",
    "Der Apfel lehrt uns zu begreifen, die Besten - das sind die Reifen.",
    "Der höchste Genuss besteht in der Zufriedenheit mit sich selbst.",
    "Wer hohe Türme bauen will, muss lange beim Fundament verweilen.",
    "Fange nie an aufzuhören - und höre nie auf anzufangen.",
    "Mut steht am Anfang des Handelns, Glück am Ende.",
    "Hindernisse und Schwierigkeiten sind Stufen, auf denen wir in die Höhe steigen.",
    "Liebe ist nur ein Wort - bis jemand kommt und ihm eine Bedeutung gibt.",
    "Entfernung kann nur Körper trennen, aber niemals Herzen.",
    "Wenn du still bist, verstehen dich nur Menschen, die dich fühlen.",
    "Der Liebe zu begegnen, ohne sie zu suchen, ist der einzige Weg, um sie zu finden.",
    "Nicht die Schönheit entscheidet, wen wir lieben, sondern die Liebe entscheidet, wen wir schön finden.",
    "Liebe ist nicht alles, was wir brauchen. Aber wir brauchen sie, um alles zu haben.",
    "Kleider machen Leute, aber das Herz macht den Menschen.",
    "Bei der falschen Person kannst du nichts richtig machen. Bei der richtigen Person kannst du nichts falsch machen.",
    "Wenn dir jemand nicht mehr aus dem Kopf geht, dann gehört er in dein Herz.",
    "Liebe ist wie ein Vollbad. Einlassen, warm halten & darin baden, bis man schrumpelig wird.",
    "Wenn wir jemanden wirklich lieben, können wir genau der Mensch sein, der wir wirklich sind.",
    "Echte Liebe braucht keine großen Gesten. Sie zeigt sich in den kleinsten Blicken und Berührungen.",
    "Solange man neugierig ist, kann einem das Alter nichts anhaben.",
    "Das einzig Wichtige im Leben sind die Spuren der Liebe, die wir hinterlassen, wenn wir gehen.",
    "Die Vernunft kann nur reden. Es ist die Liebe, die singt.",
    "Ein Tropfen Liebe ist mehr als ein Ozean Verstand.",
    "Liebe ist ein Glas, das zerbricht, wenn man es zu unsicher oder zu fest fasst.",
    "Was du liebst, lass frei. Kommt es zurück, gehört es dir für immer.",
    "Liebe ist kein Solo. Liebe ist ein Duett. Schwindet sie bei einem, verstummt das Lied.",
    "Die Summe unseres Lebens sind die Stunden, wo wir lieben.",
    "Freundschaft ist verstehen ohne Worte.",
    "Falsche Freunde glauben Gerüchten. Echte Freunde glauben an Dich.",
    "Es gibt Freunde im Leben und es gibt Freunde fürs Leben.",
    "Freunde sind die Familie, die wir uns selbst aussuchen.",
    "Freundschaft ist Heimat unabhängig vom Ort.",
    "Freundschaft ist wie Liebe - nur mit Verstand.",
    "Ein bisschen Freundschaft ist mir mehr wert als die Bewunderung der Welt.",
    "Freundschaft muss nicht perfekt sein. Nur echt.",
    "Freundschaft wärmt die Seele, wenn sich die Sonne versteckt.",
    "Wahre Freunde stolpern in dein Leben und bleiben mit voller Absicht.",
    "Mit den richtigen Menschen im Rücken kann dich nichts umwerfen.",
    "Freundschaft ohne Vertrauen ist wie eine Blume ohne Duft.",
    "Freunde fragen nicht nach deinem Weg, sondern gehen ihn einfach mit dir.",
    "Freundschaft, das ist eine Seele in zwei Körpern.",
    "Einen sicheren Freund erkennt man in unsicherer Sache.",
    "Die besten Freunde sind diejenigen, mit denen man über dieselben Dinge schweigen kann.",
    "Lebensfreude ist ein Maßanzug: Unglückliche Menschen versuchen, den eines anderen zu tragen.",
    "Du kannst die Zukunft verändern mit dem, was du heute tust.",
    "Scheitern ist nicht das Gegenteil von Erfolg. Es ist ein Teil davon.",
    "Mach es, bevor du bereust, es nicht getan zu haben!",
    "Wenn du fliegen willst, musst du loslassen, was dich runterzieht.",
    "Wenn du aufgeben willst, denk daran, warum du angefangen hast.",
    "Du lächelst - und die Welt verändert sich.",
    "Dreh dein Gesicht zur Sonne, dann fallen die Schatten hinter dich.",
    "Glück ist ein Parfum, das du nicht auf andere sprühen kannst, ohne selbst ein paar Tropfen abzubekommen.",
    "Die glücklichsten Menschen haben nicht unbedingt das Beste. Aber sie machen das Beste aus dem, was sie haben.",
    "Die schönsten Momente kann man nicht erzwingen, sie entstehen zufällig auf dem Weg.",
    "Niemand kriegt beim ersten Mal alles richtig hin. Was uns ausmacht, ist, wie wir aus unseren Fehlern lernen.",
    "Ein Optimist findest immer einen Weg. Ein Pessimist findet immer eine Sackgasse.",
    "Es gibt nur zwei Tage in deinem Leben, an denen du nichts ändern kannst: Der eine ist gestern und der andere ist morgen.",
    "In drei Worten kann ich alles zusammenfassen, was ich über das Leben gelernt: Es geht weiter.",
    "Zufriedenheit bedeutet nicht alles zu haben, sondern das Beste aus allem zu machen.",
    "Wem genug zu wenig ist, dem ist nichts genug.",
    "Das Vergleichen ist das Ende des Glücks und der Anfang der Unzufriedenheit.",
    "Es ist schwer, das Glück in uns zu finden. Aber es ist ganz unmöglich, es anderswo zu finden.",
    "Man ist nur unglücklich, weil man Zeit hat, zu überlegen, ob man unglücklich ist oder nicht.",
    "Das Glück Deines Lebens hängt von der Beschaffenheit Deiner Gedanken ab.",
    "Wenn man glücklich ist, soll man nicht noch glücklicher sein wollen.",
    "Das Glück des Lebens besteht nicht darin, weniger Schwierigkeiten zu haben, sondern sie alle glorreich zu überwinden.",
    "Lasse nie zu, dass du jemandem begegnest, der nicht nach der Begegnung mit dir glücklicher ist.",
    "Nicht das Beginnen wird belohnt, sondern einzig und allein das Durchhalten.",
    "Ausdauer wird früher oder später belohnt - meistens aber später.",
    "Sorgen sind wie Gespenster: Wer sich nicht vor ihnen fürchtet, dem können sie nichts anhaben.",
    "Es ist besser, ein einziges kleines Licht anzuzünden, als die Dunkelheit zu verfluchen.",
    "Man spürt selten, was Glück ist, aber man weiß meistens, was Glück war.",
    "Wer will, findet Wege, wer nicht will, findet Gründe.",
    "Der sicherste Weg zum Erfolg ist immer, es doch noch einmal zu versuchen.",
    "Unsere größte Schwäche liegt im Aufgeben. Der sicherste Weg zum Erfolg ist immer, es noch einmal zu versuchen.",
    "Ich habe aus meinen Rückschlägen oft mehr gelernt als aus meinen Erfolgen.",
    "Nicht der Schnellste und Stärkste siegt, sondern der, der denkt, dass er es kann.",
    "Es gibt keinen Misserfolg. Entweder du hast Erfolg oder du lernst.",
    "Man lernt eine Zeile von einem Sieg und ein Buch aus einer Niederlage.",
    "Die Lösung ist immer einfach, man muss sie nur finden.",
    "Alle Dinge sind schwer bevor sie leicht werden.",
    "Jeder Erfolg, den man erzielt, schafft einen Feind. Man muss mittelmäßig sein, wenn man beliebt sein will.",
    "Habe keine Angst, das Gute aufzugeben, um das Großartige zu erreichen.",
    "Wer aufhört, besser werden zu wollen, hört auf, gut zu sein.",
    "Wer aufhört, besser zu werden, hat aufgehört, gut zu sein.",
    "Es ist ein großer Vorteil im Leben, die Fehler, aus denen man lernen kann, möglichst früh zu begehen.",
    "Denken ist die schwerste Arbeit, die es gibt. Das ist wahrscheinlich auch der Grund, warum sich so wenige Leute damit beschäftigen.",
    "Wer nicht von der Vergangenheit lernt, wird von der Zukunft bestraft.",
    "Ein Gramm Wissen ist mir lieber, als einhundert Tonnen Meinung.",
    "Der Nachteil der Intelligenz besteht darin, dass man ununterbrochen gezwungen ist, dazuzulernen.",
    "Der Mensch soll lernen, nur die Ochsen büffeln.",
    "Bildung ist das, was übrig bleibt, wenn wir vergessen, was wir gelernt haben.",
    "Du lernst nicht zu laufen, indem du Regeln folgst. Du lernst es, indem du hinfällst.",
    "Gerade Leute, die nichts lernen, lernen auch nichts daraus, dass sie nichts gelernt haben.",
    "Ein Buch ist ein Spiegel, wenn ein Affe hineinsieht, so kann kein Apostel herausgucken.",
    "Lernen ist wie Rudern gegen den Strom. Hört man damit auf, treibt man zurück.",
    "Wer einen Fehler gemacht hat und ihn nicht korrigiert, begeht einen zweiten.",
    "Ein Kopf ohne Gedächtnis ist eine Festung ohne Besatzung.",
    "Eine Investition in Wissen bringt noch immer die besten Zinsen.",
    "Von dem was wir noch nicht wissen können wir am meisten lernen.",
    "Auch das schlechteste Buch hat seine gute Seite: die letzte."
]

var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const id = params.get('id');
const frankRedetGif = document.getElementById('frankDiv');

const rosinVoiceSettings = {
    similarity_boost: 0.02,  // Ändere die Similarity Boost (beachte den zulässigen Bereich)
    stability: 0.95,  // Ändere die Stability (beachte den zulässigen Bereich)
    style: 0,  // Ändere den Style (beachte den zulässigen Bereich)
    use_speaker_boost: true  // Nutze Speaker Boost (true/false)
};

var socket;

function connectWebSocket() {
    socket = new WebSocket(`wss://rosin-bingo.glitch.me?id=${id}`);

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

        const randomIndex = Math.floor(Math.random() * lebensWeisheiten.length);
        const randomLebensWeisheit = lebensWeisheiten[randomIndex];

        var textToSpeech;
        
        if (data.text.startsWith("Danke")) {
            textToSpeech = data.text + randomLebensWeisheit;
        } else {
            textToSpeech = data.text;
        }


        console.log(message);
        const data = JSON.parse(message)

        const headers = {
            "xi-api-key": data.api_key,
            "Content-Type": "application/json"
        };

        const requestBody = JSON.stringify({
            text: textToSpeech,
            voice_settings: rosinVoiceSettings
        });

        const response = fetch(`https://api.elevenlabs.io/v1/text-to-speech/${data.voiceID}`, {
            method: 'POST',
            headers: headers,
            body: requestBody
        })
            .then(res => res.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const audio = new Audio(url);

                audio.addEventListener('play', () => {
                    frankRedetGif.style.backgroundImage = "url(\"../resources/FrankRedet.gif\")";
                });

                audio.addEventListener('ended', () => {
                    frankRedetGif.style.backgroundImage = "url(\"../resources/Frankstopp.png\")";
                    const msg = id + "<audioended";
                    socket.send(msg);
                });

                audio.play();

            });
    };
}

// Initialer Verbindungsaufbau
connectWebSocket();