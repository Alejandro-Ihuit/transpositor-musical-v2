import { NOTE_BUTTONS } from '../../data/noteControls.js';
import { resolveDisplayedNote } from '../../utils/noteInsertion.js';

/**
 * Renderiza los botones de notas en cifrado americano.
 * @param {{
 *   activeAccidental: string | null,
 *   setActiveAccidental: React.Dispatch<React.SetStateAction<string | null>>,
 *   setInputValue: React.Dispatch<React.SetStateAction<string>>,
 *   selectedTonality: string
 * }} props
 * @returns {JSX.Element}
 */
function NoteButtons({
	activeAccidental,
	setActiveAccidental,
	setInputValue,
	selectedTonality
}) {
	/**
	 * Agrega una nota al textarea separándola por coma.
	 * @param {{ id: string, latin: string }} noteButton
	 * @returns {void}
	 */
	function handleNoteClick(noteButton) {
		const displayedNote = resolveDisplayedNote({
			noteId: noteButton.id,
			latinNote: noteButton.latin,
			activeAccidental,
			selectedTonality
		});

		setInputValue((currentValue) => {
			const trimmedValue = currentValue.trim();

			if (!trimmedValue) {
				return displayedNote;
			}

			return `${trimmedValue}, ${displayedNote}`;
		});

		setActiveAccidental(null);
	}

	return (
		<div>
			<p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
				Notas
			</p>

			<div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
				{NOTE_BUTTONS.map((button) => (
					<button
						key={button.id}
						type="button"
						onClick={() => handleNoteClick(button)}
						className="min-h-12 rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition duration-150 select-none hover:border-cyan-400 hover:text-cyan-300 active:scale-[.97] active:border-cyan-400 active:text-cyan-300"
					>
						{button.label}
					</button>
				))}
			</div>
		</div>
	);
}

export default NoteButtons;