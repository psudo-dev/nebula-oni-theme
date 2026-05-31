import { syntaxNames } from "../types/settings";
import { BasePalette } from "../types/colors";
import { ThemeInterfaceProperty } from "../types/theme";

export const buildBrackets = (
	syntaxName: syntaxNames,
	basePalette: BasePalette,
): ThemeInterfaceProperty => {
	if (syntaxName === "Hourglass" || syntaxName === "Spirograph") {
		return {
			"editorBracketHighlight.foreground1": basePalette.magenta,
			"editorBracketHighlight.foreground2": basePalette.cyan,
			"editorBracketHighlight.foreground3": basePalette.brightYellow,
			"editorBracketHighlight.foreground4": basePalette.amethyst,
			"editorBracketHighlight.foreground5": basePalette.brightLime,
			"editorBracketHighlight.foreground6": basePalette.frenchBlue,
			"editorBracketHighlight.unexpectedBracket.foreground":
				basePalette.raspberry,
		};
	} else {
		return {
			"editorBracketHighlight.foreground1": basePalette.brightLime,
			"editorBracketHighlight.foreground2": basePalette.brightYellow,
			"editorBracketHighlight.foreground3": basePalette.cyan,
			"editorBracketHighlight.foreground4": basePalette.amethyst,
			"editorBracketHighlight.foreground5": basePalette.magenta,
			"editorBracketHighlight.foreground6": basePalette.frenchBlue,
			"editorBracketHighlight.unexpectedBracket.foreground":
				basePalette.raspberry,
		};
	}
};
