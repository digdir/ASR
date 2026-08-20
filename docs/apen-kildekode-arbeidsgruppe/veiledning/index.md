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
  <li><a href="#hva-far-dere-igjen">Hva får dere igjen?</a></li>
  <li><a href="#hva-ma-dere-ha-kontroll-pa">Hva må dere ha kontroll på?</a></li>
  <li><a href="#fra-ambisjon-til-praksis">Fra ambisjon til praksis</a></li>
  <li><a href="#minimumskrav">Sjekkliste for bruk, deling og bidrag</a></li>
  <li><a href="#hvor-modne-er-dere">Hvor modne er dere?</a></li>
</ul>
</aside>

<div class="ak-guide-body" markdown="1">

<a id="formaal-og-malgruppe"></a>
## Formål og målgruppe
Denne veilederen skal hjelpe offentlige virksomheter med å bruke, dele og bidra til åpen kildekode på en ansvarlig og praktisk måte. Den er særlig relevant for ledere, produkteiere, arkitekter, utviklere, jurister, innkjøpere, sikkerhetsmiljøer og andre som tar beslutninger om digitale løsninger.
Veilederen er skrevet som en kort hovedveileder. Den skal gi nok støtte til å komme i gang, mens juridiske, sikkerhetsmessige, anskaffelsesfaglige og tekniske tema kan utdypes i egne moduler.

<a id="hvorfor-er-apen-kildekode-viktig-for-offentlig-sektor"></a>
## Hvorfor er åpen kildekode viktig for offentlig sektor?

Åpen kildekode gir offentlig sektor større åpenhet, kontroll og handlingsrom. Løsninger kan lettere gjenbrukes og videreutvikles i fellesskap, samtidig som kildekoden gir bedre muligheter for innsyn og etterprøving. Dette er særlig viktig når digitale løsninger påvirker innbyggere og samfunnsfunksjoner, og når kunstig intelligens tas i bruk i offentlig sektor.

Åpen kildekode kan også bidra til mer rettferdig konkurranse ved at flere leverandører kan bygge videre på eksisterende løsninger og konkurrere om drift, forvaltning og videreutvikling.

Mange offentlige virksomheter ønsker å bruke mer åpen kildekode, men diskusjonen knyttes ofte til risiko og sikkerhet. Samtidig bygger de fleste moderne digitale løsninger allerede på åpne komponenter, også når løsningene leveres av kommersielle leverandører. Web- og skyløsninger kan være avhengige av hundrevis eller tusenvis av slike komponenter.

Risiko i programvareforsyningskjeden oppstår derfor ikke først når virksomheten velger åpen kildekode. Den er allerede en del av dagens digitale infrastruktur. Det sentrale spørsmålet er hvordan virksomheten får oversikt over avhengighetene og forvalter dem på en ansvarlig måte.

Ansvarlig bruk stopper heller ikke ved egen virksomhet. Når offentlig sektor er avhengig av åpne komponenter og prosjekter, bør den også vurdere hvordan den kan bidra tilbake gjennom finansiering, deling, vedlikehold eller aktiv deltakelse i utviklingsmiljøene.

EU-kommisjonen løfter åpen kildekode fram som et virkemiddel for interoperabilitet, digital suverenitet og bedre gjenbruk i offentlig sektor. Det gjør kompetanse om bruk, deling og bidrag stadig viktigere også for norsk offentlig sektor.

For virksomhetene betyr dette først og fremst tre ting: **bruk åpne løsninger bevisst, del det dere selv utvikler når det er forsvarlig, og ta ansvar for de åpne komponentene dere er avhengige av.**

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

### Vurder effekt på leverandørmarkedet

Dersom det finnes et velfungerende marked som leverer programvare som dekker behovet, er det viktig at det gjøres en vurdering av om krav om åpen kildekode eller egen utvikling av åpen kildekode kan ha negative effekter på de eksisterende leverandørene. I verste fall kan et krav til å levere åpen kildekode, eller egenutviklet programvare som deles som åpen kildekode, ta vekk det forretningsmessige grunnlaget for å levere programvaren. Det er viktig at etaten ikke bare ser på sitt eget behov i denne sammenheng. Dersom etaten har ressurser til å levere et konkurransedyktig alternativ til seg selv, med egne ressurser på drift og forvaltning av løsningen, er det ikke sikkert andre aktører, både offentlige og private, har de samme ressursene, men er avhengige av leverandørmarkedet.

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

Åpen kildekode kan gi offentlig sektor større kontroll over digitale løsninger gjennom hele livsløpet. Gevinstene kommer ikke automatisk, men når åpenhet kombineres med god styring, kompetanse og langsiktig forvaltning.

### Større handlingsrom over tid
Digitale løsninger i offentlig sektor har ofte lang levetid. Behov, leverandører, teknologi og rammebetingelser kan endre seg flere ganger i løpet av denne perioden.

Med tilgang til kildekoden og nødvendige rettigheter står virksomheten friere til å videreutvikle løsningen, bytte leverandør eller endre forvaltningsmodell. Det gir større endringsevne og reduserer risikoen for at viktige løsninger blir avhengige av valg virksomheten selv ikke kontrollerer.

Vurder derfor hele livsløpet når dere velger løsning – ikke bare kostnaden ved anskaffelse eller utvikling, men også drift, vedlikehold, kompetanse, migrering og avvikling.

### Mindre leverandørinnlåsing
Åpen kildekode kan gjøre det enklere å skille mellom programvare, drift og videreutvikling, slik at flere leverandører kan konkurrere om tjenestene rundt løsningen.

Kombinert med åpne standarder, dokumenterte grensesnitt og kontroll over egne data gir dette bedre muligheter til å bytte leverandør eller flytte løsningen senere.

Målet er ikke leverandøruavhengighet, men å unngå unødvendige bindinger og bevare reelle valgmuligheter.

### Bedre gjenbruk og samarbeid
Offentlige virksomheter har mange av de samme behovene. Når kode deles åpent, kan andre ta den i bruk, bygge videre på den eller bidra til videreutviklingen i stedet for å løse samme problem på nytt.

Å publisere kildekoden er likevel ikke nok i seg selv. For at andre faktisk skal kunne vurdere, ta i bruk og videreutvikle løsningen, må lisens, dokumentasjon og ansvar for forvaltning være på plass.

<div class="ak-figure-panel">
  <figure class="ak-figure ak-figure--narrow" align="center">
    <img src="../assets/img/figur-publisert-til-gjenbrukbar-vertikal-v3.svg" alt="Fra publisert kode til gjenbrukbar løsning. Stegene er publisert kode, åpen lisens, dokumentasjon, forvaltning og gjenbrukbar løsning. Det som må på plass for at andre faktisk kan ta koden i bruk.">
  </figure>
</div>

Når flere bruker og videreutvikler samme løsning, kan investeringer og kompetanse utnyttes bedre på tvers av virksomheter og forvaltningsnivåer.

### Mer åpenhet, etterprøvbarhet og tillit
Tilgang til kildekoden gjør det mulig å undersøke hvordan en digital løsning er bygget og hvordan sentral funksjonalitet er implementert. Det gir bedre muligheter for innsyn og etterprøving, særlig for løsninger som påvirker innbyggere, rettigheter og viktige samfunnsfunksjoner.

Dette blir stadig viktigere med økt bruk av kunstig intelligens i offentlig sektor. Når KI brukes til å utvikle programvare eller inngår i løsninger som støtter vurderinger og beslutninger, er det viktig å kunne forstå og etterprøve hvordan løsningene fungerer og hvordan de er utviklet. Åpen kildekode kan gi større åpenhet og sporbarhet i koden, integrasjonene og endringene som gjøres.

Åpen kildekode gir ikke alene full forklarbarhet i en KI-løsning. Også blant annet modeller, data, konfigurasjon og beslutningsprosesser kan ha betydning. Men åpenhet om programvaren er et viktig bidrag til at offentlig sektor kan dokumentere, forklare og stå inne for løsningene den bruker. Det er vesentlig for å bevare tilliten til digitale offentlige tjenester.

### Sterkere digital beredskap
Åpen kildekode kan redusere sårbarhet ved at virksomheten ikke er like bundet til lukkede løsninger, enkeltleverandører eller utilgjengelig kompetanse. Det gir større handlefrihet ved teknologiske, økonomiske eller geopolitiske endringer.

Tilgang til kildekode og nødvendige rettigheter gir også flere muligheter dersom en leverandør endrer strategi, en teknologi fases ut eller kritiske komponenter må erstattes.

Åpen kildekode er derfor ikke bare et spørsmål om teknologi eller kostnader, men om hvordan offentlig sektor bevarer kontroll, tillit, handlingsrom og evne til å videreutvikle digitale tjenester over tid.

## Hva må dere ha kontroll på?

Før dere går videre med å bruke, dele eller bidra til åpen kildekode, må virksomheten etablere noen grunnleggende rammer. Det bør være tydelig hvem som beslutter hva som kan åpnes, hvilke krav som gjelder i anskaffelser og utviklingsløp, hvordan sikkerhet og lisensiering håndteres, og hvem som har ansvar for videre forvaltning.

Rammene trenger ikke være omfattende, men de bør være kjent og brukes konsekvent i virksomheten.

### Sikkerhet og sårbarheter
Ha rutiner for å følge opp avhengigheter, sårbarheter og sensitiv informasjon. Bygg sikkerhet inn i utviklings- og forvaltningsprosessen, og avklar hvordan sikkerhetsfeil skal meldes og håndteres.

### Lisenser og rettigheter
Avklar tidlig hvilke lisenser som gjelder, hvilke rettigheter virksomheten har til programvaren, og hvem som kan beslutte lisensvalg og publisering.

### Dokumentasjon og forvaltning
Sett tydelige forventninger til dokumentasjon, kontaktpunkt og videre forvaltning. Publisert kode må være mulig å forstå, bruke og følge opp over tid.

### Roller og ansvar
Gjør det tydelig hvem som eier koden, hvem som kan godkjenne endringer, og hvem som følger opp sikkerhet, feil og eksterne bidrag.

### Kostnader og kompetanse
Planlegg for nødvendig kapasitet, kompetanse og finansiering gjennom hele livsløpet – fra anskaffelse og utvikling til drift, videreutvikling og avvikling.

For mange virksomheter vil det være nyttig å samle disse rammene i en enkel intern policy eller veiledning for bruk, deling og bidrag til åpen kildekode.

<a id="fra-ambisjon-til-praksis"></a>
## Fra ambisjon til praksis

Virksomheter har ulike utgangspunkt. Noen bruker allerede mye åpen kildekode, mens andre har etablert praksis for å dele kode eller bidra aktivt til åpne prosjekter. Start der dere er, og bygg praksisen videre steg for steg.

### Skaff oversikt

Begynn med å forstå dagens situasjon. Kartlegg hvilke åpne komponenter og løsninger dere allerede bruker, hva dere selv utvikler, og hvilke eksterne prosjekter dere er særlig avhengige av.

Avklar samtidig hvem som har ansvar for lisenser, sikkerhet, publisering og forvaltning.

### Prøv ut praksisen

Velg et konkret område der dere kan få erfaring. Det kan være å:

- vurdere en eksisterende åpen løsning før en ny anskaffelse
- publisere én egnet kodebase og etablere gode rutiner rundt den
- forbedre styringen av åpne komponenter dere allerede bruker
- bidra tilbake til et prosjekt virksomheten er avhengig av

Ved publisering bør dere planlegge for åpenhet tidlig. Gjennomgå kode, repository, dokumentasjon og historikk før publisering, og vurder om hele løsningen kan åpnes eller om bare deler bør deles.

Start gjerne avgrenset, men bygg erfaringen inn i virksomhetens ordinære arbeidsprosesser.

### Gjør det til normal praksis

Når dere har erfaring, bør vurderinger av åpen kildekode inngå naturlig i arkitektur, anskaffelser, utvikling, sikkerhet og forvaltning.

Målet er ikke at alle virksomheter skal organisere arbeidet likt, men at **bruk, deling og bidrag blir bevisste valg som følges opp gjennom hele livsløpet**.

<a id="minimumskrav"></a>
## Sjekkliste for bruk, deling og bidrag

Bruk sjekklisten som støtte når dere vurderer en konkret løsning, kodebase eller avhengighet.

### Når dere skal bruke åpen kildekode

<div class="ak-checklist">
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Undersøk om eksisterende åpne løsninger kan dekke behovet før dere utvikler eller kjøper nytt.</span></div>
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Vurder kvalitet, sikkerhet, vedlikehold, kompetanse og kostnader gjennom hele livsløpet.</span></div>
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Skaff oversikt over viktige komponenter, avhengigheter og lisenser.</span></div>
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Vurder om løsningen gir tilstrekkelig kontroll over egne data, grensesnitt, portabilitet og mulighet for leverandørbytte.</span></div>
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Avklar hvem som har ansvar for oppdateringer, sårbarheter og videre forvaltning.</span></div>
</div>

### Når dere skal dele kode

<div class="ak-checklist">
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Vurder om hele løsningen kan åpnes, eller om enkelte deler må holdes tilbake.</span></div>
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Gjennomgå kode, repository, dokumentasjon og historikk før publisering.</span></div>
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Kontroller at hemmeligheter, tilgangsnøkler, personopplysninger og sensitiv konfigurasjon ikke publiseres.</span></div>
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Avklar rettigheter og velg en tydelig åpen lisens.</span></div>
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Sørg for README, kontaktpunkt og nødvendig dokumentasjon for bygging, bruk og videreutvikling.</span></div>
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Beskriv hvordan bidrag, feil og sikkerhetsmeldinger skal håndteres.</span></div>
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Avklar hvem som eier og forvalter koden over tid.</span></div>
</div>

### Når dere skal bidra tilbake

<div class="ak-checklist">
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Identifiser åpne prosjekter og komponenter virksomheten er særlig avhengig av.</span></div>
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Vurder om dere bør bidra med kode, feilretting, dokumentasjon, testing, sikkerhetsarbeid, deltakelse i fagmiljøer eller finansiering.</span></div>
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Prioriter oppfølging av avhengigheter som er kritiske for egne tjenester, og vurder om bidrag er et egnet tiltak.</span></div>
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Avklar hvem som kan bidra på vegne av virksomheten, og hvordan bidrag skal godkjennes.</span></div>
  <div class="ak-checklist__item"><span class="ak-checklist__box" aria-hidden="true"></span><span class="ak-checklist__text">Følg opp om bidragene faktisk styrker vedlikehold, sikkerhet og videreutvikling.</span></div>
</div>

<a id="hvor-modne-er-dere"></a>
## Hvor modne er dere?

Virksomheter har ulike utgangspunkt for arbeidet med åpen kildekode. Modenhetsmodellen under kan brukes til å vurdere hvor dere står i dag, og hva som kan være et naturlig neste steg.

Modellen bygger på arbeid fra [OSPO Alliance](https://ospo-alliance.org/) og beskriver fem nivåer: **bruk, tillit, kultur, engasjement og strategi**.

![Modenhetsmodell for åpen kildekode](../assets/img/figur-modenhet-apen-kildekode.svg)

På de første nivåene handler det om å bruke åpen kildekode på en kontrollert måte, med oversikt over blant annet sikkerhet, avhengigheter, lisenser og kostnader.

Etter hvert blir åpen kildekode en mer naturlig del av virksomhetens arbeidsform. Virksomheten deler egne løsninger, bidrar til prosjekter den er avhengig av og bygger kompetanse og samarbeid rundt åpne løsninger.

På det strategiske nivået brukes åpen kildekode bevisst som et virkemiddel for å nå virksomhetens mål – for eksempel økt handlingsrom, bedre gjenbruk, mindre leverandørinnlåsing og mer bærekraftig forvaltning av digitale løsninger.

Målet er ikke at alle virksomheter skal organisere arbeidet likt eller nå samme modenhetsnivå. Bruk modellen til å finne deres neste steg.

### Neste steg

Start der dere er. Velg ett område der dere kan forbedre praksisen – enten det handler om å få bedre kontroll på det dere allerede bruker, dele mer av det dere utvikler, eller bidra tilbake til den digitale grunnmuren dere er avhengige av.

Over tid bør målet være at åpen kildekode ikke behandles som et særskilt teknologivalg, men som en naturlig del av hvordan offentlig sektor utvikler, anskaffer og forvalter digitale løsninger.

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
