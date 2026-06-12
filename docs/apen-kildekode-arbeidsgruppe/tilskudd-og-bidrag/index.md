---
layout: default
title: Hvordan kan vi bidra?
description: Tiltak, tilskudd og bidrag til åpen kildekode
---

## Hvorfor bør offentlig sektor bidra tilbake?

### Vi er allerede avhengige av åpen kildekode

Offentlig sektor bruker åpen kildekode i digitale tjenester, utviklingsverktøy, infrastruktur, felleskomponenter og leverandørløsninger. Mye av denne bruken er lite synlig, men den er likevel en del av den digitale grunnmuren vi bygger på.

Når vi bruker åpen kildekode, er vi også avhengige av miljøene som utvikler og vedlikeholder den. Mange av disse miljøene har begrenset kapasitet til sikkerhetsoppdateringer, feilretting, dokumentasjon og videreutvikling. Derfor bør offentlig sektor ikke bare hente verdi fra åpen kildekode, men også bidra til at viktige prosjekter forblir robuste og bærekraftige.

### Å gi tilbake reduserer risiko

Bidrag tilbake handler ikke bare om idealisme. Det handler om sikkerhet, kvalitet og langsiktig forvaltning. Dersom sentrale åpne komponenter ikke vedlikeholdes, kan det gi økt teknisk risiko, sårbarheter og større avhengighet til enkeltpersoner eller enkeltleverandører.

For offentlig sektor er dette også god ressursbruk. Åpen kildekode skaper verdi fordi mange kan bruke, dele og forbedre den. Da bør også offentlige virksomheter bidra til miljøene de er avhengige av – særlig der programvaren har stor betydning for offentlige tjenester.

### Flere måter å bidra på

Bidrag trenger ikke bare være penger. Offentlig sektor kan bidra med kode, feilrettinger, dokumentasjon, sikkerhetstesting, testmiljøer, opplæring eller faglig deltakelse i relevante prosjekter og fellesskap. For mange prosjekter kan tid, kompetanse og tydelige prioriteringer være like viktig som økonomisk støtte.

Det kan også være aktuelt å støtte teknisk infrastruktur, for eksempel speiling av sentrale pakkeregistre eller kildekodearkiv. Anskaffelser kan brukes mer aktivt ved å stille krav om kontroll på åpen kildekode, dokumenterte avhengigheter og bidrag tilbake til prosjekter leverandørene bygger på.

## Bidrag med penger

Det åpenbare tiltaket for å støtte åpen kode er å bidra med penger til utviklerne. Dette er ikke nødvendigvis "rett fram" å få til for oss innenfor rammene som lovverk og forskrifter setter. Vi har jo f.eks. i løpet av denne prosessenn lært at det å opprette økonomiske tilskuddsordninger er en veldig omfattende prosess med tidkrevende behandling på høyt politisk nivå. Vi vil i dette dokumentet derfor forsøke å peke på andre konkrete tiltak som støtter åpen kode og utviklerne som lager den, men på måter som ikke krever så mye prosess. (mer om behov/bakgrunn - Digdir)

## Hosting

Distribusjon av software-komponenter (ofte omtalt som "pakker") gjøres i stor grad i form av sentrale "registre" for de ulike økosystemene. Eksempler på disse er [Maven Central](https://central.sonatype.com) og [npmjs](https://www.npmjs.com). Disse registrene lagrer og serverer enorme mengder data, og dette krever teknisk infrastruktur i form av servere og nettverk. I dag finansieres dette i stor grad av private selskaper og ulike "foundations". Et tilak vi kan bidra med er å sette opp speiling av et eller flere av disse registrene på vår infrastruktur. Vi har mange miljøer som er kapable til dette i offentlig sektor. Kanskje slike speil kan være kandidater til å kjøre i en "offentlig sky"? Speiling har flere positive effekter. De avlaster og frigjør kapasitet i de sentrale registrene, og samtidig står vi bedre rustet til å få tak i de bibliotekene vi er avhengige av dersom de sentrale registrene av en eller annen grunn skulle bli utilgjengelige. 

De facto standard for lagring og versjonshåndtering av kildekode er i dag [Git](https://git-scm.com). Dette er et distribuert system, men de langt fleste velger å benytte den "hostede" varianten fra [GitHub](https://github.com) (som p.t. eies av Microsoft). GitHub opererer med en "freemium"-modell der de fleste tjenestene er gratis for open source og privatpersoner, mens de tar betalt fra "enterprises". Mange bygger også koden sin i "GitHub Actions" som er en av tilleggstjenestene. Det å ha all kode sentralisert har mange fordeler, men også ulemper mtp "vendor lock-in" og at man blir veldig avhengig av tilgjengeligheten til en enkelt leverandør. Et tiltak vi kan se på er å tilby en eller flere av denne typen tjenester selv (noen etater gjør dette allerede). 

## Eksisterende tilskuddsordninger

Det finnes i dag en rekke tilskuddsordninger for mange ulike formål. Kan støtte til åpen kildekode havne inn under en av disse? Tilgang på god og åpen (og dermed gratis) programvare kan jo sees på som et tiltak for å støtte digitalisering og robusthet. Finnes det andre ordninger og organisasjoner vi kan hekte oss på?

## Anskaffelser

I tillegg til direkte støtte kan man se for seg andre og mere indirekte måter å bidra. Det offentlige er jo en stor innkjøper av software, og er derfor i stand til å sette krav ifm anskaffelser. Her kan man se for seg flere ulike typer krav:

- Systemer vi anskaffer skal bestå av en viss andel åpen kode.
- Leverandørene må bidra tilbake til de prosjektene de benytter i sine løsninger i form av penger og/eller kode. 

## Bidra med kode

For de mindre prosjektene som ikke er backet av store selskaper og foundations er utviklerkapasitet ofte et minst like stort problem som pengemangel. Dette belyses bl.a. i [The State of Open Source Report](https://opensource.org/blog/the-2026-state-of-open-source-report). For å støtte disse prosjektene kan man se for seg at utviklere i offentlige etater får lov til å bruke en andel av arbeidstiden til å bidra til prosjekter man benytter. Et ferskt eksempel på et prosjekt som måtte legge inn årene pga manglende kapasitet er [Ingress NGINX](https://www.kubernetes.dev/blog/2025/11/12/ingress-nginx-retirement/). Dette var en kjernekomponent i infrastrukturen til både offentlige etater og store selskaper, og de berørte har måttet bruke store ressurser på å få på plass en erstatter.

Størrelsen og kompleksiteten på oppgavene som de ulike open source-prosjektene trenger hjelp til vil variere. Mengden tid som utviklere bør bruke på å bidra vil da variere tilsvarende, noe som gjør det vanskelig å sette veldig detaljerte krav av typen "hver utvikler kan maksimalt bruke 2 timer på open source pr. uke". Hvis et bidrag "upstream" kan redusere kompleksitet i ens eget produkt senere kan det være verdt å bruke mere tid på enkelt oppgave. Kost/nytte-verdien her må vurderes av hvert enkelt team fra gang til gang. 

Den økende bruken av språkmodeller og stadig større mengder datakraft har ført til at antallet sårbarheter som oppdages i open source-kode øker. Dette legger enda mere press på de som vedlikeholder, noe som igjen bidrar til utbrenthet eller at prosjekter forlates. Det er derfor enda viktigere at vi som bruker disse prosjektene bidrar til å redusere belastningen.

---

## Innspill - Forslag til struktur: Tilskudd og bidrag til åpen kildekode

(ToDo:

- Se på EU finaniseringsmodeller. Må knyttes til innholdet over: Legg inn at det vil komme sterkere føringer på dette, og at bruk av åpen kildekode vil bli sterkere styrt fremover

- [Støtteregisteret Brønnøysundregistrene](https://www.brreg.no/om-oss/registrene-vare/om-stotteregisteret/)

)

## Hvordan kan offentlig sektor bidra tilbake?

### Innledning

Offentlig sektor bruker allerede åpen kildekode i digitale tjenester, utviklingsverktøy, infrastruktur, felleskomponenter og leverandørløsninger. Mange av disse komponentene er lite synlige i hverdagen, men de er likevel en del av den digitale grunnmuren offentlige tjenester bygger på.

Denne siden beskriver behov vi ser, og mulige tiltak som kan bidra til at viktige åpne kildekodeprosjekter blir mer robuste, sikre og bærekraftige over tid.

Tiltakene er ment som et kart over mulighetsrommet, ikke som ferdige anbefalinger. De er ikke vurdert opp mot anskaffelsesregelverk, tilskuddsregelverk, økonomiregelverk, statsstøtteregler eller andre juridiske og forvaltningsmessige rammer. Slike vurderinger må gjøres i en senere fase, når aktuelle tiltak skal prioriteres, konkretiseres og eventuelt utredes videre.

Formålet her er derfor å vise hvilke typer bidrag offentlig sektor kan vurdere, hvilke behov de svarer på, og hvilke spørsmål som bør avklares før tiltakene kan gjennomføres.

---

## Hvorfor bør offentlig sektor bidra tilbake?

### Vi er allerede avhengige av åpen kildekode

Offentlig sektor bygger i praksis på et stort antall åpne komponenter. Det gjelder både programvare vi utvikler selv, løsninger vi kjøper fra leverandører, skytjenester, utviklingsverktøy, integrasjoner og infrastruktur.

Spørsmålet er derfor ikke om offentlig sektor bruker åpen kildekode, men hvordan vi forvalter avhengighetene på en ansvarlig måte.

Når vi bruker åpen kildekode, blir vi også avhengige av miljøene som utvikler og vedlikeholder den. Mange prosjekter drives av enkeltpersoner, små team eller frivillige fellesskap. Dersom slike prosjekter ikke har kapasitet til sikkerhetsoppdateringer, feilretting, dokumentasjon og videreutvikling, kan risikoen øke for alle som er avhengige av dem.

### Å gi tilbake reduserer risiko

Bidrag tilbake handler ikke bare om idealisme. Det handler om sikkerhet, kvalitet, beredskap og langsiktig forvaltning.

Når offentlig sektor bidrar til prosjektene vi er avhengige av, kan vi redusere risiko for:

- vedlikeholdsetterslep
- kjente og ukjente sårbarheter
- leverandørinnlåsing
- manglende dokumentasjon
- tap av kompetanse
- fragmenterte lokale tilpasninger
- duplisering av arbeid i flere virksomheter

Bidrag tilbake kan også gi bedre ressursbruk. Dersom flere offentlige virksomheter er avhengige av samme komponent, kan det være mer effektivt å bidra til én felles løsning enn at hver virksomhet håndterer problemer hver for seg.

---

## Hva mener vi med å bidra?

Å bidra tilbake kan bety flere ting enn å betale penger. Offentlig sektor kan blant annet bidra med:

- kode, feilrettinger og sikkerhetsforbedringer
- dokumentasjon, testing og kvalitetssikring
- arbeidstid fra utviklere og fagpersoner
- deltakelse i styringsgrupper, fagfora og brukerfellesskap
- krav i anskaffelser om bidrag tilbake og ansvarlig forvaltning
- finansiering av vedlikehold, sikkerhet, dokumentasjon eller infrastruktur
- spleiselag mellom virksomheter som er avhengige av samme løsning
- støtte til hosting, speiling, pakkeregistre eller annen teknisk infrastruktur

---

## Hvilke behov skal tiltakene møte?

Før tiltak vurderes, bør vi være tydelige på hvilke behov de skal svare på.

Sentrale behov er:

1. **Vedlikehold**  
   Feilretting, oppgraderinger og håndtering av teknisk gjeld.

2. **Sikkerhet**  
   Sårbarhetshåndtering, sikkerhetsrevisjoner og trygg leveransekjede.

3. **Dokumentasjon**  
   Bedre gjenbruk, enklere innføring og lavere terskel for bidrag.

4. **Forvaltning**  
   Tydelig eierskap, prioritering, release-prosesser og ansvar.

5. **Infrastruktur**  
   Stabile registre, byggesystemer, testmiljøer, speiling og arkivering.

6. **Kompetanse og fellesskap**  
   Utviklere, brukere og forvaltere som faktisk har tid til å bidra.

---

## Mulige tiltak

### 1. Bidra med arbeidstid og kompetanse

Offentlige virksomheter kan legge til rette for at utviklere og fagpersoner bruker noe arbeidstid på åpne prosjekter virksomheten selv er avhengig av.

Dette kan gjelde:

- feilretting
- dokumentasjon
- sikkerhetstesting
- issue-triage
- kodegjennomgang
- forbedring av bygg- og testløp
- deltakelse i prosjektets faglige fellesskap

Dette bør ikke nødvendigvis styres med en fast prosentsats for alle. Noen bidrag er små og løpende, mens andre kan være større enkeltbidrag som reduserer risiko eller vedlikeholdskostnader i egen løsning.

### 2. Bidra gjennom anskaffelser

Offentlig sektor kan bruke anskaffelser til å finansiere utvikling, vedlikehold, dokumentasjon, drift, sikkerhetsarbeid og support rundt åpne løsninger.

Det kan også vurderes krav om at leverandører:

- dokumenterer åpne avhengigheter
- håndterer sårbarheter
- bidrar tilbake til prosjekter de bygger på
- publiserer forbedringer som åpen kildekode der det er hensiktsmessig
- unngår unødvendige proprietære tilpasninger
- leverer dokumentasjon som gjør gjenbruk mulig

Dette kan være særlig relevant der leverandøren leverer en løsning som er avhengig av åpne komponenter, eller der det offentlige finansierer videreutvikling som bør kunne gjenbrukes.

### 3. Direkte økonomiske bidrag og sponsorordninger

Direkte støtte kan gis til utviklere, prosjekter eller organisasjoner som forvalter viktig åpen kildekode.

Dette kan skje gjennom:

- sponsorplattformer
- donasjoner
- fakturabaserte ordninger
- stiftelser
- medlemskap
- fiscal hosts
- fond eller programmidler

Dette sporet kan være effektivt der behovet er tydelig og beløpene relativt små, men det krever avklaringer om hjemmel, budsjett, mottaker, dokumentasjon, habilitet og eventuell rapportering.

### 4. Tilskudd og programmidler

En mer formalisert modell er tilskudd, programmidler eller en tverr-offentlig pott for å støtte åpne prosjekter med dokumentert offentlig nytte.

En slik ordning kan rettes mot:

- vedlikehold
- sikkerhet
- dokumentasjon
- forvaltning
- gjenbruk
- interoperabilitet
- kritisk digital infrastruktur

Mulige spor kan være:

- etableringsstøtte for nye offentlige åpne prosjekter
- forvaltningsstøtte for modne løsninger som brukes av flere
- strategisk støtte til kritiske komponenter offentlig sektor er avhengig av
- støtte til dokumentasjon og innføring
- støtte til sikkerhetsgjennomganger og sårbarhetshåndtering

### 5. Spleiselag og felles forvaltningsmodeller

Der flere virksomheter bruker samme åpne løsning, kan de gå sammen om å finansiere forvaltning og videreutvikling.

Dette kan organiseres som:

- brukerfellesskap
- felles styringsgruppe
- program eller portefølje
- avtale mellom virksomheter
- samarbeid med eksisterende forvaltningsaktør
- stiftelse eller annen uavhengig struktur

Fordelen er at kostnader og prioriteringer deles. Ulempen er at det krever tydelig styring, mandat og avklaring av ansvar.

### 6. Støtte til infrastruktur og hosting

Offentlig sektor kan også bidra med teknisk infrastruktur.

Dette kan for eksempel være:

- speiling av pakkeregistre
- kildekodearkiv
- testmiljøer
- bygginfrastruktur
- dokumentasjonssider
- sikker lagring av avhengigheter
- mekanismer for beredskap dersom eksterne tjenester blir utilgjengelige

Dette kan styrke robusthet og beredskap, samtidig som det avlaster sentrale åpne infrastrukturer som mange er avhengige av.

---

## Kjente finansieringsmodeller for åpen kildekode

### GitHub Sponsors

GitHub Sponsors gjør det mulig å støtte utviklere og organisasjoner direkte på GitHub.

Prosjekter eller bidragsytere kan opprette sponsorprofil, definere engangs- eller månedlige sponsornivåer, og motta støtte fra privatpersoner eller organisasjoner.

For offentlige virksomheter kan det være relevant å undersøke:

- om sponsing kan gjøres via faktura
- om det er mulig å støtte flere avhengigheter samlet
- hvem som er juridisk mottaker
- hvordan støtten dokumenteres
- om støtten kan knyttes til konkrete behov som vedlikehold, sikkerhet eller dokumentasjon

GitHub Sponsors kan være enkelt å bruke, men det kan også reise spørsmål om betaling til enkeltpersoner, internasjonale mottakere, gebyrer, skatt, rapportering og forholdet til anskaffelses- og tilskuddsregelverk.

### Open Collective og fiscal hosting

Open Collective brukes av mange åpne prosjekter til å motta penger, vise budsjett åpent og betale utgifter.

En fiscal host kan håndtere:

- bankkonto
- faktura
- kvitteringer
- regnskap
- skatt
- compliance
- utbetalinger
- økonomisk rapportering

Dette kan være nyttig for prosjekter som ikke har egen juridisk enhet.

For offentlig sektor kan dette være interessant fordi det gir en tydeligere mottaker og mer dokumentasjon enn rene personlige donasjoner.

### Stiftelser og fond

Mange åpne kildekodeprosjekter finansieres gjennom stiftelser, fond eller paraplyorganisasjoner.

Slike strukturer kan gi:

- juridisk ramme
- langsiktig forvaltning
- tydeligere styring
- åpen økonomi
- felles prioritering
- større tillit hos virksomheter og myndigheter

Dette kan være særlig relevant for prosjekter som har mange brukere, høy samfunnsnytte eller stor betydning for digital infrastruktur.

### Kommersielle støtte- og abonnementsmodeller

Noen aktører finansierer åpen kildekode gjennom betalte tjenester rundt den åpne koden.

Det kan for eksempel være:

- support
- drift
- sikkerhetsoppfølging
- rådgivning
- sertifiserte versjoner
- vedlikeholdsavtaler
- abonnement på oversikt over avhengigheter
- lisens- og sårbarhetsanalyse

I slike modeller er selve koden åpen, mens inntektene kommer fra tjenester, forvaltning og trygg bruk i virksomheter.

### Grants og programfinansiering

Åpne prosjekter kan også finansieres gjennom tilskudd, forskningsmidler, innovasjonsmidler eller tematiske programmer.

Dette passer særlig for:

- avgrensede utviklingsløft
- sikkerhetsarbeid
- interoperabilitet
- dokumentasjon
- standardisering
- digital offentlig infrastruktur
- vedlikehold av kritiske komponenter

En utfordring med grants er at de ofte finansierer tidsavgrensede prosjekter, mens behovet i åpen kildekode ofte er løpende vedlikehold over tid.

### Bounties og sikkerhetsprogrammer

Noen prosjekter bruker bounties for å betale for konkrete oppgaver, feilrettinger eller sikkerhetsfunn.

Dette kan fungere for:

- avgrensede feil
- sikkerhetssårbarheter
- konkrete forbedringer
- små oppgaver med tydelig omfang

Bounties kan være nyttige, men erstatter ikke løpende vedlikehold, forvaltning og langsiktig ansvar.

### Spleiselag mellom brukere

Flere brukere av samme åpne løsning kan gå sammen om å finansiere videreutvikling eller vedlikehold.

Dette kan være aktuelt når:

- flere offentlige virksomheter bruker samme komponent
- behovet er felles
- ingen enkeltvirksomhet bør bære hele kostnaden alene
- løsningen bør forvaltes som felles digital infrastruktur

En slik modell krever avklaring av styring, prioritering, finansiering og eierskap til resultatene.

### Arbeidsgiverfinansiert åpen kildekode

En vanlig finansieringsmodell for åpen kildekode er at utviklere bidrar som del av jobben sin.

For offentlig sektor kan dette bety at ansatte får rom til å:

- rette feil i avhengigheter
- bidra med dokumentasjon
- sende forbedringer tilbake til prosjekter
- delta i relevante fagmiljøer
- følge opp sikkerhet og vedlikehold
- bidra til fellesløsninger på tvers av virksomheter

Dette kan være en praktisk og lavterskel måte å bidra tilbake på, fordi virksomheten allerede har nytte av arbeidet.

---

## Spørsmål som bør vurderes videre

Før tiltak kan anbefales eller gjennomføres, bør det vurderes:

- Hvilke åpne komponenter er kritiske for offentlig sektor?
- Hvem kan lovlig motta støtte, og på hvilket grunnlag?
- Skal støtten gå til personer, prosjekter, organisasjoner, stiftelser eller leverandører?
- Kan tiltaket gjennomføres som anskaffelse, tilskudd, medlemskap, sponsorat eller samarbeid?
- Hvilke krav bør stilles til åpen lisens, dokumentasjon, sikkerhet og rapportering?
- Hvordan unngår vi å favorisere enkeltleverandører eller skape uklare bindinger?
- Hvordan måler vi effekt?
- Hvordan sikrer vi at midlene går til vedlikehold og bærekraft, ikke bare nyutvikling?
- Hvordan håndterer vi prosjekter uten juridisk enhet?
- Hvordan håndterer vi internasjonale mottakere?
- Hvordan samordner vi bidrag på tvers av offentlig sektor?

---

## Foreløpig anbefaling for videre arbeid

Videre arbeid bør skille mellom tre nivåer:

### 1. Enkle tiltak virksomheter kan gjøre selv

Eksempler:

- bidra med kode
- bidra med dokumentasjon
- bidra med sikkerhetstesting
- gi ansatte tid til å bidra tilbake
- rapportere feil på en god måte
- delta i relevante åpne fagmiljøer

### 2. Tiltak som kan prøves ut innenfor eksisterende virkemidler

Eksempler:

- anskaffelser
- vedlikeholdsavtaler
- supportavtaler
- spleiselag
- felles forvaltning
- krav til leverandører
- bidrag via etablerte organisasjoner eller stiftelser

### 3. Tiltak som krever nærmere utredning

Eksempler:

- nasjonal støtteordning
- felles finansieringspott
- tilskudd til kritisk åpen digital infrastruktur
- offentlig sponsorordning
- felles modell for vedlikehold av åpne komponenter
- ordning for speiling, arkivering eller sikring av kritiske avhengigheter

---

## Foreslått disposisjon for siden

1. **Innledning**
   - Hva siden handler om
   - At tiltakene beskriver behov og mulighetsrom
   - At tiltakene ikke er juridisk eller økonomisk vurdert ennå

2. **Hvorfor bør offentlig sektor bidra tilbake?**
   - Offentlig sektor er allerede avhengig av åpen kildekode
   - Bidrag tilbake reduserer risiko
   - Bidrag tilbake gir bedre ressursbruk

3. **Hva mener vi med å bidra?**
   - Kode
   - Dokumentasjon
   - Arbeidstid
   - Penger
   - Anskaffelser
   - Infrastruktur
   - Fellesskap

4. **Hvilke behov skal tiltakene møte?**
   - Vedlikehold
   - Sikkerhet
   - Dokumentasjon
   - Forvaltning
   - Infrastruktur
   - Kompetanse

5. **Mulige tiltak**
   - Arbeidstid og kompetanse
   - Anskaffelser
   - Direkte økonomiske bidrag
   - Tilskudd og programmidler
   - Spleiselag
   - Infrastruktur og hosting

6. **Kjente finansieringsmodeller for åpen kildekode**
   - GitHub Sponsors
   - Open Collective
   - Stiftelser og fond
   - Kommersielle støtte- og abonnementsmodeller
   - Grants og programfinansiering
   - Bounties
   - Spleiselag
   - Arbeidsgiverfinansiert bidrag

7. **Spørsmål som bør vurderes videre**
   - Regelverk
   - Mottaker
   - Dokumentasjon
   - Effekt
   - Prioritering
   - Samordning

8. **Foreløpig anbefaling for videre arbeid**
   - Enkle tiltak
   - Tiltak innenfor eksisterende virkemidler
   - Tiltak som krever utredning