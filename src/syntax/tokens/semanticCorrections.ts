import { SyntaxPalette } from "../../types/colors";
import { FontStyle, SyntaxSchemes } from "../../types/settings";
import { SemanticToken } from "../../types/tokens";

export const buildSemanticCorrections = (
	syntaxScheme: SyntaxSchemes,
	syntaxPalette: SyntaxPalette,
	fontStyle: FontStyle,
): SemanticToken => {
	const semanticCorrections = {
		Hourglass: {},
		Pegasus: { "variable.defaultLibrary": syntaxPalette.cyan },
		Spirograph: { "variable.defaultLibrary": syntaxPalette.pink },
		Cerberus: {},
	} satisfies Record<SyntaxSchemes, SemanticToken>;
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
	} satisfies Record<SyntaxSchemes, SemanticToken>;
	if (fontStyle === "Regular") {
		return semanticCorrections[syntaxScheme];
	} else {
		return semanticItalicCorrections[syntaxScheme];
	}
};
