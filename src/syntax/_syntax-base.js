"use strict"

const {
	corrections
} = require("./syntax-corrections")

const {
	markup,
	regexp,
	json
} = require("./syntax-extra")

const {
	semanticTokens,
	semanticItalic
} = require("./syntax-semantic")

const {
	textmateTokens,
	textmateItalic
} = require("./syntax-textmate")

// < create textmate token colors (array)
const makeTextmate = (
	fontStyle,
	colors,
	nameOptions,
	colorSchemes,
	schemeName
) => {
	let italicTokens = textmateItalic
	if (fontStyle !== "Italic") {
		italicTokens = []
	}
	const textmate = [
		...textmateTokens(colorSchemes, schemeName),
		...markup(colors),
		...regexp(colors),
		...json(colors, nameOptions, schemeName),
		...corrections[schemeName].textmate,
		...italicTokens,
	]
	return textmate
}

// < create semantic token colors (object)
const makeSemantic = (fontStyle, colorSchemes, schemeName) => {
	let italicTokens = semanticItalic(colorSchemes, schemeName)
	if (fontStyle !== "Italic") {
		italicTokens = {}
	}
	const semantic = {
		...semanticTokens(colorSchemes, schemeName),
		...italicTokens,
		...corrections[schemeName].semantic,
	}
	return semantic
}

module.exports = {
	makeTextmate,
	makeSemantic,
}
