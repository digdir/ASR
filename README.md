# ASR
Arkitektur- og standardiseringsrådet
(Arbeidsgrupper og annen informasjon fra ASR...)

Innholdet i dette repoet er publisert som github pages på https://digdir.github.io/ASR/.
Innhold om arbeidet med åpen kildekode i offentlig sektor publiseres på https://digdir.github.io/ASR/apen-kildekode-arbeidsgruppe/

## Arbeidsflyt i delt repo

Dette repoet deles av flere bidragsytere med ulike lokale kopier. Før du gjør
endringer, sjekk derfor alltid at lokal `main` bygger på siste versjon på
GitHub.

Anbefalt flyt:

1. Kjør `git fetch origin main` eller sjekk `origin/main`.
2. Hvis lokal `main` ligger bak, oppdater med `git pull --ff-only origin main`
   før du redigerer.
3. Hvis du allerede har lokale endringer, ta vare på dem før du oppdaterer, og
   legg dem tilbake oppå siste `origin/main`.
4. Sjekk at `origin/main` ikke har flyttet seg rett før du pusher.

## GitHub Pages

GitHub Pages-publiseringen ligger under `docs/`.

- Forsiden for Pages styres av `docs/index.md`.
- Siden for arbeidsgruppen for åpen kildekode styres av
  `docs/apen-kildekode-arbeidsgruppe/index.md`.
- Undersider styres av `index.md` i undermappene, for eksempel
  `docs/apen-kildekode-arbeidsgruppe/kilder/index.md`.
- Bilder og figurer for arbeidsgruppen kan legges i
  `docs/apen-kildekode-arbeidsgruppe/assets/img/`.
- Nettstedets tittel, beskrivelse, tema og base-URL styres av
  `docs/_config.yml`.
- GitHub Pages bruker standardtemaet `jekyll-theme-cayman`.
- Egen stil for brede kildetabeller lastes bare for kildesidene via
  `docs/_includes/head-custom.html` og ligger i
  `docs/apen-kildekode-arbeidsgruppe/assets/css/kilder.scss`.
- Publiseringsjobben ligger i `.github/workflows/jekyll-gh-pages.yml` og bygger
  `docs/` til GitHub Pages.

## Vedlikehold av Mermaid-diagrammer

Mermaid-diagrammer brukes for å visualisere modeller og prosesser. For å sikre at diagrammer renderes korrekt på GitHub Pages, lastes mermaid.js fra CDN med SRI-hash-verifisering.

**Oppdatering av Mermaid-versjonen:**

Når du ønsker å oppdatere til en nyere versjon av Mermaid:

1. Velg ønsket versjon fra https://www.npmjs.com/package/mermaid
2. Generer ny SRI-hash:
   ```bash
   curl -fsSL https://cdn.jsdelivr.net/npm/mermaid@11.x.x/dist/mermaid.min.js | openssl dgst -sha384 -binary | openssl base64 -A
   ```
3. Oppdater `docs/apen-kildekode-arbeidsgruppe/_layouts/default.html`:
   - Endre versjonsnummer i script-taggen
   - Erstatt `integrity`-attributtet med den nye hashen

**Nåværende konfigurasjon:**
- Versjon: 11.4.0
- Plassering: `docs/apen-kildekode-arbeidsgruppe/_layouts/default.html`
