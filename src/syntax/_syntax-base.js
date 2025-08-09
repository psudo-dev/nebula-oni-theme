const { nameOptions } = require("../../data/theme-names");

const { colorCorrections } = require("./syntax-corrections");

const { markup, regexp, json } = require("./syntax-extra");

const { semanticTokens, semanticItalic } = require("./syntax-semantic");

const { textmateTokens, textmateItalic } = require("./syntax-textmate");

// < create textmate token colors (array)
const makeTextmate = (
	fontStyle,
	colors,
	nameOptions,
	colorSchemes,
	schemeName
) => {
	let italicTokens = textmateItalic;
	if (fontStyle !== "Italic") {
		italicTokens = [];
	}
	const textmate = [
		...textmateTokens(colorSchemes, schemeName),
		...markup(colors),
		...regexp(colors),
		...json(colors, nameOptions, schemeName),
		...colorCorrections(nameOptions, colorSchemes)[schemeName].textmate,
		...italicTokens,
	];
	return textmate;
};
// < create semantic token colors (object)
const makeSemantic = (fontStyle, colorSchemes, schemeName) => {
	let italicTokens = {};
	if (fontStyle === "Italic") {
		italicTokens = semanticItalic(colorSchemes, schemeName);
	}
	const semantic = {
		...semanticTokens(colorSchemes, schemeName),
		...colorCorrections(nameOptions, colorSchemes)[schemeName].semantic,
		...italicTokens,
	};
	return semantic;
};

module.exports = {
	makeTextmate,
	makeSemantic,
};
