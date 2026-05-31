import { SyntaxPalette } from "../../types/colors";
import { FontStyle, syntaxNames } from "../../types/settings";
import { SemanticToken } from "../../types/tokens";

export const buildSemanticCorrections = (
	syntaxName: syntaxNames,
	syntaxPalette: SyntaxPalette,
	fontStyle: FontStyle,
): SemanticToken => {
	const semanticCorrections = {
		Hourglass: {},
		Pegasus: { "variable.defaultLibrary": syntaxPalette.cyan },
		Spirograph: { "variable.defaultLibrary": syntaxPalette.pink },
		Cerberus: {},
	} satisfies Record<syntaxNames, SemanticToken>;
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
	} satisfies Record<syntaxNames, SemanticToken>;
	if (fontStyle === "Regular") {
		return semanticCorrections[syntaxName];
	} else {
		return semanticItalicCorrections[syntaxName];
	}
};
