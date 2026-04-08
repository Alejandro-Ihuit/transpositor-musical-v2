/**
 * defino la conversión de notas base desde cifrado americano a latino.
 */
const AMERICAN_TO_LATIN_NOTE_MAP = {
  C: 'Do',
  D: 'Re',
  E: 'Mi',
  F: 'Fa',
  G: 'Sol',
  A: 'La',
  B: 'Si'
};

/**
 * convierto una nota base al formato de visualización solicitado.
 * @param {{
 *   note: string,
 *   displayFormat: 'american' | 'latin'
 * }} params
 * @returns {string}
 */
function resolveDisplayNoteBase({ note, displayFormat }) {
  if (displayFormat === 'latin') {
    return AMERICAN_TO_LATIN_NOTE_MAP[note] || note;
  }

  return note;
}

/**
 * construyo la etiqueta visible de alteraciones para una tonalidad.
 * @param {{
 *   selectedTonality: string,
 *   tonalityMap: Record<string, { accidentalType: string, alteredNotes: string[] }>,
 *   displayFormat?: 'american' | 'latin'
 * }} params
 * @returns {string}
 */
export function getTonalityAccidentalsLabel({
  selectedTonality,
  tonalityMap,
  displayFormat = 'american'
}) {
  const tonalityConfig = tonalityMap[selectedTonality];

  if (!tonalityConfig || tonalityConfig.alteredNotes.length === 0) {
    return 'Ninguna';
  }

  return tonalityConfig.alteredNotes
    .map((note) => {
      const displayNoteBase = resolveDisplayNoteBase({
        note,
        displayFormat
      });

      if (tonalityConfig.accidentalType === 'sharp') {
        return `${displayNoteBase}#`;
      }

      if (tonalityConfig.accidentalType === 'flat') {
        return `${displayNoteBase}b`;
      }

      return displayNoteBase;
    })
    .join(', ');
}