# Veiledning i åpen kildekode for offentlig sektor

## Hva er egentlig åpen kildekode – og hvorfor bør du bry deg?

La oss starte med det mest grunnleggende: åpen kildekode betyr at kildekoden i programvaren er tilgjengelig for alle, og at den kan brukes, endres og deles videre under gitte vilkår (Open Source Initiative). Det høres kanskje abstrakt ut, men realiteten er at de aller fleste digitale løsninger i din virksomhet allerede er bygget på åpen kildekode – enten du har bestemt det bevisst eller ikke. Moderne webløsninger er gjerne sammensatt av hundrevis eller tusenvis av åpne komponenter (GitHub Docs, Open Source Guides).

Her er det viktige poenget: spørsmålet er ikke *om* du bruker åpen kildekode, men *hvordan* du forvalter den. Når leverandørene dine bygger systemene du kjøper, henter de komponenter fra fellesskapet – fra React og Kubernetes til mindre biblioteker for datoformatering eller sikker kommunikasjon. Disse avhengighetene er allerede en del av din risikoprofil, uavhengig av om du selv velger å dele kode åpent (NIST SSDF, UK Government OSS Guidance).

Åpen kildekode er heller ikke et teknisk "ja eller nei", men en arbeidsform. Det handler om hvordan du velger å organisere utvikling, hvem som kan bidra, hvordan dokumentasjon lages, og hvordan løsningen forvaltes over tid (TODO Group Guides, NAV Retningslinjer). I offentlig sektor, der løsninger ofte har lang levetid og høye krav til etterprøvbarhet, blir dette særlig viktig. Når du kan se *hvordan* en løsning fungerer, kan du også vurdere om den er forsvarlig, sikker og egnet for formålet – og du kan la andre gjøre det samme (Digdir Arkitekturprinsipper, Code.gouv Free Software Unit).

For virksomheter som utvikler løsninger med kunstig intelligens er dette ekstra relevant: åpen kildekode gir mulighet for uavhengig kontroll, ekstern validering og bedre grunnlag for tillit.

## Hva kan du oppnå – og hva koster det egentlig?

La oss være ærlige: gevinster kommer ikke av seg selv. Men når åpen kildekode brukes bevisst, kan effekten være betydelig.

**Gjenbruk på tvers reduserer dobbeltarbeid.** Når du bygger en løsning åpent, kan andre virksomheter ta den i bruk eller bygge videre på den – og du kan gjøre det samme med deres løsninger. Dette er særlig viktig i offentlig sektor, der mange har overlappende behov. I stedet for at ti kommuner eller tre statlige etater utvikler sin egen variant av samme funksjonalitet, kan dere samarbeide om én god løsning (Digdir Arkitekturprinsipper, KS Felles kommunal arkitektur, Code.gov Playbook).

**Leverandøruavhengighet og konkurranse.** Når kildekoden er åpen, kan flere leverandører delta i videreutvikling, vedlikehold og support. Det gir deg større fleksibilitet og bedre forhandlingsposisjon. Små og mellomstore bedrifter får også bedre mulighet til å konkurrere, fordi de kan bygge videre på eksisterende løsninger i stedet for å starte fra scratch (Gov.uk Be open and use open source, TODO Group Guides).

**Kvalitet gjennom innsyn.** Når kode er åpen, kan flere øyne se over den. Det betyr flere som kan oppdage feil, foreslå forbedringer og bidra til bedre sikkerhet. For offentlig sektor gir det også legitimitet: borgere, journalister og kontrollorganer kan se hvordan systemene faktisk fungerer (Open Source Guides, NAV Retningslinjer).

Men – og dette er viktig – åpen kildekode er ikke gratis. Kostnader forsvinner ikke, de flytter seg. Du sparer kanskje lisenspenger, men du må investere i forvaltning: dokumentasjon, testing, oppgradering av avhengigheter, sikkerhetshåndtering og bidragsstyring (TODO Group Guides, UK Government OSS Guidance). En realistisk forventning er at åpen kildekode kan gi *bedre ressursutnyttelse over tid*, ikke nødvendigvis lavere kostnader på dag én.

**Risiko finnes – men den finnes uansett.** Moderne digitale løsninger er avhengige av lange kjeder av tredjepartskomponenter, og noen av disse er vedlikeholdt av små fellesskap med begrensede ressurser. Det betyr at risikostyring må handle om å forstå avhengighetene dine, holde oversikt over sårbarheter, og bidra aktivt til de miljøene du er avhengig av (NIST SSDF, SLSA, Sigstore, Gov.uk Open source software best practices). Denne risikoen er allerede der – spørsmålet er om du håndterer den bevisst eller lar den være usynlig.

## Slik kommer du i gang – seks grep som fungerer

Du trenger ikke å gjøre alt på én gang. Start med disse seks grunnleggende grepene, som kan implementeres gradvis og tilpasses din virksomhets modenhet.

### 1. Avklar hva dere faktisk vil oppnå

Før du velger lisens, verktøy eller publiseringskanal: hva er målet? Skal koden bare deles for transparens, eller ønsker dere aktive bidrag fra andre? Er det intern gjenbruk på tvers av team, eller samarbeid med andre virksomheter dere er ute etter? Uten et tydelig svar på dette blir resten tilfeldig (TODO Group Guides, Code.gov Playbook). 

*Konkret tiltak:* Skriv ned målet i én setning, og bruk det som rettesnor når dere senere skal velge lisens, dokumentasjonsnivå og forvaltningsmodell.

### 2. Håndter lisenser tidlig – ikke som sluttaktivitet

Mange prosjekter utsetter lisensspørsmål til siste fase, og møter da unødvendig mye juridisk usikkerhet. Valget av lisens bør gjøres tidlig, basert på hva dere vil oppnå. Skal andre kunne bruke koden kommersielt? Må endringer deles tilbake? Kan den kombineres med proprietær programvare? (GitHub Licensing a repository, choosealicense.com, OSI, DINUM Licences libres).

Dere må også ha oversikt over *hvilke lisenser som gjelder for komponenter dere bruker*. Moderne prosjekter har ofte hundrevis av avhengigheter, og noen lisenser stiller krav som kan påvirke hva dere kan gjøre med koden (SPDX).

*Konkret tiltak:* Velg én standardlisens for nye prosjekter (for eksempel MIT, Apache 2.0 eller EUPL 1.2), og lag en rutine for å scanne og dokumentere tredjepartslisenser automatisk i byggeprosessen.

### 3. Skriv dokumentasjon som faktisk hjelper andre

Kode uten dokumentasjon er som en låst dør: teknisk åpen, men i praksis utilgjengelig. God dokumentasjon handler ikke om å beskrive hva koden gjør linje for linje, men om å svare på spørsmålene noen faktisk har: Hvordan installerer jeg dette? Hva er avhengighetene? Hvordan bidrar jeg? Hvor rapporterer jeg feil? (Open Source Guides, GitHub Docs, NAV Retningslinjer).

Dokumentasjon er ikke bare et service til andre – det er også et verktøy for å redusere personavhengighet i ditt eget team. Når ny utviklere skal sette seg inn i koden, eller når teamet skal ta over etter at noen slutter, blir god dokumentasjon avgjørende.

*Konkret tiltak:* Etabler en minimumsstandard: README med formål, installasjon og bruk; CONTRIBUTING med bidragsregler; LICENSE-fil; og enkel arkitekturbeskrivelse. Bruk disse som sjekkliste før publisering.

### 4. Bygg sikkerhet inn – ikke på

Sikkerheten i åpen kildekode handler ikke om å holde kode hemmelig, men om å ha kontroll med hva som inngår, hvor det kommer fra, og hvordan det vedlikeholdes. Det betyr systematisk håndtering av avhengigheter, automatisk scanning for sårbarheter, attestering av byggeløp, og signering av artefakter før distribusjon (NIST SSDF, SLSA, Sigstore).

Dette høres kanskje komplisert ut, men verktøystøtten er god og blir stadig bedre. Når sikkerhetskontroller inngår i standard utviklingsprosess (CI/CD-pipeline), reduseres både risiko og kostnad ved feilretting senere.

*Konkret tiltak:* Aktiver automatisk sårbarhetsskanning (for eksempel Dependabot, Snyk eller tilsvarende) i alle repos, og etabler en fast rutine for å vurdere og oppgradere avhengigheter månedlig eller kvartalsvis.

### 5. Organisér ansvar tydelig

Hvem eier beslutninger om hva som skal inn i koden? Hvem følger opp sikkerhet? Hvem svarer på henvendelser fra eksterne bidragsytere? Mange virksomheter har teknisk kompetanse, men mangler klare ansvarslinjer. Enkle roller gir størst effekt (TODO Group Guides, NAV Retningslinjer, Code.gouv Free Software Unit):

- **Produkteier**: prioriterer funksjonalitet og forvalter veikart  
- **Teknisk ansvarlig**: sikrer kodekvalitet, arkitektur og avhengighetsstyring  
- **Juridisk kontakt**: vurderer lisensspørsmål og kontraktsforhold  
- **Sikkerhetskontakt**: følger opp sårbarheter og sikkerhetshendelser  

Disse rollene kan være deltid, og kan kombineres i små team, men de må være *navngitte og kjente*.

*Konkret tiltak:* Opprett en enkel RACI-modell (Responsible, Accountable, Consulted, Informed) for åpen kildekode-aktiviteter, og publiser den internt.

### 6. Bidra aktivt til miljøene dere er avhengige av

Hvis virksomheten din bruker kritiske åpne komponenter, er du allerede avhengig av fellesskap som kanskje er underfinansierte og presset på kapasitet. Bidrag tilbake er ikke bare "fint å gjøre" – det er del av ansvarlig risikostyring (TODO Group Guides, Gov.uk Be open and use open source).

Bidrag kan være mange ting: kode, feilrapporter, testing, dokumentasjon, eller økonomisk støtte. Virksomheter som deltar aktivt får ofte bedre innsikt i veikart, raskere respons på kritiske feil, og større påvirkning på prioriteringer som betyr noe for offentlig sektor.

*Konkret tiltak:* Identifiser de tre viktigste åpne komponentene teamet ditt er avhengig av, og vurder hvordan dere kan bidra – enten med utviklertid, dokumentasjonsinnsats eller finansiering.

## Hva bør dere gjøre nå?

Åpen kildekode er ikke et prosjekt med en startdato og en sluttdato – det er en arbeidsform som modnes over tid. Du trenger ikke å gjøre alt på én gang, men du bør starte et sted.

**Start der dere er.** Har dere allerede kode som kan deles? Eller bruker dere komponenter dere er kritisk avhengige av? Begynn med det som gir mest verdi akkurat nå: det kan være å publisere én komponent åpent for å teste prosessen, eller det kan være å etablere oversikt over hvilke avhengigheter dere faktisk har.

**Bygg kompetanse gradvis.** Åpen kildekode krever ikke spesialkompetanse, men det krever nye arbeidsvaner. Gi teamene mulighet til å lære underveis, eksperimenter i trygge rammer, og del erfaringer på tvers av virksomheten. Se også på hva andre offentlige virksomheter gjør: NAV, Altinn, Kartverket og Meteorologisk institutt har alle delt både kode og erfaringer åpent (NAV GitHub, Altinn Studio Docs, Kartverket Norgeskart, MET Fri kildekode).

**Standardiser det som kan standardiseres.** Lisenspolicy, dokumentasjonsmaler, sikkerhetsrutiner og ansvarsroller trenger ikke å være unike for hvert prosjekt. Lag felles rammer som team kan ta i bruk, slik at ikke alle må starte fra bunnen av (TODO Group Guides, Code.gouv Free Software Unit).

**Samarbeid med andre.** Du er ikke alene. Det finnes et voksende nettverk av offentlige virksomheter i Norge og Europa som jobber med de samme utfordringene. Finn muligheter til å dele erfaring, utvikle felles løsninger, og bygge kompetanse sammen (KS Felles kommunal arkitektur, Interoperable Europe Act, EU Open Source Observatory).

Åpen kildekode handler i bunn og grunn om å erstatte gjenoppfinnelse med gjenbruk, isolasjon med samarbeid, og lukkethet med innsyn. Det er ikke alltid enkelt, men det er ofte verdt det – både for virksomheten din og for samfunnet som helhet.

---

## Kilder som ligger til grunn for denne veiledningen

Denne teksten bygger på et bredt sett av norske og internasjonale kilder:

**Norske veiledere og prinsipper:**  
- Digdir: Veileder for åpne data  
- Digdir: Arkitekturprinsipper  
- NAV: Retningslinjer for åpen kildekode  
- KS: Felles kommunal arkitektur  

**Internasjonale praksisguider:**  
- GitHub Docs: Open Source og Licensing a repository  
- Open Source Guides  
- TODO Group Guides  
- UK Government: OSS guidance  
- Gov.uk: Be open and use open source  
- Code.gov Playbook  
- DINUM (Frankrike): Code.gouv Free Software Unit  
- Open Source Initiative (OSD)  
- Choose an open source license  

**Sikkerhet og leveransekjede:**  
- NIST: Secure Software Development Framework (SSDF)  
- OpenSSF: SLSA  
- Sigstore  
- SPDX  
- Gov.uk: Open source software best practices and supply chain risk management  

**Eksempler og referanseprosjekter:**  
- NAV GitHub  
- Altinn Studio Docs  
- Kartverket: Norgeskart  
- Meteorologisk institutt: Fri kildekode  

**Europeisk samarbeid:**  
- Interoperable Europe Act  
- EU Open Source Observatory (OSOR)  
- EU Open Source Strategy
