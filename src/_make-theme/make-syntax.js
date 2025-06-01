const { nameOptions } = require("../../data/theme-names");

const { makeTextmate, makeSemantic } = require("../syntax/_syntax-base");

const {
	syntaxColors,
	commentColors,
	schemes,
} = require("../syntax/_color-palette");

const { commentTokens } = require("../syntax/syntax-extra");

class Syntax {
	constructor(fontStyle, comments, syntaxBrightness) {
		Object.values(nameOptions).map((name) => {
			this[name] = {
				semanticHighlighting: true,
				semanticTokenColors: makeSemantic(
					fontStyle,
					schemes(nameOptions, syntaxColors[syntaxBrightness]),
					name
				),
				tokenColors: [
					...commentTokens(comments, commentColors[syntaxBrightness]),
					...makeTextmate(
						fontStyle,
						syntaxColors[syntaxBrightness],
						nameOptions,
						schemes(nameOptions, syntaxColors[syntaxBrightness]),
						name
					),
				],
			};
		});
	}
}

module.exports = {
	Syntax,
};

// console.log(new Syntax("Italic", "Dark Violet", "Normal"));
// console.log(new Syntax("Italic", "Dark Grey", "Normal"));))
// console.log(new Syntax("Italic", "Dark Magenta", "Dimmed"));))
// console.log(new Syntax("Italic", "Dark Forest", "Dimmed"));))
