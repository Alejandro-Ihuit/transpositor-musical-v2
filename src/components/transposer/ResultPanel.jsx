/**
 * Renderiza el panel de resultado.
 * @param {{
 *   resultValue: string,
 *   hasInputError: boolean,
 *   onCopyResult: () => void | Promise<void>,
 *   copyStatus: 'idle' | 'success' | 'error',
 *   canCopyResult: boolean
 * }} props
 * @returns {JSX.Element}
 */
function ResultPanel({
	resultValue,
	hasInputError,
	onCopyResult,
	copyStatus,
	canCopyResult
}) {
	/**
	 * Resuelve la etiqueta visible del botón de copiado.
	 * @returns {string}
	 */
	function getCopyButtonLabel() {
		if (!canCopyResult) {
			return 'Copiar';
		}

		if (copyStatus === 'success') {
			return 'Copiado';
		}

		if (copyStatus === 'error') {
			return 'Error al copiar';
		}

		return 'Copiar';
	}

	/**
	 * Resuelve las clases visuales del botón de copiado.
	 * @returns {string}
	 */
	function getCopyButtonClassName() {
		if (!canCopyResult) {
			return 'cursor-not-allowed border-white/10 bg-slate-950 text-slate-600 opacity-60';
		}

		if (copyStatus === 'success') {
			return 'border-emerald-400 bg-emerald-400/10 text-emerald-300';
		}

		if (copyStatus === 'error') {
			return 'border-red-400 bg-red-400/10 text-red-300';
		}

		return 'border-white/10 bg-slate-950 text-slate-300 hover:border-cyan-400 hover:text-cyan-300';
	}

	return (
		<article className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl">
			<div className="mb-3 flex items-center justify-between">
				<h2 className="text-lg font-semibold">Resultado</h2>

				<button
					type="button"
					onClick={onCopyResult}
					disabled={!canCopyResult}
					className={`rounded-2xl border px-3 py-2 text-xs font-medium transition ${getCopyButtonClassName()}`}
				>
					{getCopyButtonLabel()}
				</button>
			</div>

			<textarea
				readOnly
				value={resultValue}
				className={`min-h-[220px] w-full resize-none rounded-2xl border px-4 py-4 text-sm outline-none sm:min-h-[150px] ${hasInputError
						? 'border-white/10 bg-slate-950 text-slate-500'
						: 'border-white/10 bg-slate-950 text-cyan-300'
					}`}
				placeholder="Aquí aparecerá el resultado transpuesto..."
			/>
		</article>
	);
}

export default ResultPanel;