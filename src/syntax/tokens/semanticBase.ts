import { getSchemePalette } from "../../palettes/syntax/syntaxNames";
import { SyntaxPalette } from "../../types/colors";
import { FontStyle, SyntaxNames } from "../../types/settings";
import { SemanticToken } from "../../types/tokens";

export const buildSemanticBase = (
	syntaxName: SyntaxNames,
	syntaxPalette: SyntaxPalette,
	fontStyle: FontStyle,
): SemanticToken => {
	const schemePalette = getSchemePalette(syntaxPalette, syntaxName);
	const regularTokens = {
		"typeParameter": schemePalette.storageType,
		"class.defaultLibrary": schemePalette.class,
		"class": schemePalette.class,
		"class.readonly": schemePalette.class,
		"class.declaration": schemePalette.class,
		"type": schemePalette.class,
		"interface": schemePalette.class,
		"enum": schemePalette.class,
		"struct": schemePalette.class,
		"variable.defaultLibrary": schemePalette.class,
		"type.defaultLibrary": schemePalette.class,
		"namespace": schemePalette.number,
		"enumMember": schemePalette.number,
		"variable.readonly.defaultLibrary": schemePalette.number,
		"function": schemePalette.function,
		"function.defaultLibrary": schemePalette.function,
		"method": schemePalette.function,
		"macro": schemePalette.function,
		"event": schemePalette.function,
		"property": schemePalette.property,
		"property.readonly": schemePalette.property,
		"property.defaultLibrary": schemePalette.property,
		"property.declaration": schemePalette.property,
		"module": schemePalette.variable,
		"parameter": schemePalette.variable,
		"variable.readonly": schemePalette.variable,
		"variable.declaration": schemePalette.variable,
		"variable.local": schemePalette.variable,
	};
	const italicTokens = {
		...regularTokens,
		"typeParameter": {
			foreground: schemePalette.storageType,
			fontStyle: "italic",
		},
		"namespace": {
			foreground: schemePalette.number,
			fontStyle: "italic",
		},
		"macro": {
			foreground: schemePalette.function,
			fontStyle: "italic",
		},
		"event": {
			foreground: schemePalette.function,
			fontStyle: "italic",
		},
		"parameter": {
			foreground: schemePalette.variable,
			fontStyle: "italic",
		},
		"class.defaultLibrary": {
			foreground: schemePalette.class,
			fontStyle: "italic",
		},
		"class": {
			foreground: schemePalette.class,
			fontStyle: "italic",
		},
		"class.readonly": {
			foreground: schemePalette.class,
			fontStyle: "italic",
		},
		"class.declaration": {
			foreground: schemePalette.class,
			fontStyle: "italic",
		},
		"interface": {
			foreground: schemePalette.class,
			fontStyle: "italic",
		},
		"struct": {
			foreground: schemePalette.class,
			fontStyle: "italic",
		},
		"variable.defaultLibrary": {
			foreground: schemePalette.class,
			fontStyle: "italic",
		},
		"type.defaultLibrary": {
			foreground: schemePalette.class,
			fontStyle: "italic",
		},
	};
	if (fontStyle === "Regular") {
		return regularTokens;
	} else {
		return italicTokens;
	}
};
