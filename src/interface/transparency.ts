import { BasePalette, Opacity } from "../types/colors";
import { ThemeInterfaceProperty } from "../types/theme";

export const buildTransparency = (
	basePalette: BasePalette,
	opacity: Opacity,
): ThemeInterfaceProperty => {
	return {
		"activityBar.border": basePalette.zero,
		"editor.findMatchHighlightBorder": basePalette.zero,
		"editorBracketMatch.background": basePalette.zero,
		"editorBracketMatch.border": basePalette.zero,
		"editorError.border": basePalette.zero,
		"editorHint.border": basePalette.zero,
		"editorHoverWidget.border": basePalette.zero,
		"editorInfo.border": basePalette.zero,
		"editorOverviewRuler.border": basePalette.zero,
		"editorSuggestWidget.border": basePalette.zero,
		"editorWarning.border": basePalette.zero,
		"menu.selectionBorder": basePalette.zero,
		"menubar.selectionBorder": basePalette.zero,
		"tab.border": basePalette.zero,
		"terminal.border": basePalette.zero,
		"editor.wordHighlightBackground": `${basePalette.purple}${opacity[36]}`,
		"editor.wordHighlightStrongBackground": `${basePalette.purple}${opacity[36]}`,
		"editor.lineHighlightBackground": `${basePalette.white}${opacity[8]}`,
		"diffEditor.insertedTextBackground": `${basePalette.emerald}${opacity[20]}`,
		"diffEditor.removedTextBackground": `${basePalette.red}${opacity[20]}`,
	};
};
