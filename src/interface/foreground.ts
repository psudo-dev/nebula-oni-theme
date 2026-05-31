import { ForegroundPalette, Opacity } from "../types/colors";
import { ThemeInterfaceProperty } from "../types/theme";

export const buildForeground = (
	foregroundPalette: ForegroundPalette,
	opacity: Opacity,
): ThemeInterfaceProperty => {
	return {
		"foreground": foregroundPalette.foreground,
		"charts.foreground": foregroundPalette.foreground,
		"editor.foreground": foregroundPalette.foreground,
		"editorLineNumber.activeForeground": foregroundPalette.foreground,
		"notifications.foreground": foregroundPalette.foreground,
		"sideBarSectionHeader.foreground": foregroundPalette.foreground,
		"statusBar.foreground": foregroundPalette.foreground,
		"titleBar.activeForeground": foregroundPalette.foreground,

		"charts.lines": `${foregroundPalette.foreground}${opacity[50]}`,

		"tab.unfocusedActiveForeground": foregroundPalette.tabActive,
		"button.foreground": foregroundPalette.tabActive,
		"button.secondaryForeground": foregroundPalette.tabActive,
		"dropdown.foreground": foregroundPalette.tabActive,
		"menu.foreground": foregroundPalette.tabActive,
		"panelTitle.inactiveForeground": foregroundPalette.tabActive,

		// "editorIndentGuide.background": `${foregroundPalette.foreground}${opacity[16]}`,
		"editorIndentGuide.background1": `${foregroundPalette.foreground}${opacity[16]}`,
		"editorRuler.foreground": `${foregroundPalette.foreground}${opacity[16]}`,
		"editorWhitespace.foreground": `${foregroundPalette.foreground}${opacity[16]}`,

		"minimapSlider.activeBackground": `${foregroundPalette.white}${opacity[32]}`,
		"minimapSlider.background": `${foregroundPalette.white}${opacity[32]}`,
		"minimapSlider.hoverBackground": `${foregroundPalette.white}${opacity[32]}`,
		"scrollbarSlider.activeBackground": `${foregroundPalette.white}${opacity[32]}`,
		"scrollbarSlider.hoverBackground": `${foregroundPalette.white}${opacity[32]}`,

		"scrollbarSlider.background": `${foregroundPalette.white}${opacity[20]}`,
	};
};
