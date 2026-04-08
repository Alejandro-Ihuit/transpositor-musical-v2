/**
 * defino las alteraciones puntuales disponibles.
 */
export const ACCIDENTAL_BUTTONS = [
  { id: 'sharp', label: '#' },
  { id: 'flat', label: '♭' }, // usamos signo, no letra
  { id: 'natural', label: '♮' }
];

/**
 * defino las notas base en cifrado americano para los botones
 * y su equivalente en notación latina.
 */
export const NOTE_BUTTONS = [
  { id: 'C', label: 'C', latin: 'Do' },
  { id: 'D', label: 'D', latin: 'Re' },
  { id: 'E', label: 'E', latin: 'Mi' },
  { id: 'F', label: 'F', latin: 'Fa' },
  { id: 'G', label: 'G', latin: 'Sol' },
  { id: 'A', label: 'A', latin: 'La' },
  { id: 'B', label: 'B', latin: 'Si' }
];