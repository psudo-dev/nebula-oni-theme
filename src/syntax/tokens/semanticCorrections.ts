import { SyntaxPalette } from "../../types/colors";
import { FontStyle, SyntaxNames } from "../../types/settings";
import { SemanticToken } from "../../types/tokens";

export const buildSemanticCorrections = (
	syntaxName: SyntaxNames,
	syntaxPalette: SyntaxPalette,
	fontStyle: FontStyle,
): SemanticToken => {
	const semanticCorrections = {
		Hourglass: {},
		Pegasus: { "variable.defaultLibrary": syntaxPalette.cyan },
		Spirograph: { "variable.defaultLibrary": syntaxPalette.pink },
		Cerberus: {},
	} satisfies Record<SyntaxNames, SemanticToken>;
	const semanticItalicCorrections = {
		Hourglass: {},
		Pegasus: {
			"variable.defaultLibrary": {
				foreground: syntaxPalette.cyan,
				fontStyle: "italic",
			},
		},
		Spirograph: {
			"variable.defaultLibrary": {
				foreground: syntaxPalette.pink,
				fontStyle: "italic",
			},
		},
		Cerberus: {},
	} satisfies Record<SyntaxNames, SemanticToken>;
	if (fontStyle === "Regular") {
		return semanticCorrections[syntaxName];
	} else {
		return semanticItalicCorrections[syntaxName];
	}
};
