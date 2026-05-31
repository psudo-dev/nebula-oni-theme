import { MainPalette, Opacity } from "../types/colors";
import { ThemeInterfaceProperty } from "../types/theme";

export const buildMain = (
	mainPalette: MainPalette,
	opacity: Opacity,
): ThemeInterfaceProperty => {
	return {
		"activityBarBadge.background": mainPalette.strong,
		"badge.background": mainPalette.strong,
		"editor.findMatchBorder": mainPalette.strong,
		"extensionButton.prominentBackground": mainPalette.strong,
		"extensionButton.prominentHoverBackground": mainPalette.strong,
		"notificationCenterHeader.background": mainPalette.strong,
		"progressBar.background": mainPalette.strong,

		"activityBar.activeBorder": mainPalette.main,
		"activityBar.activeFocusBorder": mainPalette.main,
		"activityBar.dropBorder": mainPalette.main,
		"activityBar.foreground": mainPalette.main,
		"editorLink.activeForeground": mainPalette.main,
		"editorWidget.border": mainPalette.main,
		"menu.selectionForeground": mainPalette.main,
		"menubar.selectionForeground": mainPalette.main,
		// "notebook.focusedRowBorder": mainPalette.main,
		"notificationLink.foreground": mainPalette.main,
		"panelTitle.activeBorder": mainPalette.main,
		"panelTitle.activeForeground": mainPalette.main,
		"peekView.border": mainPalette.main,
		"pickerGroup.border": mainPalette.main,
		"pickerGroup.foreground": mainPalette.main,
		"sash.hoverBorder": mainPalette.main,
		"settings.headerForeground": mainPalette.main,
		"settings.modifiedItemIndicator": mainPalette.main,
		"tab.activeBorder": mainPalette.main,
		"tab.activeForeground": mainPalette.main,
		"tab.hoverForeground": mainPalette.main,
		"tab.unfocusedActiveBorder": mainPalette.main,
		"tab.unfocusedHoverForeground": mainPalette.main,
		"textLink.activeForeground": mainPalette.main,
		"textLink.foreground": mainPalette.main,

		"list.highlightForeground": mainPalette.main,
		"list.hoverForeground": mainPalette.main,
		"list.focusForeground": mainPalette.main,
		"list.activeSelectionForeground": mainPalette.listSelection,
		"list.inactiveSelectionForeground": mainPalette.listSelection,

		"editorCursor.foreground": mainPalette.editorCursor,
		"editorSuggestWidget.highlightForeground": mainPalette.editorCursor,

		"textPreformat.foreground": mainPalette.formattedText,
		"selection.background": `${mainPalette.selection}${opacity[64]}`,
		"statusBar.debuggingBackground": mainPalette.main,
		"statusBarItem.remoteBackground": mainPalette.remote,
	};
};
