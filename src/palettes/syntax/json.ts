import { JsonPalette, SyntaxPalette } from "../../types/colors";
import { syntaxNames } from "../../types/settings";

export const getJsonPalette = (
	syntaxName: syntaxNames,
	syntaxPalette: SyntaxPalette,
): JsonPalette => {
	if (syntaxName === "Hourglass" || syntaxName === "Spirograph") {
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
