/**
 * defino la información de armadura por tonalidad.
 */
export const TONALITY_MAP = {
	doMayorLaMenor: {
		accidentalType: "natural",
		alteredNotes: [],
	},
	solMayorMiMenor: {
		accidentalType: "sharp",
		alteredNotes: ["F"],
	},
	reMayorSiMenor: {
		accidentalType: "sharp",
		alteredNotes: ["F", "C"],
	},
	laMayorFaSostenidoMenor: {
		accidentalType: "sharp",
		alteredNotes: ["F", "C", "G"],
	},
	miMayorDoSostenidoMenor: {
		accidentalType: "sharp",
		alteredNotes: ["F", "C", "G", "D"],
	},
	siMayorSolSostenidoMenor: {
		accidentalType: "sharp",
		alteredNotes: ["F", "C", "G", "D", "A"],
	},
	faSostenidoMayorReSostenidoMenor: {
		accidentalType: "sharp",
		alteredNotes: ["F", "C", "G", "D", "A", "E"],
	},
	doSostenidoMayorLaSostenidoMenor: {
		accidentalType: "sharp",
		alteredNotes: ["F", "C", "G", "D", "A", "E", "B"],
	},
	faMayorReMenor: {
		accidentalType: "flat",
		alteredNotes: ["B"],
	},
	sibMayorSolMenor: {
		accidentalType: "flat",
		alteredNotes: ["B", "E"],
	},
	mibMayorDoMenor: {
		accidentalType: "flat",
		alteredNotes: ["B", "E", "A"],
	},
	labMayorFaMenor: {
		accidentalType: "flat",
		alteredNotes: ["B", "E", "A", "D"],
	},
	rebMayorSibMenor: {
		accidentalType: "flat",
		alteredNotes: ["B", "E", "A", "D", "G"],
	},
	solbMayorMibMenor: {
		accidentalType: "flat",
		alteredNotes: ["B", "E", "A", "D", "G", "C"],
	},
	dobMayorLabMenor: {
		accidentalType: "flat",
		alteredNotes: ["B", "E", "A", "D", "G", "C", "F"],
	},
};
