const option_2_corrections = (nameOptions, colorSchemes) => {
	const colors = colorSchemes[nameOptions.option_2];
	return {
		semantic: {
			"variable.defaultLibrary": colors.punctuation,
		},
		textmate: [
			{
				name: "[CORRECTIONS] GREEN",
				scope: [
					"keyword.operator.new",
					"keyword.control.new",
					"keyword.operator.accessor",
					"punctuation.accessor",
				],
				settings: {
					foreground: colors.string,
				},
			},
			{
				name: "[CORRECTIONS] YELLOW",
				scope: ["storage.type.accessor", "variable.language.super"],
				settings: {
					foreground: colors.number,
				},
			},
		],
	};
};

const option_3_corrections = (nameOptions, colorSchemes) => {
	const colors = colorSchemes[nameOptions.option_3];
	return {
		semantic: {
			"variable.defaultLibrary": colors.number,
		},
		textmate: [
			{
				name: "[CORRECTIONS] CYAN",
				scope: ["keyword.operator.new", "keyword.control.new"],
				settings: {
					foreground: colors.punctuation,
				},
			},
		],
	};
};

const option_4_corrections = (nameOptions, colorSchemes) => {
	const colors = colorSchemes[nameOptions.option_4];
	return {
		semantic: {},
		textmate: [
			{
				name: "[CORRECTIONS] GREEN",
				scope: ["keyword.operator.accessor", "punctuation.accessor"],
				settings: {
					foreground: colors.string,
				},
			},
			{
				name: "[CORRECTIONS] YELLOW",
				scope: [
					"keyword.control.new",
					"keyword.operator.new",
					"storage.type.accessor",
					"variable.language.super",
				],
				settings: {
					foreground: colors.number,
				},
			},
		],
	};
};

// < corrections for all color schemes
const colorCorrections = (NameOptions, colorSchemes) => {
	const schemes = {};
	schemes[NameOptions.option_1] = {
		// ~ default
		semantic: {},
		textmate: [],
	};
	schemes[NameOptions.option_2] = option_2_corrections(
		NameOptions,
		colorSchemes
	);
	schemes[NameOptions.option_3] = option_3_corrections(
		NameOptions,
		colorSchemes
	);
	schemes[NameOptions.option_4] = option_4_corrections(
		NameOptions,
		colorSchemes
	);
	return schemes;
};

module.exports = {
	colorCorrections,
};
