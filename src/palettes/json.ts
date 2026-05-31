import { JsonPalette, SyntaxPalette } from "../types/colors";
import { SyntaxSchemes } from "../types/settings";

export const getJsonPalette = (
	syntaxScheme: SyntaxSchemes,
	syntaxPalette: SyntaxPalette,
): JsonPalette => {
	if (syntaxScheme === "Hourglass" || syntaxScheme === "Spirograph") {
		return {
			keyZero: syntaxPalette.magenta,
			valueZero: syntaxPalette.blue,
			keyOne: syntaxPalette.purple,
			valueOne: syntaxPalette.green,
		};
	} else {
		return {
			keyZero: syntaxPalette.purple,
			valueZero: syntaxPalette.green,
			keyOne: syntaxPalette.magenta,
			valueOne: syntaxPalette.blue,
		};
	}
};
