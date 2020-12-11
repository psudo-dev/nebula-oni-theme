"use strict"

const { nameOptions } = require("../../data/theme-names")

const { syntaxColors } = require("./_color-palette")

const option_2_corrections = (colors) => {
	return {
		semantic: {
			"variable.defaultLibrary": colors.cyan,
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
					foreground: colors.green,
				},
			},
			{
				name: "[CORRECTIONS] YELLOW",
				scope: ["storage.type.accessor", "variable.language.super"],
				settings: {
					foreground: colors.yellow,
				},
			},
		],
	}
}

const option_3_corrections = (colors) => {
	return {
		semantic: {
			"variable.defaultLibrary": colors.pink,
		},
		textmate: [
			{
				name: "[CORRECTIONS] GREEN",
				scope: ["keyword.operator.new", "keyword.control.new"],
				settings: {
					foreground: colors.cyan,
				},
			},
		],
	}
}

const option_4_corrections = (colors) => {
	return {
		semantic: {},
		textmate: [
			{
				name: "[CORRECTIONS] GREEN",
				scope: ["keyword.operator.accessor", "punctuation.accessor"],
				settings: {
					foreground: colors.green,
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
					foreground: colors.yellow,
				},
			},
		],
	}
}

// < corrections for all color schemes
const colorCorrections = (options, colors) => {
	const schemes = {}
	schemes[options.option_1] = {
		// ~ default
		semantic: {},
		textmate: [],
	}
	schemes[options.option_2] = option_2_corrections(colors)
	schemes[options.option_3] = option_3_corrections(colors)
	schemes[options.option_4] = option_4_corrections(colors)
	return schemes
}

const corrections = colorCorrections(nameOptions, syntaxColors)

module.exports = {
	corrections,
}
