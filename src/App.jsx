import { useEffect, useRef, useState } from 'react';

import AppShell from './components/layout/AppShell.jsx';
import TranspositionBar from './components/transposer/TranspositionBar.jsx';
import InputPanel from './components/transposer/InputPanel.jsx';
import ResultPanel from './components/transposer/ResultPanel.jsx';
import Footer from './components/layout/Footer.jsx';

import { parseInputNotes } from './utils/inputParser.js';
import { transposeLatinNotes } from './utils/transpositionEngine.js';

/**
 * Compone la vista principal del transpositor.
 * @returns {JSX.Element}
 */
function App() {
	const [activeAccidental, setActiveAccidental] = useState(null);
	const [inputValue, setInputValue] = useState('');
	const [selectedTransposition, setSelectedTransposition] = useState('doASib');
	const [selectedTonality, setSelectedTonality] = useState('doMayorLaMenor');
	const [copyStatus, setCopyStatus] = useState('idle');

	const copyResetTimeoutRef = useRef(null);

	const parsedInput = parseInputNotes(inputValue);

	const transposedNotes = parsedInput.hasError
		? []
		: transposeLatinNotes({
			latinNotes: parsedInput.notes,
			selectedTransposition
		});

	const resultValue = transposedNotes.join(', ');
	const canCopyResult = resultValue.trim().length > 0 && !parsedInput.hasError;

	/**
	 * Programa el reinicio visual del estado de copiado.
	 * @returns {void}
	 */
	function scheduleCopyStatusReset() {
		if (copyResetTimeoutRef.current) {
			window.clearTimeout(copyResetTimeoutRef.current);
		}

		copyResetTimeoutRef.current = window.setTimeout(() => {
			setCopyStatus('idle');
			copyResetTimeoutRef.current = null;
		}, 1800);
	}

	/**
	 * Copia el resultado transpuesto al portapapeles y actualiza el estado visual.
	 * @returns {Promise<void>}
	 */
	async function handleCopyResult() {
		const trimmedResultValue = resultValue.trim();

		if (!trimmedResultValue || !canCopyResult) {
			return;
		}

		try {
			await navigator.clipboard.writeText(trimmedResultValue);
			setCopyStatus('success');
		} catch (error) {
			console.error('No pude copiar el resultado:', error);
			setCopyStatus('error');
		}

		scheduleCopyStatusReset();
	}

	useEffect(() => {
		if (canCopyResult) {
			return;
		}

		if (copyResetTimeoutRef.current) {
			window.clearTimeout(copyResetTimeoutRef.current);
			copyResetTimeoutRef.current = null;
		}

		setCopyStatus('idle');
	}, [canCopyResult]);

	useEffect(() => {
		return () => {
			if (copyResetTimeoutRef.current) {
				window.clearTimeout(copyResetTimeoutRef.current);
			}
		};
	}, []);

	return (
		<AppShell>
			<TranspositionBar
				selectedTransposition={selectedTransposition}
				setSelectedTransposition={setSelectedTransposition}
				selectedTonality={selectedTonality}
				setSelectedTonality={setSelectedTonality}
			/>

			<section className="grid flex-1 grid-cols-1 gap-2 xl:grid-cols-2">
				<InputPanel
					activeAccidental={activeAccidental}
					setActiveAccidental={setActiveAccidental}
					inputValue={inputValue}
					setInputValue={setInputValue}
					selectedTonality={selectedTonality}
					parsedInput={parsedInput}
				/>

				<ResultPanel
					resultValue={resultValue}
					hasInputError={parsedInput.hasError}
					onCopyResult={handleCopyResult}
					copyStatus={copyStatus}
					canCopyResult={canCopyResult}
				/>
			</section>
			<Footer />
		</AppShell>
	);
}

export default App;