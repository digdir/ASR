# ASR
Arkitektur- og standardiseringsrådet
(Arbeidsgrupper og annen informasjon fra ASR...)

Innholdet i dette repoet er publisert som github pages på https://digdir.github.io/ASR/

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
- Nettstedets tittel, beskrivelse, tema og base-URL styres av
  `docs/_config.yml`.
- GitHub Pages bruker standardtemaet `jekyll-theme-cayman`.
- Egen stil for brede kildetabeller lastes bare for kildesidene via
  `docs/_includes/head-custom.html` og ligger i
  `docs/apen-kildekode-arbeidsgruppe/assets/css/kilder.scss`.
- Publiseringsjobben ligger i `.github/workflows/jekyll-gh-pages.yml` og bygger
  `docs/` til GitHub Pages.
