# Kilder

Denne mappa inneholder kildelista for arbeidsgruppen. Lista vises på nettsiden som
[kildeliste.html](https://digdir.github.io/ASR/apen-kildekode-arbeidsgruppe/kilder/kildeliste.html),
med søk og filter.

## Slik er lista bygget

- Kildene ligger i datafila `docs/_data/kilder.yml`, og siden lages ut fra den. Nye kilder legges inn
  der, ikke i en tabell.
- `kilder.csv` og `kilder.json` lages automatisk fra den samme fila når siden bygges. De skal ikke
  redigeres for hånd.
- Hver kilde har en fast id (for eksempel K012) som brukes til å lenke direkte:
  `kildeliste.html#K012`. En id skal aldri endres eller gjenbrukes.
- Hver kilde får tema, kildetype, opphav, prioritet, status og en kort beskrivelse av hvorfor den er
  relevant. Feltene og de tillatte verdiene er beskrevet øverst i `kilder.yml`.
- Alt i `kilder.yml` er offentlig, også feltet `merknad`, som ikke vises på siden, men kommer med i
  `kilder.json`.

## Slik legger du til en kilde

1. Kopier en oppføring i `docs/_data/kilder.yml`.
2. Gi den neste ledige id.
3. Fyll ut feltene etter beskrivelsen øverst i fila.

Forslag til nye kilder tas også imot i [GitHub Discussions](https://github.com/digdir/ASR/discussions/3).

## Andre filer i mappa

- `kildeliste.html`: selve siden. Innholdet ligger i `docs/_includes/kildeliste.html`.
- `kildeliste-arkiv.md`: den tidligere tabellversjonen av lista, slik den var 5. oktober 2026.
  Den oppdateres ikke lenger.
- `index.md`: tidligere oversiktsside. Den er ikke lenger lenket fra menyen.
- KI-genererte utkast basert på kildene. De vises ikke i menyen:
  - `utkast-omskriving-av-nav-veiledning.md`
  - `ki-sammendrag-veiledning.md`
  - `ki-sammendrag-tilskudd-og-bidrag.md`
  - `ki-generert-oppsummering-av-relevante-eu-initiativer.md`
