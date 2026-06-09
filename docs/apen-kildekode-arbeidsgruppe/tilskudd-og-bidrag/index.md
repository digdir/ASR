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

Distribusjon av software-komponenter gjøres i stor grad i form av sentrale "registre" for de ulike økosystemene. Eksempler på disse er [Maven Central](https://central.sonatype.com) og [npmjs](https://www.npmjs.com). Disse registrene lagrer og serverer enorme mengder data, og dette krever teknisk infrastruktur i form av servere og nettverk. I dag finansieres dette i stor grad av private selskaper og ulike "foundations". Et tilak vi kan bidra med er å sette opp speiling av et eller flere av disse registrene på vår infrastruktur. Vi har mange miljøer som er kapable til dette i offentlig sektor. Kanskje slike speil kan være kandidater til å kjøre i en "offentlig sky"? Speiling har flere positive effekter. De avlaster og frigjør kapasitet i de sentrale registrene, og samtidig står vi bedre rustet til å få tak i de bibliotekene vi er avhengige av dersom de sentrale registrene av en eller annen grunn skulle bli utilgjengelige. 

Speiling kan gjøres både for kildekoden og de ferdigbygde pakkene.

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