### Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?
Jag valde att köra på Jest som testverktyg, då jag tyckte det kändes väldigt lätt och smidigt att använda. Det går att konfigurera Jest via “package.json” eller via en separat JS-fil. Jag valde att lägga det i “package.json” då jag endast konfigurerar två saker. Största anledningen till att jag valde Jest är att den automatiskt tar hand om kodtäckning med hjälp av Istanbul. Slipper installera och fixa det själv, behöver endast köra “jest --coverage” för att det ska fungera.

### Berätta om cin CI-kedja och reflektera över de valen du gjorde?
Det första jag kör är Travis. Väldigt enkelt och snabbt att få Travis att köra igenom dina tester i repot. I princip behöver du endast konfigurera Travis att använda rätt språk, sen som standard, för Node.js, kör Travis “npm install” och “npm test”.

Det andra CI-verktyget jag använder är Scrutinizer, en favorit. Du får i princip Travis i Scrutinizer, plus kodkvalité och kodtäckning. Blir lite mer konfiguration för att få det att fungera som du vill. Ställa in kodtäckning och kanske exkludera lite testfiler eller minifierade filer. Annars tycker jag det fungerar väldigt bra och du får egentligen allt som behövs i ett enda verktyg.

Tredje verktyget är Code Climate. Här använder jag dock inte deras kodtäckning utan bara Maintainability. Den beräknar och betygsätter kodens tekniska skuld. Kan inte säga så mycket om den än, då koden den körs på är väldigt liten. Får se längre fram när det blir mer kod och mer komplicerad kod.

Det sista verktyget är BetterCodeHub. BCH utvärderar din kod utifrån 10 riktlinjer och ger dig en poäng mellan 1 och 10 beroende på hur många av dessa riktlinjer du uppfyller. Samma sak gäller, kan inte säga så mycket om den än. Får se när det blir mer kod som körs igenom.

### Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainers och om du ser någon nytta med detta.
Docker krånglade lite med att bygga images då det var någon befintlig image som stökade. Sen försökte jag ta bort den och då gick inte det för att någon container hindrade det. Det slutade med att jag tog bort alla containers och alla images och först då gick det att bygga imagen. Att sedan köra enhetstester via containers var ju inga svårigheter.

Jag har fortfarande lite svårt att se nyttan med att köra enhetstester i olika Docker-kontainers. Kan ju kanske bero lite på att jag tycker allt det här tjafset runt omkring den “riktiga” programmeringen inte är så kul. Och tycker man att något inte är så kul så är det ju svårare att se nyttan med det.

### Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?
Tycker det gick helt okej. Det känns lite ovant och konstigt att skriva tester till kod som inte finns. Men jag tror att jag har börjat förstå TDD-konceptet lite. Jag körde på att komma på en metod som behövs, sedan försökte jag komma på alla nödvändiga testfall som behövde köras. Efter det så blev det ju faktiskt lättare att göra metoden. Det är väl det här som är tanken med TDD, att det ska bli lättare att skriva en “clean” metod då du vet sen innan till exempel vilka parametrar och returvärden som kommer användas och skickas tillbaka. Får väl fortsätta använda det ett tag och se hur man känner längre fram.

### Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.
Jag planerar göra ett Black Jack-spel i form av en desktop-applikation. Det jag har tänkt är att man kan skapa ett konto och sedan logga in. Väl inloggad kan du välja ett bord att sätta dig vid. Vid varje bord ska man kunna vara ett antal spelare. Sen är det vanlig Black Jack. Kanske att man vill ha en liten chat mellan spelare också. Får se lite hur det blir. Har inte hunnit tänka på allt i detalj än. I det här kursmomentet blev att jag endast gjorde två klasser på serversidan. Så ingen server eller klient som kan köras. Jag vet att Mos körde Black Jack som exempel, har pratat med han och det var inga problem att jag gjorde det också. Har inte tittat på hans kod, så klasserna och testerna har jag gjort själv. Inte för att jag tror att du skulle tro det, utan ville bara klargöra det för säkerhets skull.

Så det blir väl Express, MongoDB och Socket.io i backenden. I klienten blir det i alla fall Electron, sen har jag inte riktigt bestämt mig om jag ska använda React eller inte. Får se hur det känns när jag börjar bygga klienten. Blir mycket nya tekniker och ramverk på samma gång. Hoppas man hinner med det.
