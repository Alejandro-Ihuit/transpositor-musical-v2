import { TONALITY_MAP } from '../../data/tonalityMap.js';
import { getTonalityAccidentalsLabel } from '../../utils/tonalityDisplay.js';

import AccidentalButtons from './AccidentalButtons.jsx';
import NoteButtons from './NoteButtons.jsx';

/**
 * Renderiza el panel de entrada y sus controles visuales.
 * @param {{
 *   activeAccidental: string | null,
 *   setActiveAccidental: React.Dispatch<React.SetStateAction<string | null>>,
 *   inputValue: string,
 *   setInputValue: React.Dispatch<React.SetStateAction<string>>,
 *   selectedTonality: string,
 *   parsedInput: {
 *     notes: string[],
 *     hasError: boolean,
 *     errorType: string | null,
 *     invalidNote: string | null
 *   }
 * }} props
 * @returns {JSX.Element}
 */
function InputPanel({
	activeAccidental,
	setActiveAccidental,
	inputValue,
	setInputValue,
	selectedTonality,
	parsedInput
}) {
	const tonalityAccidentalsLabel = getTonalityAccidentalsLabel({
		selectedTonality,
		tonalityMap: TONALITY_MAP,
		displayFormat: 'latin'
	});

	const hasInputContent = inputValue.trim().length > 0;

	/**
	 * Resuelve el mensaje de error visible para la entrada manual.
	 * @returns {string}
	 */
	function getInputErrorMessage() {
		if (parsedInput.errorType === 'empty_note') {
			return 'Cada nota debe estar separada por coma y no debe haber espacios vacíos entre comas.';
		}

		if (parsedInput.errorType === 'invalid_note') {
			return `La nota "${parsedInput.invalidNote}" no es válida. Usa formato latino como Do, Re, Mi, Fa#, Sib.`;
		}

		return 'La entrada contiene un formato inválido.';
	}

	/**
	 * Elimina la última nota capturada del textarea.
	 * @returns {void}
	 */
	function handleRemoveLastNote() {
		if (!hasInputContent) {
			return;
		}

		setInputValue((currentValue) => {
			const trimmedValue = currentValue.trim();

			if (!trimmedValue) {
				return '';
			}

			const notes = trimmedValue
				.split(',')
				.map((note) => note.trim())
				.filter(Boolean);

			notes.pop();

			return notes.join(', ');
		});
	}

	/**
	 * Limpia toda la entrada y reinicia la alteración activa.
	 * @returns {void}
	 */
	function handleClearInput() {
		if (!hasInputContent) {
			return;
		}

		setInputValue('');
		setActiveAccidental(null);
	}

	/**
	 * Normaliza visualmente la entrada al perder foco, solo si es válida.
	 * @returns {void}
	 */
	function handleInputBlur() {
		if (parsedInput.hasError) {
			return;
		}

		if (parsedInput.notes.length === 0) {
			return;
		}

		setInputValue(parsedInput.notes.join(', '));
	}

	/**
	 * Resuelve las clases del botón Limpiar/Borrar según disponibilidad.
	 * @returns {string}
	 */
	function getActionButtonClassName() {
		if (!hasInputContent) {
			return 'cursor-not-allowed border-white/10 bg-slate-950 text-slate-600 opacity-60';
		}

		return 'border-white/10 bg-slate-900 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 active:scale-[0.98]';
	}

	return (
		<article className="rounded-xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl">
			<div className="mb-3 flex flex-wrap items-center justify-between gap-3">
				<h2 className="text-lg font-semibold">Entrada</h2>

				<div className="flex items-center gap-4">
					<span className="text-sm text-slate-400">
						Alteraciones: {tonalityAccidentalsLabel}
					</span>
				</div>

				<button
					type="button"
					onClick={handleClearInput}
					disabled={!hasInputContent}
					className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${getActionButtonClassName()}`}
				>
					Limpiar
				</button>
			</div>

			<textarea
				value={inputValue}
				onChange={(event) => setInputValue(event.target.value)}
				onBlur={handleInputBlur}
				className={`min-h-[220px] w-full resize-none rounded-2xl px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 sm:min-h-[150px] ${parsedInput.hasError
						? 'border border-red-400 bg-red-950/20 focus:border-red-300'
						: 'border border-white/10 bg-slate-950 focus:border-cyan-400'
					}`}
				placeholder="Escribe las notas aquí, separadas por comas; o usa los botones para ingresar notas sin preocuparte por el formato. Ejemplo: do, Do, DO, o Sib..."
			/>

			{parsedInput.hasError && (
				<p className="mt-2 text-sm text-red-300">
					{getInputErrorMessage()}
				</p>
			)}

			<div className="mt-2 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
				<AccidentalButtons
					activeAccidental={activeAccidental}
					setActiveAccidental={setActiveAccidental}
				/>

				<NoteButtons
					activeAccidental={activeAccidental}
					setActiveAccidental={setActiveAccidental}
					setInputValue={setInputValue}
					selectedTonality={selectedTonality}
				/>

				<div className="mt-4 grid grid-cols-1 gap-2">
					<button
						type="button"
						onClick={handleRemoveLastNote}
						disabled={!hasInputContent}
						className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${getActionButtonClassName()}`}
					>
						Borrar última
					</button>
				</div>
			</div>
		</article>
	);
}

export default InputPanel;