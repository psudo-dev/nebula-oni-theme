"use strict"

const {
	nameOptions
} = require("../../data/theme-names")

const syntaxColors = {
	pink: "#FF9EE7",
	magenta: "#D74BBE",
	purple: "#AB80FF",
	blue: "#50B6FF",
	cyan: "#4FE0E0",
	green: "#2FDE73",
	yellow: "#E6E667",
	white: "#D3D1EB",
	red: "#E6457B",
	brown: "#99611F",
}

const commentColors = {
	"Dark Grey": "#737880",
	"Light Grey": "#8A9099",
	"Dark Magenta": "#9559B3",
	"Light Magenta": "#AA66CC",
	"Dark Forest": "#498C49",
	"Light Forest": "#55A355",
	"Dark Violet": "#6777CD",
	"Light Violet": "#768AED",
}

const schemes = (options, colors) => {
	const schemes = {}
	schemes[options.option_1] = {
		string: colors.blue,
		property: colors.magenta,
		storageType: colors.purple,
		function: colors.yellow,
		class: colors.green,
		number: colors.pink,
		variable: colors.white,
		punctuation: colors.cyan,
		invalid: colors.red,
		deprecated: colors.brown,
	}
	schemes[options.option_2] = {
		string: colors.green,
		property: colors.purple,
		storageType: colors.magenta,
		function: colors.pink,
		class: colors.blue,
		number: colors.yellow,
		variable: colors.white,
		punctuation: colors.cyan,
		invalid: colors.red,
		deprecated: colors.brown,
	}
	schemes[options.option_3] = {
		string: colors.blue,
		property: colors.magenta,
		storageType: colors.green,
		function: colors.purple,
		class: colors.yellow,
		number: colors.pink,
		variable: colors.white,
		punctuation: colors.cyan,
		invalid: colors.red,
		deprecated: colors.brown,
	}
	schemes[options.option_4] = {
		string: colors.green,
		property: colors.purple,
		storageType: colors.pink,
		function: colors.blue,
		class: colors.magenta,
		number: colors.yellow,
		variable: colors.white,
		punctuation: colors.cyan,
		invalid: colors.red,
		deprecated: colors.brown,
	}
	return schemes
}

const colorSchemes = schemes(nameOptions, syntaxColors)

module.exports = {
	syntaxColors,
	colorSchemes,
	commentColors,
}