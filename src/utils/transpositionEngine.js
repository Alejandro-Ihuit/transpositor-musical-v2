import { MAPEO_NOTAS } from "../data/transpositionData.js";

/**
 * defino la conversión de notas latinas hacia una clave interna compatible
 * con el mapa de transposición.
 */
const LATIN_TO_INTERNAL_NOTE_MAP = {
    Do: "do",
    "Do#": "do#",
    Dob: "dob",
    Re: "re",
    "Re#": "re#",
    Reb: "reb",
    Mi: "mi",
    "Mi#": "mi#",
    Mib: "mib",
    Fa: "fa",
    "Fa#": "fa#",
    Fab: "fab",
    Sol: "sol",
    "Sol#": "sol#",
    Solb: "solb",
    La: "la",
    "La#": "la#",
    Lab: "lab",
    Si: "si",
    "Si#": "si#",
    Sib: "sib",
};

/**
 * defino la conversión de la clave interna hacia notación latina visible.
 */
const INTERNAL_TO_LATIN_NOTE_MAP = {
    do: "Do",
    "do#": "Do#",
    dob: "Dob",
    re: "Re",
    "re#": "Re#",
    reb: "Reb",
    mi: "Mi",
    "mi#": "Mi#",
    mib: "Mib",
    fa: "Fa",
    "fa#": "Fa#",
    fab: "Fab",
    sol: "Sol",
    "sol#": "Sol#",
    solb: "Solb",
    la: "La",
    "la#": "La#",
    lab: "Lab",
    si: "Si",
    "si#": "Si#",
    sib: "Sib",
};

/**
 * convierto una nota latina a la clave interna del motor de transposición.
 * @param {string} latinNote
 * @returns {string | null}
 */
export function normalizeLatinNoteToInternal(latinNote) {
    return LATIN_TO_INTERNAL_NOTE_MAP[latinNote] || null;
}

/**
 * convierto una nota interna del motor a notación latina visible.
 * @param {string} internalNote
 * @returns {string | null}
 */
export function convertInternalNoteToLatin(internalNote) {
    return INTERNAL_TO_LATIN_NOTE_MAP[internalNote] || null;
}

/**
 * transpongo una sola nota en notación latina.
 * @param {{
 *   latinNote: string,
 *   selectedTransposition: string
 * }} params
 * @returns {string | null}
 */
export function transposeLatinNote({ latinNote, selectedTransposition }) {
    const internalNote = normalizeLatinNoteToInternal(latinNote);

    if (!internalNote) {
        return null;
    }

    const transpositionMap = MAPEO_NOTAS[selectedTransposition];

    if (!transpositionMap) {
        return null;
    }

    const transposedInternalNote = transpositionMap[internalNote];

    if (!transposedInternalNote) {
        return null;
    }

    return convertInternalNoteToLatin(transposedInternalNote);
}

/**
 * transpongo una lista de notas latinas.
 * @param {{
 *   latinNotes: string[],
 *   selectedTransposition: string
 * }} params
 * @returns {string[]}
 */
export function transposeLatinNotes({ latinNotes, selectedTransposition }) {
    return latinNotes.map((latinNote) => {
        const transposedNote = transposeLatinNote({
            latinNote,
            selectedTransposition,
        });

        return transposedNote || latinNote;
    });
}
