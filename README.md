# moralplay
Video installatie: https://youtu.be/Q3qAT_oZ2Xk <img width="1512" alt="thumbnail" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/a7490a54-7b77-4d3b-9942-f757e2c73304">
Hoe het project opstellen: 
1. Steek de lader van de Raspberry Pie in stopcontact
2. Connecteer de ethernet kabel met de Raspberry Pie en laptop
3. Connecteer Breakout with Clamps aan de pinnetjes van de Raspberry Pie<br><img width="250" alt="breakout" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/94a8b3d7-a3ad-45be-968d-73724a632b0c">
4. Connecteer de buttons zoals op de foto:<br><img width="250" alt="buttons" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/cb153e11-f198-49e6-972e-e73eba1818fc"><img width="250" alt="buttons" src="https://github.com/Marthe-Tuyteleers/moralityplay/assets/107477742/65452419-f0ac-48b2-9370-3c004903802e">
6. Open code in Visual Code
7. Open de file in terminal en type: npm run dev
8. Open deze Node-RED link: http://192.168.100.1:1880/#flow/0d3fe92165d1ab3b
9. Open de app VNC Viewer
10. Connect met de Raspberry Pie server
11. Open de terminal op de Raspberry Pie
12. Type: node-red (VALKUIL: type in de terminal van de Rapsberry pie "ifconfig". dit laat het huidige IP-adres zien. Pas deze telkens aan op een andere locatie in main.js)
13. Voila!
<br>
Uitleg code:<br>
HTML:<br>
Het bevat een video-element met de volgende attributen:<br>
1. autoplay: Begint de video automatisch af te spelen wanneer de pagina wordt geladen.<br>
2. gedempt: De audio van de video is gedempt.<br>
3. loop: De video wordt in een lus afgespeeld.<br>
4. De videobron (src) wordt gespecificeerd als “gradient.mp4” met het MIME-type video/mp4.<br><br>
Binnen een container (div met klasse “container”) zijn er twee hoofdsecties:<br>
1. textWrapper: Bevat een afbeelding (gespecificeerd door de img tag met class “main”) en een paragraaf (p) element met een lege ID “text”.<br>
2. buttonWrapper: Bevat twee vragensecties (div-elementen met ID's “question1Wrapper” en “question2Wrapper”):
Elke vraagsectie bevat een afbeelding (gespecificeerd door de tag img met klasse “left” of “right”) en een paragraaf (p)-element met lege ID's “question1” en “question2”.<br><br>
De JavaScript-code wordt geïmporteerd met behulp van een script-tag met type=“module” en src=“/main.js”. Dit script handelt waarschijnlijk interacties met de HTML-elementen af, zoals het bijwerken van tekstinhoud en het verwerken van gebruikersinvoer.
<br><br>
JAVASCRIPT:<br>
1. De code begint met het importeren van een CSS-bestand.<br>
2. Er wordt een WebSocket-verbinding gemaakt met een server op het opgegeven IP-adres en de opgegeven poort.<br>
3. Wanneer de WebSocket verbinding wordt geopend, wordt er een bericht naar de console gestuurd.<br>
4. Wanneer er een bericht wordt ontvangen van de server, wordt dit gelogd naar de console.<br>
5. Afhankelijk van de inhoud van het ontvangen bericht (ofwel “1” of “2”), worden bepaalde acties ondernomen:<br>
  - Als het bericht “1” is, wordt naar de volgende pagina genavigeerd op basis van de structuur van de huidige pagina.<br>
  - Als het bericht “2” is, wordt naar een andere volgende pagina genavigeerd op basis van de huidige paginastructuur.<br>
6. De structuur van de pagina's en hun inhoud wordt gedefinieerd in een matrix genaamd `structuur`, waar elke pagina een ID, tekstinhoud, duur, audiobestand en optionele vragen met mogelijke volgende pagina's heeft.<br>
7. De code selecteert verschillende elementen uit het HTML-document om ze later te manipuleren, zoals tekstelementen en wrappers voor vragen.<br>
8. Er is een functie genaamd `nextPage` die naar de volgende pagina navigeert op basis van de opgegeven pagina-ID. Het werkt de tekstinhoud bij, toont/verbergt vraagelementen, speelt audio af indien beschikbaar en plant de navigatie naar de volgende pagina op basis van de tijdsduur.<br>
9. Als er op de body van het HTML-document wordt geklikt, wordt de `nextPage`-functie geactiveerd om het interactieve verhaal/spel vanaf het begin te starten (pagina 0).
