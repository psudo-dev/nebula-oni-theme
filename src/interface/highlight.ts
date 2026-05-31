import { BasePalette, Opacity } from "../types/colors";
import { Highlight } from "../types/settings";
import { ThemeInterfaceProperty } from "../types/theme";

export const buildHighlight = (
	basePalette: BasePalette,
	opacity: Opacity,
	highlight: Highlight,
): ThemeInterfaceProperty => {
	if (highlight === "Clear") {
		return {
			"minimap.selectionHighlight": `${basePalette.white}${opacity[25]}`,
			"editor.findMatchHighlightBackground": `${basePalette.white}${opacity[25]}`,
			"selection.background": `${basePalette.white}${opacity[20]}`,
			"editor.findMatchBackground": `${basePalette.white}${opacity[16]}`,
			"editor.selectionBackground": `${basePalette.white}${opacity[10]}`,
			"editor.selectionHighlightBackground": `${basePalette.white}${opacity[10]}`,
		};
	} else {
		return {
			"minimap.selectionHighlight": `${basePalette.purple}${opacity[80]}`,
			"editor.findMatchHighlightBackground": `${basePalette.purple}${opacity[80]}`,
			"editor.findMatchBackground": `${basePalette.purple}${opacity[80]}`,
			"editor.selectionBackground": `${basePalette.purple}${opacity[80]}`,
			"editor.selectionHighlightBackground": `${basePalette.pink}${opacity[36]}`,
		};
	}
};
