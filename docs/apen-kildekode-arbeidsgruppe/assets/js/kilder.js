/* Søk og filter for kildelista. Uten JavaScript vises alle kilder. */
(function () {
  'use strict';
  var liste = document.getElementById('kl-liste');
  if (!liste) return;

  var kort = Array.prototype.slice.call(liste.querySelectorAll('.kl-kort'));
  var sok = document.getElementById('kl-sok');
  var type = document.getElementById('kl-type');
  var opphav = document.getElementById('kl-opphav');
  var sort = document.getElementById('kl-sort');
  var gamle = document.getElementById('kl-gamle');
  var antall = document.getElementById('kl-antall');
  var ingen = document.getElementById('kl-ingen');
  var nullstill = document.getElementById('kl-nullstill');
  var temaKnapper = Array.prototype.slice.call(document.querySelectorAll('.kl-tema__knapp'));
  var valgteTema = [];
  var prioritet = { 'Høy': 0, 'Middels': 1, 'Lav': 2 };
  var opprinneligRekkefolge = kort.slice();

  // Vis verktøyene først når JavaScript virker.
  document.querySelectorAll('.kl-verktoy, .kl-tema').forEach(function (el) { el.hidden = false; });

  // Søketekst per kort, laget én gang.
  kort.forEach(function (k) {
    k._sok = (k.textContent || '').toLowerCase().replace(/\s+/g, ' ');
  });

  function lesUrl() {
    var p = new URLSearchParams(window.location.search);
    sok.value = p.get('q') || '';
    type.value = p.get('type') || '';
    opphav.value = p.get('opphav') || '';
    sort.value = p.get('sort') === 'tittel' ? 'tittel' : 'prioritet';
    gamle.checked = p.get('alle') === '1';
    valgteTema = p.getAll('tema');
    temaKnapper.forEach(function (b) {
      b.setAttribute('aria-pressed', valgteTema.indexOf(b.dataset.tema) > -1 ? 'true' : 'false');
    });
  }

  function skrivUrl() {
    var p = new URLSearchParams();
    if (sok.value.trim()) p.set('q', sok.value.trim());
    valgteTema.forEach(function (t) { p.append('tema', t); });
    if (type.value) p.set('type', type.value);
    if (opphav.value) p.set('opphav', opphav.value);
    if (sort.value === 'tittel') p.set('sort', 'tittel');
    if (gamle.checked) p.set('alle', '1');
    var q = p.toString();
    history.replaceState(null, '', window.location.pathname + (q ? '?' + q : '') + window.location.hash);
    nullstill.hidden = !q;
  }

  function oppdater() {
    var ord = sok.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    var synlige = 0;
    kort.forEach(function (k) {
      var tema = k.dataset.tema.split('|');
      var vis =
        (gamle.checked || k.dataset.status === 'Gjeldende') &&
        (!type.value || k.dataset.type === type.value) &&
        (!opphav.value || k.dataset.opphav === opphav.value) &&
        valgteTema.every(function (t) { return tema.indexOf(t) > -1; }) &&
        ord.every(function (o) { return k._sok.indexOf(o) > -1; });
      k.hidden = !vis;
      if (vis) synlige++;
    });

    var sortert = sort.value === 'tittel'
      ? kort.slice().sort(function (a, b) { return a.dataset.tittel.localeCompare(b.dataset.tittel, 'nb'); })
      : opprinneligRekkefolge.slice().sort(function (a, b) { return prioritet[a.dataset.prioritet] - prioritet[b.dataset.prioritet]; });
    sortert.forEach(function (k) { liste.appendChild(k); });

    antall.textContent = synlige === kort.length
      ? 'Viser alle ' + kort.length + ' kilder'
      : 'Viser ' + synlige + ' av ' + kort.length + ' kilder';
    ingen.hidden = synlige > 0;
    skrivUrl();
  }

  temaKnapper.forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.dataset.tema;
      var i = valgteTema.indexOf(t);
      if (i > -1) valgteTema.splice(i, 1); else valgteTema.push(t);
      b.setAttribute('aria-pressed', i > -1 ? 'false' : 'true');
      oppdater();
    });
  });
  [sok, type, opphav, sort, gamle].forEach(function (el) { el.addEventListener('input', oppdater); });
  nullstill.addEventListener('click', function () {
    history.replaceState(null, '', window.location.pathname);
    lesUrl();
    oppdater();
    sok.focus();
  });

  // Lenke direkte til en kilde (#K012): vis den selv om filteret ville skjult den.
  function visAnker() {
    var id = window.location.hash.slice(1);
    var mal = id && document.getElementById(id);
    if (mal && mal.classList.contains('kl-kort')) {
      if (mal.hidden) { mal.hidden = false; }
      mal.classList.add('kl-kort--markert');
      mal.scrollIntoView();
    }
  }

  lesUrl();
  oppdater();
  visAnker();
  window.addEventListener('hashchange', visAnker);
})();
