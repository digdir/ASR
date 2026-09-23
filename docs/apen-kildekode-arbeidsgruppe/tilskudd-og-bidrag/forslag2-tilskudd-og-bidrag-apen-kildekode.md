---
layout: default
title: Hvordan kan vi bidra? (forslag 2)
description: Begrunnelse og mulige tiltak for tilskudd og bidrag til åpen kildekode
---

# Hvordan kan vi bidra?

<div class="ak-guide-layout">

<aside class="ak-guide-toc">
<h2>Innhold</h2>

<ul>
  <li><a href="#kort-oppsummert">Kort oppsummert</a></li>
  <li><a href="#hvorfor-bidra">Hvorfor bidra?</a></li>
  <li><a href="#ulike-nivaer">Ulike nivåer, ulike behov</a></li>
  <li><a href="#mater-a-bidra-pa">Måter å bidra på</a></li>
  <li><a href="#mulige-tiltak">Mulige tiltak</a></li>
  <li><a href="#laerdom-fra-andre">Hva kan vi lære av andre?</a></li>
  <li><a href="#sporsmal-som-ma-avklares">Spørsmål som må avklares</a></li>
  <li><a href="#mulige-neste-steg">Mulige neste steg</a></li>
  <li><a href="#kilder">Kilder</a></li>
</ul>
</aside>

<div class="ak-guide-body" markdown="1">

> **Arbeidsnotat, forslag 2:** 23. september 2026 / Morten G: Dette er en forenklet og mer overordnet versjon av [forslag 1](forslag-tilskudd-og-bidrag-apen-kildekode.md). Tiltakene på siden er **mulige tiltak**. Arbeidsgruppen har ikke vurdert eller prioritert dem ennå, og de er ikke juridisk, anskaffelsesfaglig eller økonomisk kvalitetssikret.

<a id="kort-oppsummert"></a>
## Kort oppsummert

Offentlig sektor er avhengig av åpen kildekode, ofte uten å vite det. Mye av denne koden vedlikeholdes av noen få personer med lite ressurser. Når et prosjekt ikke lenger vedlikeholdes, blir det en sikkerhets- og driftsrisiko for alle som bruker det.

Vi ønsker to ting samtidig:

- **Mer bruk og deling** av åpen kildekode i offentlig sektor.
- **God forvaltning** av den åpne kildekoden vi allerede er avhengige av.

Målene henger sammen. Jo mer vi bruker åpen kildekode, desto mer avhengige blir vi av at den blir vedlikeholdt. Og løsninger som er godt forvaltet, er tryggere for flere å ta i bruk.

Begge målene forutsetter at offentlig sektor ikke bare bruker åpen kildekode, men også bidrar tilbake. Å bidra betyr å ta en del av ansvaret for at programvaren vi bruker, forblir trygg og oppdatert. Det kan skje med tid, kompetanse, krav i anskaffelser, samarbeid, infrastruktur eller penger.

Arbeidsgruppen beskriver åpen kildekode med tre grep: **bruke, dele og bidra**. Denne siden handler om det tredje grepet.

<a id="hvorfor-bidra"></a>
## Hvorfor bør offentlig sektor bidra?

### 1. Vi er allerede avhengige

Åpen kildekode inngår i egne løsninger, leverandørløsninger, skytjenester og utviklingsverktøy. En vanlig digital tjeneste kan bygge på hundrevis av åpne komponenter. Mange av dem er ikke valgt bevisst, men følger med som en del av andre komponenter, rammeverk eller leverandørleveranser. Avhengigheten er derfor ofte usynlig, både for arkitekter og ledere, helt til noe går galt.

Spørsmålet er ikke om vi bruker åpen kildekode, men om vi forvalter avhengigheten på en ansvarlig måte.

### 2. Bidrag reduserer risiko

Et prosjekt kan være svært mye brukt og likevel ha svært få som vedlikeholder det. Mange prosjekter drives av enkeltpersoner eller små, frivillige miljøer. Når de mangler kapasitet, stopper sikkerhetsoppdateringer og feilretting, og i verste fall legges prosjektet ned. Da må alle som bruker det, enten ta over vedlikeholdet selv eller bytte løsning, ofte med kort varsel.

> **Eksempel: Ingress NGINX.** En mye brukt komponent i Kubernetes-miljøer, også i offentlig sektor. Prosjektet ble i hovedsak vedlikeholdt av én eller to personer på fritiden. Det ble avviklet i mars 2026, og det kommer ikke lenger sikkerhetsoppdateringer. Brukerne måtte migrere til andre løsninger. Selv varselet om avvikling fikk ikke flere til å bidra.

Presset på dem som vedlikeholder prosjektene øker. KI-verktøy gjør det lettere å lete etter sårbarheter, og gir flere rapporter å gå gjennom, både ekte og falske.

> **Eksempel: curl.** Et lite prosjekt som brukes i svært mye programvare. I januar 2026 avsluttet prosjektet dusørordningen for sårbarheter, fordi de små ressursene gikk med til å gå gjennom rapporter av lav kvalitet, mange av dem laget med KI.

### 3. Bidrag er god ressursbruk

Kostnaden ved åpen kildekode forsvinner ikke. Den flytter seg fra lisenser til vedlikehold, sikkerhet og kompetanse.

Åpen kildekode er et fellesgode: alle kan bruke den, uansett om de bidrar eller ikke. Det gjør det fristende å la andre ta regningen. Når mange tenker slik, blir viktige prosjekter underfinansiert, og risikoen øker for alle.

Når flere virksomheter bruker samme komponent, er det dessuten billigere å forbedre én felles løsning enn at hver lager og vedlikeholder sin egen variant.

En undersøkelse fra Linux Foundation viser at virksomheter som bidrar tilbake, i snitt rapporterer en nytte på 2–5 ganger kostnaden. Virksomheter som i stedet vedlikeholder egne varianter, får høyere kostnader over tid. Undersøkelsen bygger på erfaringer fra næringsliv og teknologiorganisasjoner, så tallene kan ikke overføres direkte til norsk offentlig sektor.

### 4. Bidrag styrker digital suverenitet og kompetanse

Digital suverenitet handler om at vi selv kan forstå, styre og endre løsningene vi er avhengige av, og ikke er prisgitt én leverandør eller ett land. Åpen kildekode gir denne muligheten, men bare hvis vi har kompetanse til å bruke den.

Den som bidrar, bygger kompetanse og får innflytelse over hvor prosjektet går. Den som bare bruker, blir avhengig av at andre gjør jobben, og av at kompetansen fortsatt finnes et sted når vi trenger den.

### 5. Bidrag gjør det lettere å velge åpen kildekode

Mange virksomheter er usikre på om åpne løsninger er trygge nok, og om de vil bli vedlikeholdt i årene framover. Når offentlig sektor bidrar til at viktige løsninger er godt forvaltet, blir det enklere for flere å velge dem. Bidrag er dermed også et virkemiddel for mer bruk av åpen kildekode.

<a id="ulike-nivaer"></a>
## Ulike nivåer, ulike behov

Ikke all åpen kildekode trenger samme type bidrag. Hva som passer, avhenger av hva slags programvare det gjelder, og hvor stor del av brukerne offentlig sektor utgjør. Det hjelper å skille mellom tre nivåer:

| Nivå | Eksempler | Hovedrisiko | Mest aktuelle bidrag |
| --- | --- | --- | --- |
| **Grunnleggende byggesteiner** som nesten alle bruker | Programbiblioteker, Kubernetes-komponenter, pakkeregistre som npm og Maven Central | Få vedlikeholdere, sårbarheter, prosjekter som legges ned | Tid og kompetanse, støtte via stiftelser, speiling av pakkeregistre |
| **Felles offentlige løsninger** som flere virksomheter bruker | Designsystemet og andre åpne løsninger fra offentlige virksomheter | Uklart eierskap, ingen penger til forvaltning når prosjektet er ferdig | Felles forvaltning, spleiselag, felles anskaffelser |
| **Egne og innkjøpte løsninger** som bygger på åpen kildekode | Fagsystemer, integrasjoner, leverandørleveranser | Skjulte avhengigheter, egne varianter, leverandørinnlåsing | Krav i anskaffelser, bidrag tilbake i stedet for egne varianter |

### Grunnleggende byggesteiner

Her er offentlig sektor én av svært mange brukere over hele verden. Vi kan ikke ta ansvaret alene, men vi kan ta vår del, særlig for komponenter som inngår i kritiske tjenester. Bidrag skjer ofte gjennom de etablerte prosjektene og stiftelsene som forvalter dem.

### Felles offentlige løsninger

Her er offentlig sektor ofte den viktigste, eller eneste, brukeren. Hvis vi ikke sørger for forvaltningen, gjør ingen andre det. Et vanlig problem er at løsningen utvikles i et prosjekt, men når prosjektet er ferdig, finnes det verken budsjett eller en ansvarlig for videre vedlikehold.

### Egne og innkjøpte løsninger

Her har virksomheten selv ansvaret. Mye av bidraget handler om hvordan vi bestiller og forvalter: hva vi krever av leverandørene, og om vi sender forbedringer tilbake til de åpne prosjektene i stedet for å lage egne varianter.

> **Noen begreper**
>
> - **Pakkeregister:** En tjeneste der utviklere henter ferdige komponenter til programvaren sin, for eksempel npm for JavaScript og Maven Central for Java.
> - **Speiling:** Å ha en egen kopi av et pakkeregister eller en kodeplattform. Da kan vi fortsatt bygge og drifte løsningene våre hvis den opprinnelige tjenesten blir utilgjengelig.
> - **Egen variant (fork):** En kopi av et åpent prosjekt som virksomheten endrer og vedlikeholder selv, utenfor det opprinnelige prosjektet.

<a id="mater-a-bidra-pa"></a>
## Måter å bidra på

| Form | Hva det kan være | Passer særlig når |
| --- | --- | --- |
| **Tid og kompetanse** | Feilretting, dokumentasjon, testing, kodegjennomgang, melde feil og sårbarheter på en god måte | Virksomheten har egne utviklere og bruker komponenten mye |
| **Anskaffelser** | Kjøpe vedlikehold, support og sikkerhetsarbeid, og stille krav om oversikt over avhengigheter og om at forbedringer bidras tilbake | Løsningen utvikles, leveres eller driftes av en leverandør |
| **Samarbeid** | Spleiselag, brukerfellesskap og felles forvaltning av løsninger flere bruker | Flere virksomheter bruker samme løsning |
| **Infrastruktur** | Speiling av pakkeregistre, kodeplattformer, bygg- og testmiljøer | Virksomheten har driftsmiljø og kompetanse til å levere tjenester til andre |
| **Penger** | Medlemskap i stiftelser, sponsing, tilskudd eller en felles finansieringsordning | Prosjektet mangler folk og midler, og det finnes en mottaker som kan ta imot |

Formene kan kombineres. En virksomhet kan for eksempel gi egne utviklere tid til å bidra, og samtidig stille krav til leverandørene sine.

Penger er ikke nødvendigvis det viktigste. For mange prosjekter er mangel på folk et like stort problem som mangel på penger. Direkte pengestøtte er dessuten det som krever flest avklaringer i offentlig sektor.

Anskaffelser kan derimot være et av de sterkeste virkemidlene. Offentlig sektor kjøper IT for store beløp hvert år. Små endringer i hva vi ber om når vi kjøper, kan derfor få stor samlet effekt.

<a id="mulige-tiltak"></a>
## Mulige tiltak

> **NB!** Tiltakene under er **eksempler på mulige tiltak**. Arbeidsgruppen har ikke tatt stilling til hvilke som bør gjennomføres. Hvert tiltak må vurderes juridisk, økonomisk og anskaffelsesfaglig før det eventuelt anbefales.

Tiltakene er sortert etter hvor mye som må avklares før de kan tas i bruk.

### A. Tiltak virksomheter kan vurdere selv

Disse tiltakene krever ingen ny ordning. De handler mest om arbeidsmåter og om tydelig aksept fra ledelsen.

- **Gi ansatte tid og mandat til å bidra.** Mange utviklere kan rette feil i åpne komponenter, men usikkerhet om det er lov gjør at det skjer lite. Ledelsen kan gjøre det tydelig at slikt arbeid er en del av jobben når det gjelder komponenter virksomheten er avhengig av. Hvor mye tid bør vurderes ut fra behovet, ikke styres med en fast prosentsats.
- **Sende forbedringer tilbake til det opprinnelige prosjektet.** En virksomhet som endrer en åpen komponent uten å sende endringen tilbake, må selv vedlikeholde endringen ved hver nye versjon. Det blir fort dyrt. Blir endringen en del av prosjektet, vedlikeholdes den sammen med resten, og alle får nytte av den.
- **Ha oversikt over egne avhengigheter.** Mange vet ikke hvilke åpne komponenter løsningene deres bygger på. En programvareliste (SBOM, *Software Bill of Materials*) gir denne oversikten. Den gjør det mulig å se hva virksomheten er avhengig av, og å reagere raskt når en sårbarhet blir kjent.
- **Delta i fagmiljøer og brukerfellesskap** rundt viktige prosjekter. Det gir tidlig innsikt i endringer og mulighet til å påvirke veien videre.

### B. Tiltak innenfor eksisterende virkemidler

Disse tiltakene bruker virkemidler vi allerede har, og kan prøves ut innenfor dagens regelverk og budsjetter.

- **Anskaffelser:** Kjøpe vedlikehold, support og sikkerhetsarbeid for åpne løsninger, ikke bare nyutvikling. Stille krav om oversikt over avhengigheter, om sårbarhetshåndtering og om at forbedringer bidras tilbake der det passer. Statens standardavtaler (SSA), som er standardkontrakter for IT-kjøp i staten, kan være et utgangspunkt. Kravene må utformes slik at de ikke begrenser konkurransen unødvendig.
- **Spleiselag:** Virksomheter som bruker samme løsning, deler kostnadene til vedlikehold eller videreutvikling. Det gjør det mulig å finansiere arbeid som ingen av dem ville tatt alene. Det krever en avtale om hvem som koordinerer, hvem som prioriterer, og hvordan kostnadene fordeles.
- **Medlemskap:** Bidra gjennom etablerte stiftelser som forvalter viktige prosjekter, for eksempel Linux Foundation, Apache Software Foundation eller Eclipse Foundation. Medlemskap gir en tydelig mottaker og innsyn i hvordan pengene brukes.
- **Infrastruktur:** Speile pakkeregistre eller tilby en felles kodeplattform, for eksempel som del av en offentlig sky. Det styrker beredskapen, gir bedre kontroll over hvilke komponenter vi bygger på, og avlaster de sentrale tjenestene. Noen virksomheter gjør dette allerede.
- **EU-midler:** Norge deltar i EU-programmet Digital Europe gjennom EØS, og norske virksomheter kan søke på lik linje med virksomheter i EU-land. Programmet finansierer blant annet digitale fellesløsninger, cybersikkerhet og samhandling på tvers av land. Digdir koordinerer norsk deltakelse sammen med Innovasjon Norge, Forskningsrådet og HK-dir.

### C. Tiltak som krever utredning

Disse tiltakene kan ha stor effekt, men krever politiske, juridiske og økonomiske avklaringer før de kan gjennomføres.

- **En nasjonal eller tverroffentlig finansieringsordning** for kritiske åpne komponenter. Den kan finansiere vedlikehold og sikkerhet i komponenter som ingen enkeltvirksomhet har ansvar for. Den krever budsjett, regelverk, kriterier for tildeling og noen som forvalter ordningen.
- **En felles modell for vedlikehold** av åpne løsninger som flere offentlige virksomheter er avhengige av. For eksempel at én virksomhet får ansvar og budsjett for å forvalte en løsning på vegne av flere.
- **Norsk deltakelse i europeiske samarbeid** som Digital Commons EDIC, der flere land samarbeider om åpne, gjenbrukbare digitale byggesteiner. Norge er ikke med i dag, verken som medlem eller observatør.

Å opprette en ny tilskuddsordning er en omfattende prosess med behandling på høyt politisk nivå. Ordningen trenger hjemmel, budsjett, regelverk og en forvaltning som følger opp tildelinger og rapportering. Det bør derfor først undersøkes om behovet kan dekkes med eksisterende virkemidler, for eksempel anskaffelser. Erfaringer fra Tyskland viser at det er mulig (se under).

<a id="laerdom-fra-andre"></a>
## Hva kan vi lære av andre?

- **Tyskland, Sovereign Tech Agency:** Statlig finansiert etter vedtak i Forbundsdagen. Investerer i åpne grunnkomponenter, sikkerhetsarbeid og nøkkelpersoner i åpne prosjekter. Ifølge EUs Open Source Observatory (OSOR) har ordningen brukt offentlig anskaffelsesregelverk og ikke en egen tilskuddsordning.
  *Lærdom:* Det kan være mulig å finansiere kritisk åpen kildekode uten å opprette en ny tilskuddsordning.
- **EU:** Åpen kildekode er en del av EUs satsing på teknologisk suverenitet, blant annet gjennom EUs strategi for åpen kildekode.
  *Lærdom:* EU ser åpen kildekode som et strategisk virkemiddel, ikke bare som et teknisk valg. Norske tiltak kan kobles til dette arbeidet, blant annet gjennom Digital Europe.
- **Kommunesamarbeid:** eVaka (Finland), Signalen (Nederland) og Decidim (Spania) er eksempler på at flere kommuner finansierer og forvalter en åpen løsning sammen.
  *Lærdom:* Felles eierskap og felles finansiering gjør at løsningen lever videre etter at det første prosjektet er ferdig.
- **Næringslivet, Open Source Pledge:** Selskaper forplikter seg til å betale minst 2 000 dollar per utvikler per år til åpen kildekode-prosjekter.
  *Lærdom:* Tallet kan være et nyttig sammenligningsgrunnlag for hva et rimelig bidrag er.

<a id="sporsmal-som-ma-avklares"></a>
## Spørsmål som må avklares

Før tiltak kan anbefales, må blant annet dette avklares:

1. **Hva er kritisk?** Hvilke åpne komponenter er offentlig sektor mest avhengig av, og hvilke er mest sårbare? Uten en slik oversikt vet vi ikke hvor bidrag gir mest effekt.
2. **Hvem kan motta støtte?** Enkeltpersoner, prosjekter, stiftelser eller leverandører? Mange prosjekter har ingen juridisk enhet og drives av personer i flere land. Det gjør det vanskelig å betale dem på en ryddig måte. Mellomledd som stiftelser eller Open Source Collective kan være en løsning.
3. **Hvilket regelverk gjelder?** Kjøp av tjenester må følge anskaffelsesregelverket. Støtte til en aktør som driver økonomisk virksomhet, kan være statsstøtte etter EØS-avtalen. Da gjelder egne regler, og tildelingen kan måtte registreres i Støtteregisteret.
4. **Hvordan sikrer vi varighet?** Mye offentlig finansiering er knyttet til prosjekter med en sluttdato. Åpen kildekode trenger vedlikehold så lenge den er i bruk.
5. **Hvordan unngår vi å favorisere enkeltleverandører?** Krav og støtte må utformes slik at flere leverandører kan konkurrere, og slik at vi ikke skaper nye bindinger.
6. **Hvordan måler vi effekt?** For eksempel færre alvorlige sårbarheter, raskere oppdateringer, flere aktive vedlikeholdere eller mer gjenbruk.

<a id="mulige-neste-steg"></a>
## Mulige neste steg

Dette kan være aktuelle neste steg for arbeidsgruppen:

1. **Kartlegge** hvilke åpne komponenter noen offentlige virksomheter har felles, og hvilke av dem som er kritiske. Det gir et faktagrunnlag for å velge hvor bidrag bør settes inn.
2. **Prøve ut** ett eller to tiltak i en avgrenset pilot, for eksempel en felles vedlikeholdsavtale eller arbeidstid til bidrag for 5–10 felles komponenter. En pilot gir erfaring med de praktiske og juridiske spørsmålene før noe gjøres i større skala.
3. **Lage en kort veiledning** for hvordan virksomheter kan gi ansatte tid til å bidra. Dette er et av de enkleste tiltakene, og en veiledning kan fjerne usikkerheten om hva som er lov.
4. **Utrede** om en felles finansieringsmodell kan etableres innenfor eksisterende virkemidler, med Sovereign Tech Agency som ett av eksemplene.

<a id="kilder"></a>
## Kilder

> **Arbeidsnotat:** Kildene er sjekket 23. september 2026. Flere kilder finnes i [kildelista](../kilder/kildeliste.md).

### Begrunnelse og eksempler

- [Linux Foundation: ROI for Open Source Software Contribution](https://www.linuxfoundation.org/research/contribution-roi?hsLang=en) – nytte og kostnad ved å bidra tilbake
- [Kubernetes: Ingress NGINX Retirement](https://www.kubernetes.dev/blog/2025/11/12/ingress-nginx-retirement/) – eksempel på en mye brukt komponent som ble avviklet
- [The Register: Curl shutters bug bounty program to stop AI slop](https://www.theregister.com/security/2026/01/21/curl-shutters-bug-bounty-program-to-stop-ai-slop/5063039) – eksempel på økt belastning på vedlikeholdere som følge av KI-genererte rapporter
- [Open Source Initiative: The 2026 State of Open Source Report](https://opensource.org/blog/the-2026-state-of-open-source-report) – vedlikeholdsbyrde og utdatert programvare i virksomheter
- [State of Public Code 2026](https://www.softwareheritage.org/state-of-public-code/) – måling av hvordan offentlig sektor bidrar til åpen kildekode
- [Linux Foundation Europe: The European Public Sector Open Source Opportunity](https://www.linuxfoundation.org/hubfs/LF%20Research/European%20Public%20Sector%20Open%20Source%20Opportunity%20-%20Report.pdf?hsLang=en) – offentlig sektors rolle i europeisk åpen kildekode

### Finansieringsmodeller

- [OSOR: Funding Opportunities for Open Source Software Projects in the Public Sector](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/funding-opportunities-open-source-software-projects-public-sector) – oversikt over EU-midler, Sovereign Tech Agency og kommunesamarbeid
- [Sovereign Tech Agency](https://www.sovereign.tech/) – tysk statlig finansiering av åpen digital infrastruktur
- [Open Source Pledge](https://opensourcepledge.com/) – næringslivets forpliktelse til å finansiere åpen kildekode
- [Open Source Collective](https://oscollective.org/) og [GitHub Sponsors](https://github.com/open-source/sponsors) – måter prosjekter kan ta imot penger på

### EU og Norden

- [EU Open Source Strategy](https://digital-strategy.ec.europa.eu/en/factpages/eu-open-source-strategy) – EUs strategi for åpen kildekode
- [EU: Strengthening Europe's Tech Sovereignty](https://digital-strategy.ec.europa.eu/en/policies/eu-tech-sovereignty) – EUs samlede satsing på teknologisk suverenitet
- [Digdir: Digital Europe-programmet](https://www.digdir.no/internasjonalt-arbeid/digital-europa-programmet-digital-europe-programme/3192) – norsk deltakelse i EU-programmet
- [EU: European Digital Infrastructure Consortium (EDIC)](https://digital-strategy.ec.europa.eu/en/policies/edic) – blant annet Digital Commons EDIC og hvem som deltar
- [OSOR Handbook: Open Source Software in Public Administration](https://interoperable-europe.ec.europa.eu/sites/default/files/custom-page/attachment/2026-01/osor-handbook.pdf) – håndbok for offentlig sektor, blant annet om anskaffelser og finansiering
- [Digitaliseringsstyrelsen: National Support Structures and Capabilities for growing Digital Sovereignty](https://arkitektur.digst.dk/sites/default/fileuploads/Danish-OSPO-Study-Final.pdf) – dansk studie av nasjonale støttestrukturer for åpen kildekode

### Norsk regelverk og virkemidler

- [Statens standardavtaler (SSA)](https://www.anskaffelser.no/avtaler-og-regelverk/statens-standardavtaler-ssa) – kontrakter for utvikling, vedlikehold og drift
- [Brønnøysundregistrene: Om Støtteregisteret](https://www.brreg.no/om-oss/registrene-vare/om-stotteregisteret/) – krav om registrering av statsstøtte

</div>
</div>
