import { TONALITY_MAP } from '../data/tonalityMap.js';

/**
 * Yo resuelvo la alteración final que debe aplicarse a una nota.
 * @param {{
 *   activeAccidental: string | null,
 *   selectedTonality: string,
 *   noteId: string
 * }} params
 * @returns {string | null}
 */
export function resolveAccidentalType({
  activeAccidental,
  selectedTonality,
  noteId
}) {
  if (activeAccidental === 'sharp') {
    return 'sharp';
  }

  if (activeAccidental === 'flat') {
    return 'flat';
  }

  if (activeAccidental === 'natural') {
    return null;
  }

  const tonalityConfig = TONALITY_MAP[selectedTonality];

  if (!tonalityConfig) {
    return null;
  }

  const isAlteredByTonality = tonalityConfig.alteredNotes.includes(noteId);

  if (!isAlteredByTonality) {
    return null;
  }

  return tonalityConfig.accidentalType;
}

/**
 * Yo construyo la nota latina final con base en una alteración resuelta.
 * @param {{
 *   latinNote: string,
 *   accidentalType: string | null
 * }} params
 * @returns {string}
 */
export function buildDisplayedNote({ latinNote, accidentalType }) {
  if (accidentalType === 'sharp') {
    return `${latinNote}#`;
  }

  if (accidentalType === 'flat') {
    return `${latinNote}b`;
  }

  return latinNote;
}

/**
 * Yo resuelvo la nota final a insertar en la entrada.
 * @param {{
 *   noteId: string,
 *   latinNote: string,
 *   activeAccidental: string | null,
 *   selectedTonality: string
 * }} params
 * @returns {string}
 */
export function resolveDisplayedNote({
  noteId,
  latinNote,
  activeAccidental,
  selectedTonality
}) {
  const accidentalType = resolveAccidentalType({
    activeAccidental,
    selectedTonality,
    noteId
  });

  return buildDisplayedNote({
    latinNote,
    accidentalType
  });
}