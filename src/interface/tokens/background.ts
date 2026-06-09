import { BackgroundPalette, Opacity } from "../../types/colors";
import { ThemeInterfaceProperty } from "../../types/theme";

export const buildBackground = (
	backgroundPalette: BackgroundPalette,
	opacity: Opacity,
): ThemeInterfaceProperty => {
	return {
		"dropdown.background": backgroundPalette.input,
		"dropdown.border": backgroundPalette.input,
		"input.background": backgroundPalette.input,
		"input.border": backgroundPalette.input,
		"menu.background": backgroundPalette.input,
		"menu.border": backgroundPalette.input,

		"statusBar.background": backgroundPalette.statusBar,
		"peekViewEditor.background": backgroundPalette.statusBar,
		"peekViewTitle.background": backgroundPalette.statusBar,
		"titleBar.activeBackground": backgroundPalette.statusBar,
		"titleBar.inactiveBackground": backgroundPalette.statusBar,

		"sideBar.background": backgroundPalette.sideBar,
		"editorGroupHeader.tabsBackground": backgroundPalette.sideBar,
		"tab.inactiveBackground": backgroundPalette.sideBar,
		"editorGroup.border": `${backgroundPalette.sideBar}${opacity[75]}`,
		"editorHoverWidget.background": backgroundPalette.sideBar,
		"editorSuggestWidget.background": backgroundPalette.sideBar,
		"editorWidget.background": backgroundPalette.sideBar,
		"peekViewResult.background": backgroundPalette.sideBar,

		"editor.background": backgroundPalette.editor,
		"notifications.background": backgroundPalette.editor,
		"peekViewResult.selectionBackground": backgroundPalette.editor,
		"tab.hoverBackground": backgroundPalette.editor,
		"tab.unfocusedHoverBackground": backgroundPalette.editor,

		"panel.border": backgroundPalette.panelBorder,
		// "notebook.rowHoverBackground": backgroundPalette.panelBorder,
		"settings.focusedRowBackground": backgroundPalette.panelBorder,
		"tab.lastPinnedBorder": backgroundPalette.panelBorder,
		"editorStickyScrollHover.background": backgroundPalette.panelBorder,

		"activityBar.background": backgroundPalette.activityBarBG,
		"editorSuggestWidget.selectedBackground":
			backgroundPalette.activityBarBG,
		"list.activeSelectionBackground": backgroundPalette.activityBarBG,
		"list.hoverBackground": backgroundPalette.activityBarBG,
		"list.inactiveSelectionBackground": backgroundPalette.activityBarBG,
		// "list.focusBackground": backgroundPalette.activityBarBG,
		// "quickInput.list.focusBackground": backgroundPalette.activityBarBG,
		"quickInputList.focusBackground": backgroundPalette.activityBarBG,
		"menu.selectionBackground": backgroundPalette.activityBarBG,
		"menu.separatorBackground": backgroundPalette.activityBarBG,
		"menubar.selectionBackground": backgroundPalette.activityBarBG,
		"sideBarSectionHeader.background": backgroundPalette.activityBarBG,
		"tab.activeBackground": backgroundPalette.activityBarBG,

		"sideBar.dropBackground": `${backgroundPalette.activityBarBG}${opacity[50]}`,
		"list.dropBackground": `${backgroundPalette.activityBarBG}${opacity[50]}`,

		"button.background": backgroundPalette.button,
		"button.hoverBackground": backgroundPalette.buttonHover,
		"button.secondaryBackground": `${backgroundPalette.button}${opacity[64]}`,
		"button.secondaryHoverBackground": `${backgroundPalette.buttonHover}${opacity[64]}`,
		"statusBar.noFolderBackground": backgroundPalette.noFolder,

		"gitDecoration.ignoredResourceForeground": backgroundPalette.gitIgnored,
		"editorCodeLens.foreground": backgroundPalette.gitIgnored,
		// "editorIndentGuide.activeBackground": backgroundPalette.gitIgnored,
		"editorIndentGuide.activeBackground1": backgroundPalette.gitIgnored,
		"editorLineNumber.foreground": backgroundPalette.gitIgnored,

		"activityBar.inactiveForeground": backgroundPalette.activityBarFG,

		"tab.unfocusedInactiveForeground": backgroundPalette.tabInactive,
		"sideBar.foreground": backgroundPalette.tabInactive,
		"tab.inactiveForeground": backgroundPalette.tabInactive,
		"titleBar.inactiveForeground": backgroundPalette.tabInactive,
	};
};
