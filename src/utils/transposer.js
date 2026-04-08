import { ENARMONIAS, MAPEO_NOTAS } from '../data/transpositionData.js';

/**
 * normalizo una nota para reconocer equivalencias enarmónicas.
 * @param {string} nota
 * @returns {string}
 */
export function normalizarEntrada(nota) {
  const notaLimpia = nota.toLowerCase().trim();

  return ENARMONIAS[notaLimpia] || notaLimpia;
}

/**
 * transpongo un arreglo de notas con base en el tono seleccionado.
 * @param {string[]} notasOriginales
 * @param {string} tono
 * @returns {string[] | null}
 */
export function transponerNotas(notasOriginales, tono) {
  const mapa = MAPEO_NOTAS[tono];

  if (!mapa) {
    return null;
  }

  return notasOriginales.map((nota) => {
    const notaNormalizada = normalizarEntrada(nota);

    return mapa[notaNormalizada] || mapa[nota.toLowerCase()] || nota;
  });
}