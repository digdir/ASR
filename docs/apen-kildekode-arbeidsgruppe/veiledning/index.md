---
layout: default
title: Veiledning
description: Høynivå veiledning om åpen kildekode i offentlig sektor
---
<div class="ak-guide-layout">

<aside class="ak-guide-toc">
<h2>Innhold</h2>

<ul>
  <li><a href="#formaal-og-malgruppe">Formål og målgruppe</a></li>
  <li><a href="#hvorfor-er-apen-kildekode-viktig-for-offentlig-sektor">Hvorfor er åpen kildekode viktig for offentlig sektor?</a></li>
  <li><a href="#hva-mener-vi-med-apen-kildekode">Hva mener vi med åpen kildekode?</a></li>
  <li><a href="#hovedregel-apen-kildekode-som-hovedregel">Åpen kildekode som hovedregel</a></li>
  <li><a href="#anbefalinger-bruke-dele-og-bidra">Anbefalinger: bruke, dele og bidra</a></li>
  <li><a href="#hva-får-dere-igjen">Hva får dere igjen?</a></li>
  <li><a href="#for-dere-starter-fa-kontroll-pa-rammene">Før dere starter: få kontroll på rammene</a></li>
  <li><a href="#operativ-veiledning">Operativ veiledning</a></li>
  <li><a href="#minimumskrav">Minimumskrav</a></li>
  <li><a href="#hvor-modne-er-dere">Hvor modne er dere?</a></li>
  <li><a href="#forste-steg-slik-kommer-dere-i-gang">Første steg: slik kommer dere i gang</a></li>
  <li><a href="#sjekkliste-for-publisering-eller-anskaffelse">Sjekkliste før publisering eller anskaffelse</a></li>
</ul>
</aside>

<div class="ak-guide-body" markdown="1">

<a id="formaal-og-malgruppe"></a>
## Formål og målgruppe
Denne veilederen skal hjelpe offentlige virksomheter med å bruke, dele og bidra til åpen kildekode på en ansvarlig og praktisk måte. Den er særlig relevant for ledere, produkteiere, arkitekter, utviklere, jurister, innkjøpere, sikkerhetsmiljøer og andre som tar beslutninger om digitale løsninger.
Veilederen er skrevet som en kort hovedveileder. Den skal gi nok støtte til å komme i gang, mens juridiske, sikkerhetsmessige, anskaffelsesfaglige og tekniske tema kan utdypes i egne moduler.

<a id="hvorfor-er-apen-kildekode-viktig-for-offentlig-sektor"></a>
## Hvorfor er åpen kildekode viktig for offentlig sektor?

**Åpen kildekode gir offentlig sektor større åpenhet, kontroll og handlingsrom.** Løsninger kan i større grad gjenbrukes, og videreutvikles i fellesskap. Åpen kildekode gir også større innsyn og kontroll for offentligheten. Dette gir "innebygd" etterprøvbarhet, som er vesentlig for ansvarlig utvikling av løsninger med komponenter av kunstig intelligens i offentlig sektor, og i det geopolitiske situasjonsbildet vi befinner oss i. Bruk av åpen kildekode åpner også for mer rettferdig konkurranse ved at tilbydere kan bygge videre på det som allerede eksisterer.

Mange offentlige virksomheter ønsker å bruke mer åpen kildekode, men diskusjonen blir ofte knyttet til risiko og sikkerhet. Samtidig er realiteten at de fleste digitale løsninger allerede er bygget på åpen kildekode gjennom leverandørene. Moderne web- og skyløsninger er ofte avhengige av hundrevis eller tusenvis av åpne komponenter (fra tjenester som for eksempel npmjs.com). Dersom én av disse inneholder sårbarheter eller blir kompromittert, kan det påvirke store deler av løsningen.
Utfordringer knyttet til programvareforsyningskjeden er derfor ikke noe man møter først når man velger å utvikle eller dele åpen kildekode, det er allerede en del av dagens digitale infrastruktur. Spørsmålet er derfor ikke om man bruker åpen kildekode, men hvordan man forvalter den på en ansvarlig måte.

En ansvarlig forvaltning av åpen kildekode stopper ikke ved egen bruk. Når offentlig sektor er avhengig av disse komponentene i stor skala, er det også et felles ansvar å bidra tilbake gjennom finansiering, deling, vedlikehold og aktiv deltakelse i miljøene som utvikler og forvalter teknologien.

EU-kommisjonen løfter åpen kildekode fram som et virkemiddel for interoperabilitet, digital suverenitet og bedre gjenbruk i offentlig sektor. Med føringer gjennom blant annet Interoperable Europe Act, EU Open Source Strategy og relaterte initiativer er det viktig å øke kompetansen om tema i offentlig sektor.

Åpen kildekode er derfor ikke bare et teknologivalg, men et strategisk valg for å forvalte offentlige digitale investeringer mer åpent og langsiktig, til nytte for innbyggerne og samfunnet som helhet.

<a id="hva-mener-vi-med-apen-kildekode"></a>
## Hva mener vi med åpen kildekode?

Åpen kildekode er programvare der kildekoden er tilgjengelig, og der en åpen lisens gir rett til å bruke, studere, endre og dele programvaren og kildekoden videre. Dette bygger på definisjonen fra [Open Source Initiative (OSI)](https://opensource.org/osd/).

Åpen kildekode må ikke forveksles med åpne standarder. **Åpne standarder beskriver hvordan systemer og løsninger kan samhandle, mens åpen kildekode handler om tilgang til og rettigheter til selve programvaren og kildekoden.** De to utfyller ofte hverandre.

Åpen kildekode betyr ikke at programvaren er uten kostnader. Drift, sikkerhet, vedlikehold, dokumentasjon og kompetanse må fortsatt forvaltes.

For offentlig sektor bør åpen kildekode ses som en del av hele livsløpet til digitale løsninger – fra valg og anskaffelse til utvikling, deling, drift, videreutvikling og bidrag tilbake til fellesskapet.

<a id="hovedregel-apen-kildekode-som-hovedregel"></a>
## Åpen kildekode som hovedregel

Når offentlig sektor utvikler programvare selv eller får det utviklet for offentlige midler, bør kildekoden som hovedregel gjøres åpent tilgjengelig under en åpen lisens.

Planlegg for åpenhet fra starten, og publiser koden så tidlig som mulig når det er forsvarlig. Gjør deling til en del av utviklings- og forvaltningsløpet, slik at åpenhet, dokumentasjon og tydelig ansvar bygges inn fra starten.

Vurder hva som kan deles innenfor hensynet til blant annet informasjonssikkerhet, personvern, nasjonal sikkerhet, juridiske forhold, lisensiering og tredjepartsavhengigheter. Hvis hele løsningen ikke kan åpnes, vurder hvilke deler som likevel kan deles, for eksempel kildekode, dokumentasjon, API-spesifikasjoner, testverktøy eller arkitekturbeskrivelser.

Hovedregelen følges opp gjennom tre anbefalinger for hvordan offentlig sektor bør **bruke, dele og bidra** til åpen kildekode.

<a id="anbefalinger-bruke-dele-og-bidra"></a>
## Anbefalinger: bruk, del og bidra

Anbefalingene dekker ulike deler av livsløpet: hva dere bygger løsningene på, hva dere gjør tilgjengelig for andre, og hvordan dere tar ansvar for den åpne programvaren dere selv er avhengige av.

<figure class="ak-figure ak-figure--compact" align="center">
  <img src="../assets/img/prinsippmodell.svg" alt="Modell med tre anbefalinger: bruke, dele og bidra. Sammen styrker de en åpen digital grunnmur." width="760">
  <figcaption>Figur: Tre anbefalinger for åpen kildekode i offentlig sektor.</figcaption>
</figure>

### Bruk: vurder åpen kildekode først

Undersøk om eksisterende åpen kildekode kan dekke behovet eller brukes som utgangspunkt før dere utvikler eller kjøper noe nytt.

Vurder kvalitet, sikkerhet, vedlikehold, kompetanse og kostnader gjennom hele livsløpet. Skaff oversikt over komponenter, avhengigheter og lisenser, og still krav som gjør det mulig å videreutvikle løsningen eller bytte leverandør senere.

Bruk åpne løsninger, åpne grensesnitt og kontroll over egne data til å bevare endringsevne og digitalt handlingsrom. Unngå unødvendig innlåsing i enkeltleverandører, teknologier eller forvaltningsmodeller.

Målet er ikke å velge åpen kildekode uansett, men å **vurdere det først og velge det når det samlet sett er et godt og forsvarlig alternativ.**

### Del: åpent som hovedregel

Publiser programvare som utvikles for offentlige midler under en åpen lisens når det er forsvarlig.

Deling handler ikke bare om gjenbruk. Åpen kildekode gir også innsyn og mulighet for etterprøving av digitale løsninger offentlig sektor utvikler og bruker. Dette er særlig viktig når løsningene påvirker rettigheter, tjenester og samfunnsfunksjoner.

Gjør koden mulig å forstå og ta i bruk. Sørg for tydelig lisens, nødvendig dokumentasjon, kontaktpunkt og avklart ansvar for videre forvaltning.

Skjerm det som må skjermes, men ikke hold hele løsningen lukket dersom begrensningen bare gjelder enkelte deler.

### Bidra: sikre den digitale grunnmuren

Kartlegg hvilke åpne prosjekter og komponenter virksomheten er avhengig av, og vurder hvordan dere kan bidra tilbake til dem.

Bidra med det som gir størst verdi: kode, feilretting, dokumentasjon, testing, sikkerhetsarbeid, deltakelse i fagmiljøer eller finansiering. For kritiske avhengigheter bør virksomheten aktivt bidra til at prosjektet har nødvendig vedlikehold, sikkerhetsoppdateringer og bærekraftig videreutvikling.

Bruk også bidrag som en måte å bygge kompetanse og få større innsikt og innflytelse i programvare virksomheten er avhengig av.

Å bidra tilbake er en del av ansvarlig forvaltning av den digitale grunnmuren offentlig sektor bygger på.

<a id="hva-far-dere-igjen"></a>
## Hva får dere igjen?

### Mer kontroll over livsløpet
Digitale løsninger i offentlig sektor har ofte lang levetid – gjerne 10–20 år – og det er gjennom hele denne livssyklusen, ikke bare ved anskaffelsen, at kostnadene og risikoen faktisk påløper.

Med proprietær programvare er du prisgitt leverandørens valg gjennom hele løpet: når produktet videreutvikles, når det avvikles («end of life»), hvilke priser som gjelder ved fornyelse, og om du i det hele tatt får migrert dataene dine ut når avtalen tar slutt. Blir leverandøren kjøpt opp, endrer strategi eller går konkurs, kan en kritisk tjeneste stå uten vedlikehold over natten.

Åpen kildekode flytter kontrollen over livssyklusen til virksomheten selv. Selv om en leverandør trekker seg, finnes koden fortsatt, og en annen aktør kan ta over vedlikehold, feilretting og videreutvikling. Det betyr ikke at åpen kildekode er kostnadsfri – vedlikehold, sikkerhet og oppgradering av avhengigheter må finansieres 
uansett – men kostnaden blir synlig og styrbar i stedet for skjult i lisens- og avtalevilkår du ikke rår over.

I praksis bør virksomheten vurdere hele livsløpet allerede ved valg av løsning: ikke bare innkjøps- og utviklingskostnad, men også vedlikehold, kompetanse, migrering inn og ut, og hva en avvikling vil koste. For mange løsninger gir åpen kildekode bedre ressursutnyttelse over tid, selv om det sjelden gir lavere kostnad på dag én.  

### Mindre leverandørinnlåsing
Portabilitet handler om muligheten til å flytte løsninger, data og kompetanse mellom leverandører og plattformer uten å starte på nytt. Interoperabilitet handler om at systemer kan samhandle på tvers av virksomheter og forvaltningsnivåer. Begge deler svekkes når løsninger bygges lukket, og styrkes når de bygges åpent.

Når kildekoden er åpen og bygget på åpne standarder, reduseres innelåsingen til én leverandør. Du kan bytte leverandør, ta deler av forvaltningen inn selv, eller la flere aktører konkurrere om videreutvikling og drift. Det gir både bedre forhandlingsposisjon og lavere risiko for at løsningen blir en blindvei.

### Bedre gjenbruk på tvers
Mange offentlige virksomheter har overlappende behov, men løser dem hver for seg. Resultatet er at samme funksjonalitet utvikles, betales for og vedlikeholdes mange ganger parallelt. Åpen kildekode gjør det mulig å erstatte dette med gjenbruk: én virksomhet kan bygge en løsning åpent, og andre kan ta den i bruk eller bygge videre på den.

Gevinsten er størst når gjenbruk tenkes inn fra starten. En løsning som er publisert åpent, men uten dokumentasjon, lisens eller tydelig forvaltning, er teknisk tilgjengelig, men i praksis vanskelig å gjenbruke. Reell nyttiggjøring krever at andre kan finne løsningen, forstå hva den gjør, vurdere om den passer, og ta den i bruk uten å måtte kontakte utviklerne.

<figure class="ak-figure ak-figure--narrow" align="center">
  <img src="../assets/img/figur-publisert-til-gjenbrukbar-vertikal-v3.svg" alt="Fra publisert til gjenbrukbar åpen kildekode" width="725">
</figure>

Gjenbruk er ikke bare god ressursbruk for den enkelte virksomhet; det er en samfunnsgevinst. Når flere bidrar til og bruker samme løsning, vokser det fram et felles økosystem av kvalitetssikret programvare som blir bedre og sikrere for alle som er avhengige av den.

### Mer etterprøvbare digitale tjenester
Åpen kildekode blir mer og mer vesentlig sett i lys av KI-drevet utvikling. En åpen kodebase er nærmest en forutsetning både for å gjøre det som lages etterprøvbart, forklarbart og for å kunne bruke KI-verktøy til kontinuerlig utvikling og forbedring. Dette fordi det er viktig med åpenhet og sporbarhet for hva KI-programvare som hjelper utvikleren med koding, testing, og dokumentasjon faktisk gjør, og fordi velregulert tilgang og definerte prosesser som åpen kildekode legger til rette for gir økt forklarbarhet rundt dette. 

### Sterkere digital beredskap
Åpen kildekode kan redusere sårbarhet ved at virksomheten ikke er like bundet til lukkede løsninger, enkeltleverandører eller utilgjengelig kompetanse. Det gir større handlefrihet ved teknologiske, økonomiske eller geopolitiske endringer.

<a id="for-dere-starter-fa-kontroll-pa-rammene"></a>
## Før dere starter: få kontroll på rammene

Før dere går til praktiske valg om bruk, deling og bidrag, bør virksomheten ha kontroll på noen grunnleggende rammer:

- **Sikkerhet og sårbarheter:** etabler rutiner for å oppdage, håndtere og følge opp sårbarheter og eksponerte hemmeligheter.
- **Lisenser og rettigheter:** avklar lisensvalg tidlig, og ha oversikt over plikter knyttet til komponentene dere bruker.
- **Dokumentasjon og forvaltning:** sørg for minimumsnivå for README, lisens, kontaktpunkt og enkel forvaltningsbeskrivelse.
- **Roller og ansvar:** gjør det tydelig hvem som eier koden, godkjenner endringer og følger opp feil, bidrag og sikkerhet.
- **Kostnader over tid:** planlegg for drift, vedlikehold, sikkerhetsoppdateringer og kompetanse, ikke bare oppstart.

Når disse rammene er på plass, blir det enklere å gå fra ambisjon til praktisk gjennomføring.

(Norstella - leverandørperspektiv)


<a id="operativ-veiledning"></a>
## Operativ veiledning

Åpen kildekode er ikke et prosjekt med start og slutt, men en arbeidsform som modnes over tid. Dere trenger ikke gjøre alt samtidig. Start med ett avgrenset område, for eksempel én løsning eller ett repository.

Etter at rammene over er avklart, er et praktisk utgangspunkt å jobbe i tre spor:

- **Bruke:** få oversikt over avhengigheter, lisenser og sårbarheter i det dere allerede er avhengige av. (mer om lisenstyper)
- **Dele:** velg én konkret kandidat for publisering, og avklar lisens, dokumentasjon og forvaltningsansvar.
- **Bidra:** avklar hvordan virksomheten kan bidra tilbake på en realistisk måte, for eksempel med kode, dokumentasjon, testing eller finansiering.

Lær underveis, og bruk erfaringer fra andre offentlige virksomheter som allerede har delt kode og praksis åpent.

For mange virksomheter er det nyttig å starte i liten skala:

- Velg ett system eller én tjeneste dere kjenner godt.
- Kartlegg hvilke åpne komponenter dere faktisk bruker i dag.
- Avklar hva som eventuelt kan deles trygt uten at dere åpner alt på én gang.
- Sett av navngitt ansvar for oppfølging av sikkerhet, lisens og publisering.

<a id="minimumskrav"></a>
## Minimumskrav 
Bruk sjekklisten under for å sikre at dere har det viktigste på plass for bruk, deling og bidrag.

Start med noen enkle grunnkrav før dere går videre til de mer konkrete punktene:

- **Håndter lisenser tidlig:** avklar lisensvalg for egne leveranser og etabler en enkel rutine for tredjepartslisenser.
- **Sett en minimumsstandard for dokumentasjon:** sørg for README, lisensfil, kontaktpunkt og kort beskrivelse av forvaltning.
- **Bygg sikkerhet inn i prosessen:** bruk skanning av avhengigheter og hemmeligheter, og avklar hvordan sårbarheter håndteres.
- **Plasser ansvaret tydelig:** navngi hvem som eier koden, hvem som godkjenner endringer, og hvem som følger opp bidrag og feil.

Når dere vurderer å ta i bruk et åpent prosjekt, er det også nyttig å se etter noen grunnleggende kjennetegn: tydelig lisens, aktivt vedlikehold, god dokumentasjon, åpen styring og en viss stabilitet i kode og videreutvikling.

### Når dere skal bruke åpen kildekode

- Har dere oversikt over hvilke åpne komponenter, avhengigheter og lisenser løsningen bygger på?
- Er prosjektet aktivt vedlikeholdt, og finnes det nok dokumentasjon og støtte til å ta det i bruk forsvarlig?
- Har dere rutiner for å oppdage og følge opp sårbarheter, oppgraderinger og lisensutfordringer?

Praktisk råd: start med å lage en enkel oversikt over hvilke åpne biblioteker og rammeverk dere allerede er avhengige av. Da blir det lettere å prioritere hva som må følges tettest opp.

### Når dere skal dele kode

- Hva er formålet med å dele koden: transparens, gjenbruk, samarbeid eller videreutvikling?
- Kan koden publiseres forsvarlig, eller inneholder den hemmeligheter, sensitiv informasjon eller forhold som må skjermes?
- Er lisens, README, kontaktpunkt og forvaltningsansvar på plass før publisering?
- Er repository og historikk sanert for nøkler, passord, personopplysninger og sensitiv konfigurasjon?
- Finnes en enkel kanal for å melde sårbarheter og feil?

Praktisk råd: velg ett repository som pilot. Få på plass minimumspakken (lisens, README, kontaktpunkt og enkel forvaltningsbeskrivelse), og bruk læringen derfra før dere åpner flere.

### Når dere skal bidra tilbake

- Hva er målet med å bidra tilbake: redusere risiko, styrke kvalitet, bygge kompetanse eller støtte kritiske avhengigheter?
- Hvilke bidragsformer er realistiske for dere: kode, feilretting, dokumentasjon, testing, finansiering eller deltakelse i fagmiljø?

Praktisk råd: vurder aktivt hvordan virksomheten kan bidra tilbake til prosjekter dere er avhengige av. Bidrag kan være kode, dokumentasjon og testing, men finansiering er ofte et særlig viktig bidrag for å sikre vedlikehold, sikkerhetsoppdateringer og videre utvikling over tid.

<a id="hvor-modne-er-dere"></a>
## Hvor modne er dere?

Vi kan skille mellom ulike grader av modenhet for åpen kildekode. Det finnes
flere modeller for beskrivelse av modenhet, én slik modell er skissert av OSPO
alliance ([Referanse](https://ospo-alliance.org/ggi/introduction/)).

Modellen skisserer fem nivåer av modenhet: bruk, tillit, kultur,
engasjement og strategi.

![Modenhetsmodell for åpen kildekode](../assets/img/figur-modenhet-apen-kildekode.svg)

På det laveste nivået har vi altså bruk av åpen kildekode i en organisasjon,
hvor man har tilstrekkelig kompetanse til å ta i bruk, men hovedsakelig er
konsument.

I neste nivå er det en økt bevissthet og kontrollerte rammer, slik som sikkerhet,
håndtering av avhengigheter, juridiske og økonomiske forhold.

På kulturnivået er en god praksis internalisert i organisasjonen, og det er
utviklet en intern kultur der åpen kildekode er en naturlig del av
arbeidsprosessen.

På de to øverste nivåene går vi til engasjement, hvor organisasjonen er aktiv
bidragsyter, enten ved å dele aktivt egne prosjekter, eller som bidragsyter i
eksterne prosjekter.

På det øverste nivået er åpen kildekode bevisst brukt som virkemiddel for å nå
organisasjonens overordnede mål. Her er åpen kildekode ikke bare et teknisk
valg, men også et strategisk valg forankret i øverste ledelse.

Åpen kildekode og åpne standarder utfyller hverandre: standardene legger til rette for at systemer kan snakke sammen, mens åpen kildekode gir innsyn i hvordan samhandlingen faktisk er implementert. For offentlig sektor, der tjenester ofte må utveksle data på tvers av etater, kommuner og forvaltningsnivåer, er dette en forutsetning for å unngå at hver virksomhet bygger sine egne, inkompatible siloer. (oppdatere tekst Digdir)
(bør bli mer handlingsrettet?)

## Status - og hvordan kan du bidra?

All informasjon på disse sidene er arbeidsdokumenter som er under arbeid. 
Vi tar gjerne imot tilbakemeldinger fra alle som er engasjerte i tematikken ☺️. Send tilbakemeldinger oss via [diskusjonssiden på github](https://github.com/digdir/ASR/discussions/3) eller på [epost](mailto:nasjonalarkitektur@digdir.no). Det er også lov å åpne en pull-request mot repoet. Arbeidsgruppen vil vurdere eventuelle bidrag.

## Relevante kilder

### EU og offentlig sektor

- [Interoperable Europe Act](https://interoperable-europe.ec.europa.eu/interoperable-europe/interoperable-europe-act) - relevant for interoperabilitet, grensekryssende digitale tjenester og offentlig sektors samhandling.
- [European Commission Open Source Software Strategy 2020-2023](https://commission.europa.eu/about/departments-and-executive-agencies/digital-services/open-source-software-strategy_en) - relevant for "Think Open", deling, gjenbruk, aktiv deltakelse og støtte til kritiske åpne prosjekter.
- [OSOR Handbook: Open Source Software in Public Administration](https://openforumeurope.org/publications/osor-handbook/) - praktisk referanse for offentlig sektor, med tema som anskaffelser, kataloger, lisensiering, finansiering, styring og OSPO.
- [OSOR Public Procurement of Open Source Software](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/public-procurement-open-source-software) - relevant for anskaffelser av åpne løsninger og tjenester rundt åpen kildekode.

### Praktisk publisering og styring

- [Retningslinjer for åpen kildekode i NAV](https://github.com/navikt/offentlig) - norsk offentlig eksempel på hvordan en stor virksomhet organiserer publisering, eierskap og praktisk arbeid med åpen kildekode.
- [GOV.UK: Making source code open and reusable](https://www.gov.uk/service-manual/technology/making-source-code-open-and-reusable) - kort offentlig veiledning om å gjøre kildekode åpen og gjenbrukbar.
- [NHS Service Manual: Make new source code open](https://service-manual.nhs.uk/standards-and-technology/service-standard-points/12-make-new-source-code-open) - tydelig offentlig sektor-prinsipp om at ny kildekode bør gjøres åpen og gjenbrukbar med passende lisens, med mindre det finnes god grunn til å la være.
- [OSPO Alliance Good Governance Initiative](https://ospo-alliance.org/ggi/) - relevant for modenhet, roller, policy og styring.

### Sikkerhet og lisens

- [OpenSSF Scorecard](https://openssf.org/projects/scorecard/) - verktøy for vurdering av sikkerhetspraksis i åpne prosjekter.
- [OpenSSF Best Practices Badge](https://openssf.org/projects/best-practices-badge/) - selvdeklarering og beste praksis for FLOSS-prosjekter.
- [REUSE Specification](https://reuse.software/spec-3.3/) - standardisert metode for maskinlesbar og ryddig lisens- og opphavsrettsinformasjon i repositories.

<!-- LEGG TIL: Noe om Inner sourcing -->

</div>
</div>
