/**
 * Define las notas válidas en formato canónico latino.
 */
const CANONICAL_LATIN_NOTES = new Map([
    ['do', 'Do'],
    ['do#', 'Do#'],
    ['dob', 'Dob'],
    ['re', 'Re'],
    ['re#', 'Re#'],
    ['reb', 'Reb'],
    ['mi', 'Mi'],
    ['mi#', 'Mi#'],
    ['mib', 'Mib'],
    ['fa', 'Fa'],
    ['fa#', 'Fa#'],
    ['fab', 'Fab'],
    ['sol', 'Sol'],
    ['sol#', 'Sol#'],
    ['solb', 'Solb'],
    ['la', 'La'],
    ['la#', 'La#'],
    ['lab', 'Lab'],
    ['si', 'Si'],
    ['si#', 'Si#'],
    ['sib', 'Sib']
]);

/**
 * Normaliza una nota escrita manualmente al formato canónico.
 * @param {string} rawNote
 * @returns {string | null}
 */
function normalizeLatinNote(rawNote) {
    const normalizedKey = rawNote.trim().toLowerCase();

    return CANONICAL_LATIN_NOTES.get(normalizedKey) || null;
}

/**
 * Parsea el texto de entrada separado por comas.
 * @param {string} inputValue
 * @returns {{
 *   notes: string[],
 *   hasError: boolean,
 *   errorType: string | null,
 *   invalidNote: string | null
 * }}
 */
export function parseInputNotes(inputValue) {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
        return {
            notes: [],
            hasError: false,
            errorType: null,
            invalidNote: null
        };
    }

    const rawParts = inputValue.split(',');

    const hasEmptyParts = rawParts.some((part) => !part.trim());

    if (hasEmptyParts) {
        return {
            notes: [],
            hasError: true,
            errorType: 'empty_note',
            invalidNote: null
        };
    }

    const normalizedNotes = rawParts.map((part) => normalizeLatinNote(part));
    const invalidIndex = normalizedNotes.findIndex((note) => !note);

    if (invalidIndex !== -1) {
        return {
            notes: [],
            hasError: true,
            errorType: 'invalid_note',
            invalidNote: rawParts[invalidIndex].trim()
        };
    }

    return {
        notes: normalizedNotes,
        hasError: false,
        errorType: null,
        invalidNote: null
    };
}