/* =====================================================================
   WOORDENLIJSTEN voor woorden-vr.html

   - Elke lijst heeft een korte naam (zonder spaties), een titel en de woorden.
   - Eén regel per woord: het woord, de betekenis en (mag leeg) een tip,
     bijvoorbeeld een voorbeeldzin of ezelsbruggetje.
   - Tekst tussen enkele aanhalingstekens '…' en elke regel eindigt met een komma.
   - Een apostrof in de tekst schrijf je als \'  (bijv. 'zo\'n').
   - Een lijst openen via een link: woorden-vr.html?lijst=blok2
   - In het spel kun je met ◀ ▶ wisselen tussen de lijsten.
   ===================================================================== */

/* Welke lijst opent standaard? (een link met ?lijst=… gaat voor) */
const STANDAARD_LIJST = 'blok2';

const WOORDENLIJSTEN = {

  blok1: {
    titel: 'Woorden blok 1',
    woorden: [
      { woord: 'nauwkeurig',   betekenis: 'heel precies',               tip: 'Ze tekende de kaart nauwkeurig na.' },
      { woord: 'onmiddellijk', betekenis: 'meteen, zonder te wachten',   tip: 'Kom onmiddellijk naar binnen!' },
      { woord: 'vermoeid',     betekenis: 'moe',                         tip: '' },
      { woord: 'gering',       betekenis: 'klein of weinig',             tip: 'De kans op regen is gering.' },
      { woord: 'aanzienlijk',  betekenis: 'flink groot of veel',         tip: '' },
      { woord: 'beweren',      betekenis: 'zeggen dat iets zo is',       tip: 'Hij beweert dat hij de snelste is.' },
      { woord: 'gezamenlijk',  betekenis: 'samen, met elkaar',           tip: '' },
      { woord: 'zorgvuldig',   betekenis: 'heel voorzichtig en netjes',  tip: 'Ze pakte het cadeau zorgvuldig in.' },
    ]
  },

  blok2: {
    titel: 'Woorden blok 2',
    woorden: [
      { woord: 'nieuwsgierig', betekenis: 'je wilt graag iets weten of ontdekken',            tip: 'De kat keek nieuwsgierig in de doos.' },
      { woord: 'aarzelen',     betekenis: 'twijfelen, nog niet goed weten of je iets doet',  tip: 'Hij aarzelde voordat hij in het water sprong.' },
      { woord: 'schitteren',   betekenis: 'fel glinsteren of stralen',                       tip: 'De sterren schitteren aan de hemel.' },
      { woord: 'ongeduldig',   betekenis: 'je kunt niet goed wachten',                       tip: '' },
      { woord: 'verzamelen',   betekenis: 'dingen bij elkaar brengen en bewaren',            tip: 'Zij verzamelt schelpen van het strand.' },
      { woord: 'eerlijk',      betekenis: 'je liegt niet en je speelt niet vals',            tip: '' },
    ]
  },

};
