import { SchemePalette, SyntaxPalette } from "../../types/colors";
import { SyntaxNames } from "../../types/settings";

export const getSchemePalette = (
	syntaxPalette: SyntaxPalette,
	syntaxName: SyntaxNames,
): SchemePalette => {
	const schemePalettes = {
		Hourglass: {
			string: syntaxPalette.blue,
			property: syntaxPalette.magenta,
			storageType: syntaxPalette.purple,
			function: syntaxPalette.yellow,
			class: syntaxPalette.green,
			number: syntaxPalette.pink,
			variable: syntaxPalette.white,
			punctuation: syntaxPalette.cyan,
			grey: syntaxPalette.grey,
			invalid: syntaxPalette.red,
			deprecated: syntaxPalette.brown,
		},
		Pegasus: {
			string: syntaxPalette.green,
			property: syntaxPalette.purple,
			storageType: syntaxPalette.magenta,
			function: syntaxPalette.pink,
			class: syntaxPalette.blue,
			number: syntaxPalette.yellow,
			variable: syntaxPalette.white,
			punctuation: syntaxPalette.cyan,
			grey: syntaxPalette.grey,
			invalid: syntaxPalette.red,
			deprecated: syntaxPalette.brown,
		},
		Spirograph: {
			string: syntaxPalette.blue,
			property: syntaxPalette.magenta,
			storageType: syntaxPalette.green,
			function: syntaxPalette.purple,
			class: syntaxPalette.yellow,
			number: syntaxPalette.pink,
			variable: syntaxPalette.white,
			punctuation: syntaxPalette.cyan,
			grey: syntaxPalette.grey,
			invalid: syntaxPalette.red,
			deprecated: syntaxPalette.brown,
		},
		Cerberus: {
			string: syntaxPalette.green,
			property: syntaxPalette.purple,
			storageType: syntaxPalette.pink,
			function: syntaxPalette.blue,
			class: syntaxPalette.magenta,
			number: syntaxPalette.yellow,
			variable: syntaxPalette.white,
			punctuation: syntaxPalette.cyan,
			grey: syntaxPalette.grey,
			invalid: syntaxPalette.red,
			deprecated: syntaxPalette.brown,
		},
	} satisfies Record<SyntaxNames, SchemePalette>;
	return schemePalettes[syntaxName];
};
