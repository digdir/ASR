# Veileder om åpen kildekode for offentlig sektor

*Dette er et utkast på en nasjonal veileder for åpen kildekode i offentlig sektor. Utkastet er under utvikling og bør kvalitetssikres før eventuell publisering.*

---

## Hvorfor åpen kildekode i offentlig sektor?

Tilliten til offentlig sektor avhenger av at innbyggere, virksomheter og samarbeidspartnere kan forstå hvordan digitale tjenester utvikles, forvaltes og brukes. Åpenhet og etterprøvbarhet er grunnleggende prinsipper i demokratisk forvaltning. 

Programvare som utvikles med offentlige midler bør derfor som hovedregel være åpen.

### Hovedbegrunnelsen: innsyn og demokratisk kontroll

Hovedbegrunnelsen er ikke bare gjenbruk, selv om det ofte er en viktig gevinst. Den viktigste begrunnelsen er **innsyn, transparens og mulighet for kontroll** med digitale offentlige tjenester.

Åpen kildekode kan bidra til:

- bedre samarbeid på tvers av virksomheter og forvaltningsnivåer
- redusert leverandøravhengighet
- bedre kvalitet
- mer bærekraftig videreutvikling

## Sentrale begreper

### Åpen kildekode

Åpen kildekode betyr at kildekoden gjøres tilgjengelig for innsyn, bruk, endring og videre distribusjon under en godkjent lisens. Koden skrives ofte i samarbeid, og den kan lastes ned, brukes og endres av hvem som helst.

### Åpne standarder

Åpne standarder er offentlig tilgjengelige spesifikasjoner som gjør det mulig å utvikle løsninger som samhandler på tvers av systemer, leverandører og virksomheter.

Åpne standarder og åpen kildekode utfyller hverandre. Standarder legger til rette for samhandling, mens åpen kildekode gir innsyn i hvordan løsningen faktisk er implementert.

### Kostnadshensyn

Bruk av åpen kildekode er ikke kostnadsfritt. Drift, kompetanse, migrering, sikkerhet, vedlikehold og forvaltning krever ressurser. Migreringskostnader (til og fra) bør tas med i vurderingen, og virksomheten må ha kapasitet til å forvalte koden over tid.

## Hovedregel: åpen forvaltning

Offentlig sektor bør som hovedregel utvikle og forvalte programvare åpent. Kode bør publiseres så tidlig som mulig når det er forsvarlig, slik at løsningen kan utvikles åpent fra starten.

Dette gir bedre kontroll, enklere samarbeid og mer etterprøvbarhet enn om kode først utvikles lukket og senere gjøres åpen.

## Vurdering før publisering

Før publisering må virksomheten vurdere om koden kan åpnes uten uakseptabel risiko. Vurderingen bør omfatte:

- informasjonssikkerhet
- personvern
- nasjonal sikkerhet
- taushetsplikt
- forretningsmessige hensyn
- samfunnskritiske forhold

Det bør også vurderes om hele løsningen kan åpnes, eller om bare deler av den bør publiseres.

### Sanering før publisering

Før kode publiseres må repository, dokumentasjon og historikk gjennomgås. Hemmeligheter, personopplysninger, sensitiv informasjon og konfigurasjon som kan misbrukes må fjernes – både fra kode og fra Git-historikk.

Virksomheten bør bruke automatiserte verktøy for å avdekke:

- tilgangsnøkler
- sårbarheter i avhengigheter
- personopplysninger
- sensitiv konfigurasjon

### Minimumskrav til åpent repository

Et åpent repository bør minst inneholde:

- **Lisens** – tydelig angitt i egen fil (f.eks. MIT, EUPL eller annen godkjent lisens)
- **README** – beskrivelse av formålet, hvordan løsningen bygges og testes
- **Kontaktpunkt** – hvordan man kan ta kontakt med teamet eller virksomheten
- **Informasjon om eierskap** – hvem som eier og forvalter koden
- **Retningslinjer for bidrag** – hvordan eksterne kan melde feil eller bidra med endringer

## Sikkerhet og åpenhet

Åpen kildekode kan styrke sikkerheten ved at flere kan oppdage feil, sårbarheter og svakheter. Samtidig forutsetter åpenhet gode rutiner for sanering, sårbarhetsrapportering og rask respons.

Virksomheten må ha kontroll på:

- hva som publiseres
- hvem som forvalter koden
- hvordan sårbarheter rapporteres og håndteres
- hvordan sikkerhetskritiske endringer kan distribueres raskt

### Håndtering av hemmeligheter

Tilgangsnøkler, passord, tokens, sertifikater og annen legitimasjon skal **aldri** publiseres i åpen kildekode. Slike verdier skal håndteres i egne løsninger for sikker nøkkelhåndtering (secrets management).

Kode og hemmeligheter skal være **adskilt**, slik at koden kan publiseres åpent mens hemmelighetene forblir lukket og sikret.

## Når kode eller informasjon må holdes tilbake

Noe kode eller informasjon må holdes tilbake av hensyn til sikkerhet, personvern, taushetsplikt eller samfunnskritiske hensyn. Begrensninger i åpenhet bør være **konkret begrunnet**.

Dette kan gjelde:

- sikkerhetskritisk infrastruktur
- ikke-offentliggjorte regelverksendringer
- informasjon underlagt taushetsplikt
- tekniske detaljer som kan misbrukes til omgåelse eller kontrollformål

Dersom hele løsningen ikke kan åpnes, bør virksomheten vurdere om **deler** av koden, dokumentasjonen, API-spesifikasjoner, testverktøy eller arkitekturbeskrivelser kan publiseres.

### Algoritmer og automatiserte vurderinger

Algoritmer, modeller og automatiserte vurderinger brukes i mange deler av offentlig sektor, blant annet til saksbehandling, prioritering, analyse, kontroll, tilsyn og beslutningsstøtte.

Som hovedregel bør offentlig sektor være åpen om:

- formålet med slike løsninger
- hvilke oppgaver de støtter
- hvilket regelgrunnlag de bygger på
- hvilke datakategorier som brukes
- hvordan resultater tolkes og brukes

Samtidig kan enkelte detaljer ikke publiseres dersom det gir uakseptabel risiko for omgåelse, manipulering, sikkerhetsbrudd eller brudd på personvern og taushetsplikt. 

Dette kan for eksempel gjelde:

- detaljerte kontrollregler
- terskelverdier
- spesifikke deteksjonskriterier eller kontrollregler som kan omgås
- ikke-offentliggjorte regelverksendringer

Vurderingen bør ikke være enten–eller. Selv om hele modellen eller all kildekode ikke kan åpnes, bør virksomheten vurdere om dokumentasjon, overordnet logikk, risikovurderinger, testprinsipper eller deler av løsningen kan publiseres. Målet er størst mulig åpenhet innenfor det som er forsvarlig.

## Ansvar og eierskap

Virksomheten som eier løsningen har ansvar for å vurdere om koden kan åpnes, sikre at krav til lisens, dokumentasjon og sikkerhet er oppfylt, og forvalte koden over tid.

Det må være tydelig:

- hvem som eier repositoryet
- hvem som kan godkjenne endringer
- hvordan bidrag håndteres
- hvem som følger opp feil, sårbarheter og avhengigheter

Dersom eierskap eller forvaltningsansvar overføres, må vurderingene gjennomgås på nytt.

## Kvalitet i åpen kildekode

All programvare i offentlig sektor bør holde god kvalitet, uavhengig av om den er åpen eller lukket. Lav kodekvalitet er **ikke** i seg selv et argument mot åpenhet, men et argument for å arbeide med å forbedre kodekvaliteten.

Åpen kildekode kan bidra til bedre kvalitet fordi kode, dokumentasjon og arkitektur blir mer synlig. Det kan gi bedre struktur, tydeligere ansvar og flere muligheter for fagfellevurdering og ekstern kontroll.

## Oppsummering

Offentlig sektor bør som hovedregel utvikle og forvalte programvare åpent. Åpen kildekode styrker:

- innsyn
- etterprøvbarhet
- samarbeid
- tillit til digitale tjenester

Samtidig må hver virksomhet gjøre konkrete vurderinger av sikkerhet, personvern, juridiske forhold og samfunnsansvar før publisering. 

Målet er ikke å åpne alt uten vurdering, men å **åpne så mye som mulig innenfor det som er forsvarlig**.

---

## Videre arbeid med utkastet

Dette utkastet bør kvalitetssikres og utvikles videre før eventuell publisering. Særlig bør følgende vurderes:

- Justering av språk og tone for å passe en nasjonal veileder
- Presisering av forhold til gjeldende regelverk og styringsdokumenter  
- Klargjøring av ansvar og roller
- Eksempler og praktiske veiledninger
- Referanser til relevante verktøy og ressurser
- Forankring i aktuelle digitaliseringsstrategier og prinsipper

---

*Veilederen er inspirert av praksis fra offentlige virksomheter i Norge og Europa som allerede arbeider med åpen kildekode.*
