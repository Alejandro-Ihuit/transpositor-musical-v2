import { ACCIDENTAL_BUTTONS } from '../../data/noteControls.js';

/**
 * Renderiza los botones de alteración puntual.
 * @param {{
 *   activeAccidental: string | null,
 *   setActiveAccidental: React.Dispatch<React.SetStateAction<string | null>>
 * }} props
 * @returns {JSX.Element}
 */
function AccidentalButtons({ activeAccidental, setActiveAccidental }) {
	/**
	 * Activa o desactiva una alteración puntual.
	 * @param {string} accidentalId
	 * @returns {void}
	 */
	function handleAccidentalClick(accidentalId) {
		setActiveAccidental((currentAccidental) => {
			if (currentAccidental === accidentalId) {
				return null;
			}

			return accidentalId;
		});
	}

	return (
		<div className="mb-2">
			<p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
				Alteración puntual
			</p>

			<div className="grid grid-cols-3 gap-3">
				{ACCIDENTAL_BUTTONS.map((button) => {
					const isActive = activeAccidental === button.id;

					return (
						<button
							key={button.id}
							type="button"
							onClick={() => handleAccidentalClick(button.id)}
							aria-pressed={isActive}
							className={`min-h-12 rounded-2xl border px-4 py-3 text-base font-semibold transition duration-150 select-none active:scale-[0.97] ${isActive
									? 'border-cyan-300 bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/30 ring-2 ring-cyan-200/70'
									: 'border-white/10 bg-slate-900 text-white hover:border-cyan-400 hover:text-cyan-300 active:border-cyan-400 active:text-cyan-300'
								}`}
						>
							{button.label}
						</button>
					);
				})}
			</div>
		</div>
	);
}

export default AccidentalButtons;