<h1>Morality Play</h1>
<img width="1512" alt="thumbnail" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/a7490a54-7b77-4d3b-9942-f757e2c73304">
Trailer Morality Play: https://youtu.be/Q3qAT_oZ2Xk <br><br>
Morality Play daagt spelers uit om in de schoenen te staan als een slachtoffer van grensoverschrijdend gedrag.<br>
Spelers kiezen hoe het slachtoffer omgaat met dit gedrag door verschillende dillemma’s terwijl ze de gevolgen van hun acties ontdekken. <br>
Dit helpt hen om empathie en etisch bewustzijn te ontwikkelen op een diepgaande manier.

<h1>Wat heb je nodig?</h1>
<ul>
  <li>Laptop</li>
  <li>VNC Viewer</li>
  <li>2 knoppen</li>
  <li>Raspberry Pi</li>
  <li>Raspberry Pi lader</li>
  <li>Breakout Board</li>
  <li>Pin Kabel</li>
  <li>Ethernet Kabel</li>
  <li>HDMI Kabel</li>
  <li>Lasercutter</li>
  <li>Elektrische draad</li>
  <li>Kableschoenen</li>
  <li>Kabelschoentang</li>
  <li>Kniptang</li>
</ul>
<h1>De code installeren:</h1>
<ol>
  <li>Download of kloon het project lokaal</li>
  <li>Installeer node.js in het project door dit command in de terminal te typen: <br> npm install</li>
</ol>
<h1>Hoe het project opstellen?</h1>
<ol>
<li>Steek de lader van de Raspberry Pi in stopcontact</li>
<li>Connecteer de ethernet kabel met de Raspberry Pi en laptop</li>
<li>Connecteer de Breakout Board via de Pin Kabel aan de pinnetjes van de Raspberry Pi<br>
  <img width="250" alt="breakboard" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/94a8b3d7-a3ad-45be-968d-73724a632b0c"></li>
<li>Connecteer de buttons zoals op de foto aan de hand van elektrische draden en kabelschoenen <br>
<img width="250" alt="buttons" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/cb153e11-f198-49e6-972e-e73eba1818fc">
<img width="250" alt="buttons" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/65452419-f0ac-48b2-9370-3c004903802e">
</li>
<li>Open code in Visual Code</li>
<li>Open de file in terminal en type: npm run dev</li>
<li>Open deze Node-RED link: http://192.168.100.1:1880/#flow/0d3fe92165d1ab3b
<img width="562" alt="node-red" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/f8726ac8-c6fe-49a6-82eb-946bfdc5c00f"><br>
Hieronder zijn de pinnen van de draden van de knoppen:<br>
<img width="281" alt="node-red" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/ad1d337a-2e68-4e3a-8016-53d69090a937">
<img width="281" alt="node-red" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/c6c92512-0c8b-44b2-884e-f245dc96ada5">
</li>
<li>Open de app VNC Viewer</li>
<li>Connect met de Raspberry Pi server</li>
<li>Open de terminal op de Raspberry Pi</li>
<li>Type: node-red (VALKUIL: type in de terminal van de Rapsberry pi "ifconfig". Dit laat het huidige IP-adres zien. Pas deze telkens aan op een andere locatie in main.js)<br>
<img width="562" alt="ipadres" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/04015dd7-b270-4e96-a2ad-86af459f37ac"></li>
<li>Voila!</li>
</ol>
<h1>Uileg code:</h1>
<h2>HTML:</h2>
<h3>Het bevat een video-element met de volgende attributen:</h3>
<ol>
  <li>autoplay: Begint de video automatisch af te spelen wanneer de pagina wordt geladen.</li>
  <li>muted: De audio van de video is gedempt.</li>
  <li>loop: De video wordt in een lus afgespeeld.</li>
  <li>De videobron (src) wordt gespecificeerd als “gradient.mp4” met het MIME-type video/mp4.</li>
  <img width="353" alt="code video" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/4beca5b2-76fc-4ddd-888e-920ac7998984">
</ol>
<h3>Binnen een container (div met klasse “container”) zijn er twee hoofdsecties:</h3>
<ol>
  <li>textWrapper: Bevat een afbeelding (gespecificeerd door de img tag met class “main”) en een paragraaf (p) element met een lege ID “text”.</li>
  <li>buttonWrapper: Bevat twee vragensecties (div-elementen met ID's “question1Wrapper” en “question2Wrapper”):
Elke vraagsectie bevat een afbeelding (gespecificeerd door de tag img met klasse “left” of “right”) en een paragraaf (p)-element met lege ID's “question1” en “question2”.</li>
  <img width="472" alt="code buttenwrapper" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/028d8807-1ef5-42cb-a8a4-40707c998a45">
</ol>

De JavaScript-code wordt geïmporteerd met behulp van een script-tag met type=“module” en src=“/main.js”. Dit script handelt waarschijnlijk interacties met de HTML-elementen af, zoals het bijwerken van tekstinhoud en het verwerken van gebruikersinvoer.
<img width="349" alt="code script tag" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/c4eb6628-9c83-4d99-836f-be98a480bbea">

<h2>JAVASCRIPT:</h2>
<ol>
  <li>De code begint met het importeren van een CSS-bestand.</li>
  <img width="160" alt="code importeren css" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/24fc6340-1d11-432a-aff8-5fcdd710bf53">
  <li>Er wordt een WebSocket-verbinding gemaakt met een server op het opgegeven IP-adres en de opgegeven poort.</li>
  <img width="443" alt="code websocket" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/24e086f5-8973-4a62-90bc-6f8caa89b0c0">
  <li>Wanneer de WebSocket verbinding wordt geopend, wordt er een bericht naar de console gestuurd.</li>
<img width="200" alt="console log" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/c55eb3c3-63b1-41d6-9ff6-f63da9f650d6">
  <li>Wanneer er een bericht wordt ontvangen van de server, wordt dit gelogd naar de console.</li>
  <img width="370" alt="console log" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/cc0763ca-cf9a-41c8-89dc-04d26eb23ad2">
  <li>Afhankelijk van de inhoud van het ontvangen bericht (ofwel “1” of “2”), worden bepaalde acties ondernomen:<br>
  - Als het bericht “1” is, wordt naar de volgende pagina genavigeerd op basis van de structuur van de huidige pagina.<br>
  - Als het bericht “2” is, wordt naar een andere volgende pagina genavigeerd op basis van de huidige paginastructuur.</li>
  <img width="408" alt="berichten" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/91ed2e11-296b-4d10-82a7-eaad17169a1e">
  <li>De structuur van de pagina's en hun inhoud wordt gedefinieerd in een matrix genaamd `structuur`, waar elke pagina een ID, tekstinhoud, duur, audiobestand en optionele vragen met mogelijke volgende pagina's heeft.</li>
  <img width="500" alt="structuur" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/143451f0-2d68-4212-ba4b-b12a78174372">...
  <li>De code selecteert verschillende elementen uit het HTML-document om ze later te manipuleren, zoals tekstelementen en wrappers voor vragen.</li>
  <img width="508" alt="code selecteert" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/8a11499e-1cc5-424e-850b-916d11bb81bb">
  <li>Er is een functie genaamd `nextPage` die naar de volgende pagina navigeert op basis van de opgegeven pagina-ID. Het werkt de tekstinhoud bij, toont/verbergt vraagelementen, speelt audio af indien beschikbaar en plant de navigatie naar de volgende pagina op basis van de tijdsduur.</li>
  <img width="87" alt="audio" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/c52e66b3-4971-49e5-a97b-4bbcf7cb62e0"> <br>
  <img width="502" alt="nextpage" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/b1c41087-2f0e-4619-a279-23265f484194">
  <li>Als er op de body van het HTML-document wordt geklikt, wordt de `nextPage`-functie geactiveerd om het interactieve verhaal/spel vanaf het begin te starten (pagina 0).</li>
<img width="394" alt="nextpage functie" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/ccaf7808-0fa2-4a21-ae77-0024cf6e07f7">
</ol>
<h1>Extra's</h1>
Om de knoppen mooi te displayen hebben we ook een box nodig. De afbeelding hieronder is het plan voor de lasercutter. Op de website "makercase.com" kan je zelf gemakkelijk boxen maken met de gewenste dimensies. Deze box is 30cm lang, 15cm breed en 10cm hoog. Het is gemaakt uit houten plaat van 4mm dik. De twee gaten dienen voor de knoppen. Achteraf had ik ook twee andere gaatjes gemaakt in de zijkanten voor de kabels. De doos past perfect in elkaar door de edge joints. Gebruik houtlijm om een stevige verbinding te maken.
<img width="500" alt="boxpatern" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/73aa8eb2-d681-44cc-94cc-a3ec3da30639">
<img width="500" alt="box" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/268c204b-89c2-4c36-9c04-f34bb0cc7aa0">
