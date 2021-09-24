"use strict"

const {
	nameOptions
} = require("../../data/theme-names")

const {
	makeTextmate,
	makeSemantic
} = require("../syntax/_syntax-base")

const {
	syntaxColors,
	colorSchemes,
	commentColors,
} = require("../syntax/_color-palette")

const {
	commentTokens
} = require("../syntax/syntax-extra")

class Syntax {
	constructor(fontStyle, comments) {
		Object.values(nameOptions).map((name) => {
			this[name] = {
				semanticHighlighting: true,
				semanticTokenColors: makeSemantic(
					fontStyle,
					colorSchemes,
					name
				),
				tokenColors: [
					...commentTokens(comments,
						commentColors),
					...makeTextmate(
						fontStyle,
						syntaxColors,
						nameOptions,
						colorSchemes,
						name
					),
				],
			}
		})
	}
}

module.exports = {
	Syntax,
}

// console.log(new Syntax("Italic", "Dark Violet"))
// console.log(new Syntax("Italic", "Dark Magenta"))
// console.log(new Syntax("Italic", "Dark Forest"))
// console.log(new Syntax("Italic", "Dark Grey"))
