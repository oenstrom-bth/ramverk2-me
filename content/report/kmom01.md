### Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.

Jag tycker Express känns som ett bra och smidigt ramverk för att bygga en server med JavaScript. Går snabbt att få upp en fungerande server, speciellt om man kör deras generator. Kanske det var tanken med namnet? Ett annat ramverk som jag har tittat lite på men aldrig använt är Restify. Restify ser ut att vara väldigt likt Express, många saker som ser nästan exakt likadana ut. Det känns nästan som att de har plockat ut alla delar som behövs för att göra ett REST API och gjort det till ett eget ramverk. Och det gör väl inget, kanske bara är bra. Så Restify kan kanske vara ett alternativ om man endast tänker göra ett REST API.

Express och Pug påminner om Flask och Jinja2 som vi jobbade med i oopython-kursen. Både Express och Flask är relativt små ramverk, alla funktioner är inte intryckta i ramverket utan man utökar ramverket med plugins. Du har möjlighet att bygga upp det på ett sätt som passar dig, du är inte tvingad till jobba med ett visst mönster. Pug däremot gillar jag inte lika mycket som Jinja2. Ser ingen anledning till att göra en egen “förenklad syntax” för att skriva html. Det var inte svårt att skriva Pug, men onödigt “lära” sig det. Får se om man byter det mot något annat. Blir kanske först i kmom03 när man börjar tänka på projektet.


### Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?

De tre katalogerna värda att nämna är “routes”, “src” och “views”. Route-filerna tänkte jag att man ska kunna separera routsen i så många filer man känner för. Detta gör jag genom att ha en “index.js” i katalogen “routes” som jag inkluderar i “app.js”. I “index.js” inkluderar jag sedan alla andra router-filer och monterar dem på passande route med “router.use()”. Smidigt sätt för att dela upp routsen och montera dem på olika routes, lite liknande Anax. Med “src”-katalogen tänkte jag också lite Anax-liknande. Just nu som exempel har jag underkatalogen “User” som innehåller controller och modell. Sedan kallar jag på funktionerna i controller-filen från route-filen “users.js”. Funktionerna i controller-filen renderar sedan en matchande vy-fil från “view”-katalogen. Finns kanske lite att förbättra och förenkla inför tester, men får ta det i kommande kursmoment.


### Använde du någon form av scaffolding som Express erbjuder?

Jag började utan att scaffolda och testade lite. Sedan köra jag bara en standard express generator för att se hur de gjorde. Det var inte så värst stor skillnad så jag körde på deras scaffolding. Sedan så ändrade jag lite med routsen som jag skrev tidigare.


### Jobbar du med Markdown för innehållet, eller annat liknande?

För tillfället har jag bara gjort kursmoment-texterna i Markdown som jag sedan inkluderar på rapport-sidan. Funderar på att ändra lite hur det fungerar och även lägga till stöd för Markdown i till exempel förstasidan och about-sidan.
