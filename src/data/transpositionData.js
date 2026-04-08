/**
 * guardo las equivalencias enarmónicas para normalizar notas de entrada.
 */
export const ENARMONIAS = {
	dob: "si",
	reb: "do#",
	mib: "re#",
	fab: "mi",
	solb: "fa#",
	lab: "sol#",
	sib: "la#",
	"mi#": "fa",
	"si#": "do",
};

/**
 * defino las opciones disponibles para el selector de transposición.
 */
export const TRANSPOSE_OPTIONS = [
	{ value: "sibADo", label: "Sib a Do" },
	{ value: "doASib", label: "Do a Sib" },
	{ value: "sibAMib", label: "Sib a Mib" },
	{ value: "mibASib", label: "Mib a Sib" },
];

/**
 * centralizo los mapas de transposición disponibles.
 */
export const MAPEO_NOTAS = {
	doASib: {
		do: "re",
		"do#": "re#",
		reb: "re#",
		re: "mi",
		"re#": "fa",
		mib: "fa",
		mi: "fa#",
		fa: "sol",
		"fa#": "sol#",
		solb: "sol#",
		sol: "la",
		"sol#": "la#",
		lab: "la#",
		la: "si",
		"la#": "do",
		sib: "do",
		si: "do#",
		dob: "do#",
	},
	sibADo: {
		do: "la#",
		dob: "la",
		"do#": "si",
		re: "do",
		"re#": "do#",
		mib: "re",
		mi: "re",
		fa: "re#",
		"fa#": "mi",
		solb: "mi",
		sol: "fa",
		"sol#": "fa#",
		lab: "fa#",
		la: "sol",
		"la#": "sol#",
		sib: "sol#",
		si: "la",
	},
	sibAMib: {
		do: "sol",
		"do#": "sol#",
		reb: "sol#",
		re: "la",
		"re#": "la#",
		mib: "la#",
		mi: "si",
		fa: "do",
		"fa#": "do#",
		solb: "do#",
		sol: "re",
		"sol#": "re#",
		lab: "re#",
		la: "mi",
		"la#": "fa",
		sib: "fa",
		si: "fa#",
		dob: "fa#",
	},
	mibASib: {
		do: "fa",
		"do#": "fa#",
		reb: "fa#",
		re: "sol",
		"re#": "sol#",
		mib: "sol#",
		mi: "la",
		fa: "la#",
		"fa#": "si",
		solb: "si",
		sol: "do",
		"sol#": "do#",
		lab: "do#",
		la: "re",
		"la#": "re#",
		sib: "re#",
		si: "mi",
		dob: "mi",
	},
};
