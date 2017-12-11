### Hur gick det att komma igång med databasen MongoDB?
Det krånglade lite i början med installation och connecta till den. Så jag började om och gjorde det sakta och systematiskt och då fungerade det. Vet dock inte riktigt varför det inte fungerade första gången. Men så ska det väl vara, något fungerar andra gången fast du gör på exakt samma sätt.

När det gäller enhetstester, så kollade jag på ditt repo som du skrev. Gjorde exakt som du hade gjort men lyckades ändå inte. Vet inte vad som blir fel. När det gäller testa MongoDB så fick jag ge upp det. Samma sak gäller där, vet inte hur jag ska lyckas med det. Får se om man lyckas med något av det i projektet. Annars kanske det blir svårt att komma upp i 70% kodtäckning.

### Vilken syn har du på databaser inom konceptet NoSQL?
Vet faktiskt inte riktigt. Har aldrig tidigare jobbat med det och de enda NoSQL-databaserna jag har hört talas om är MongoDB och Redis. Men av det lilla jag har gjort nu så tror jag ändå det kan vara ganska trevligt. Speciellt om man är van vid JavaScript och JSON. För det är ju lite som att jobba med en JSON-databas, något som verkar smidigt och bra. Sen kanske man ska testa på Mongoose när man har blivit lite mer van vid “ren” MongoDB.

### Reflektera över skillnader och likheter mellan relationsdatabaser och databaser inom NoSQL.
En av de stora skillnaderna är hur det lagras. Relationsdatabaser är tabellbaserade och sparar data i kolumner och rader. NoSQL är dokumentbaserade och använder key-value för att spara data.

Relationsdatabaser använder SQL medans NoSQL inte har ett specifikt språk på samma sätt. Språket skiljer sig mer mellan olika NoSQL-databaser än vad det gör mellan olika relationsdatabaser.

Jag tror det är viktigt att kunna båda delarna och veta när man ska använda vad. NoSQL kommer växa och bli ännu mer populärt i samband med att all data växer. Något NoSQL dock skulle må bra av är ett standardiserat språk, så som SQL används i relationsdatabaser.

### Vilka är dina tankar om asynkron programmering med JavaScript?
I början när jag stötte på asynkron JavaScript, typ webapp, så kändes det lite knöligt och jobbigt. Det kändes udda att till exempel en funktion som kördes innan en annan blev klar efter den andra. Nu har man dock blivit lite mer van vid det och det börjar kännas som man har lite mer koll på det. Nu finns det ju också “async” och “await” som kanske kan underlätta lite ibland. Som sagt, en vanesak tror jag och ju mer man använder det desto naturligare kommer det bli.

### Hur känner du för Docker och det sättet vi jobbar med tjänster i kontainrar?
Jag fortsätter på mitt spår att vara lite tveksam till Docker. Jag börjar däremot tycka att det är lite smidigt ibland. Det var ju väldigt enkelt att få upp en MongoDB med hjälp av Docker. Lite text i “docker-compose.yml” och så var det klart. Det var ju inte heller särskilt svårt att få kontainrarna att prata med varandra. VSCode har tydligen ett plugin för Docker för att underlätta skapandet och hantering av kontainrar, har själv inte testat det men kanske är värt att ta en titt på.
