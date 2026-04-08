import {
	TRANSPOSITION_OPTIONS,
	TONALITY_OPTIONS,
} from "../../data/selectOptions.js";

/**
 * renderizo la barra superior con los selectores principales.
 * @param {{
 *   selectedTransposition: string,
 *   setSelectedTransposition: React.Dispatch<React.SetStateAction<string>>,
 *   selectedTonality: string,
 *   setSelectedTonality: React.Dispatch<React.SetStateAction<string>>
 * }} props
 * @returns {JSX.Element}
 */
function TranspositionBar({
	selectedTransposition,
	setSelectedTransposition,
	selectedTonality,
	setSelectedTonality,
}) {
	return (
		<section className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl">
			<div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-300">
						Transposición
					</label>

					<select
						value={selectedTransposition}
						onChange={(event) => setSelectedTransposition(event.target.value)}
						className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
					>
						{TRANSPOSITION_OPTIONS.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium text-slate-300">
						Tonalidad
					</label>

					<select
						value={selectedTonality}
						onChange={(event) => setSelectedTonality(event.target.value)}
						className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
					>
						{TONALITY_OPTIONS.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</div>
			</div>
		</section>
	);
}

export default TranspositionBar;
