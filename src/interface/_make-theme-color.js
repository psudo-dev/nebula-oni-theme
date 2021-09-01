"use strict"

const makeBackground = (color, hex) => {
	return {
		"statusBar.background": color.statusBar,
		"peekViewEditor.background": color.statusBar,
		"peekViewTitle.background": color.statusBar,
		"titleBar.activeBackground": color.statusBar,
		"titleBar.inactiveBackground": color.statusBar,

		"sideBar.background": color.sideBar,
		"editorGroupHeader.tabsBackground": color.sideBar,
		"tab.inactiveBackground": color.sideBar,
		"editorGroup.border": `${color.sideBar}${hex[75]}`,
		"editorHoverWidget.background": color.sideBar,
		"editorSuggestWidget.background": color.sideBar,
		"editorWidget.background": color.sideBar,
		"peekViewResult.background": color.sideBar,

		"editor.background": color.editor,
		"notifications.background": color.editor,
		"peekViewResult.selectionBackground": color.editor,
		"tab.hoverBackground": color.editor,
		"tab.unfocusedHoverBackground": color.editor,

		"panel.border": color.panelBorder,
		// "notebook.rowHoverBackground": color.panelBorder,
		"settings.focusedRowBackground": color.panelBorder,
		"tab.lastPinnedBorder": color.panelBorder,

		"activityBar.background": color.activityBarBG,
		"editorSuggestWidget.selectedBackground": color.activityBarBG,
		"list.activeSelectionBackground": color.activityBarBG,
		"list.hoverBackground": color.activityBarBG,
		"list.inactiveSelectionBackground": color.activityBarBG,
		// "list.focusBackground": color.activityBarBG,
		// "quickInput.list.focusBackground": color.activityBarBG,
		"quickInputList.focusBackground": color.activityBarBG,
		"menu.selectionBackground": color.activityBarBG,
		"menu.separatorBackground": color.activityBarBG,
		"menubar.selectionBackground": color.activityBarBG,
		"sideBarSectionHeader.background": color.activityBarBG,
		"tab.activeBackground": color.activityBarBG,

		"sideBar.dropBackground": `${color.activityBarBG}${hex[50]}`,
		"list.dropBackground": `${color.activityBarBG}${hex[50]}`,

		"button.background": color.button,
		"button.hoverBackground": color.buttonHover,
		"button.secondaryBackground": `${color.button}${hex[64]}`,
		"button.secondaryHoverBackground": `${color.buttonHover}${hex[64]}`,
		"statusBar.noFolderBackground": color.noFolder,

		"gitDecoration.ignoredResourceForeground": color.gitIgnored,
		"editorCodeLens.foreground": color.gitIgnored,
		"editorIndentGuide.activeBackground": color.gitIgnored,
		"editorLineNumber.foreground": color.gitIgnored,
		"focusBorder": color.gitIgnored,

		"activityBar.inactiveForeground": color.activityBarFG,

		"tab.unfocusedInactiveForeground": color.tabInactive,
		"sideBar.foreground": color.tabInactive,
		"tab.inactiveForeground": color.tabInactive,
		"titleBar.inactiveForeground": color.tabInactive,
	}
}

const makeBase = (color, hex) => {
	return {
		"dropdown.background": color.input,
		"dropdown.border": color.input,
		"input.background": color.input,
		"input.border": color.input,
		"menu.background": color.input,
		"menu.border": color.input,

		"foreground": color.foreground,
		"charts.foreground": color.foreground,
		"editor.foreground": color.foreground,
		"editorLineNumber.activeForeground": color.foreground,
		"notifications.foreground": color.foreground,
		"sideBarSectionHeader.foreground": color.foreground,
		"statusBar.foreground": color.foreground,
		"titleBar.activeForeground": color.foreground,

		"charts.lines": `${color.foreground}${hex[50]}`,

		"tab.unfocusedActiveForeground": color.tabActive,
		"button.foreground": color.tabActive,
		"button.secondaryForeground": color.tabActive,
		"dropdown.foreground": color.tabActive,
		"menu.foreground": color.tabActive,
		"panelTitle.inactiveForeground": color.tabActive,

		"editorIndentGuide.background": `${color.foreground}${hex[16]}`,
		"editorRuler.foreground": `${color.foreground}${hex[16]}`,
		"editorWhitespace.foreground": `${color.foreground}${hex[16]}`,

		"minimapSlider.activeBackground": `${color.white}${hex[32]}`,
		"minimapSlider.background": `${color.white}${hex[32]}`,
		"minimapSlider.hoverBackground": `${color.white}${hex[32]}`,
		"scrollbarSlider.activeBackground": `${color.white}${hex[32]}`,
		"scrollbarSlider.hoverBackground": `${color.white}${hex[32]}`,

		"scrollbarSlider.background": `${color.white}${hex[20]}`,
	}
}

const makeMain = (color, hex) => {
	return {
		"activityBarBadge.background": color.strong,
		"badge.background": color.strong,
		"editor.findMatchBorder": color.strong,
		"extensionButton.prominentBackground": color.strong,
		"extensionButton.prominentHoverBackground": color.strong,
		"notificationCenterHeader.background": color.strong,
		"progressBar.background": color.strong,

		"activityBar.activeBorder": color.main,
		"activityBar.activeFocusBorder": color.main,
		"activityBar.dropBorder": color.main,
		"activityBar.foreground": color.main,
		"editorLink.activeForeground": color.main,
		"editorWidget.border": color.main,
		"menu.selectionForeground": color.main,
		"menubar.selectionForeground": color.main,
		// "notebook.focusedRowBorder": color.main,
		"notificationLink.foreground": color.main,
		"panelTitle.activeBorder": color.main,
		"panelTitle.activeForeground": color.main,
		"peekView.border": color.main,
		"pickerGroup.border": color.main,
		"pickerGroup.foreground": color.main,
		"sash.hoverBorder": color.main,
		"settings.headerForeground": color.main,
		"settings.modifiedItemIndicator": color.main,
		"tab.activeBorder": color.main,
		"tab.activeForeground": color.main,
		"tab.hoverForeground": color.main,
		"tab.unfocusedActiveBorder": color.main,
		"tab.unfocusedHoverForeground": color.main,
		"textLink.activeForeground": color.main,
		"textLink.foreground": color.main,

		"list.highlightForeground": color.main,
		"list.hoverForeground": color.main,
		"list.focusForeground": color.main,
		"list.activeSelectionForeground": color.listSelection,
		"list.inactiveSelectionForeground": color.listSelection,

		"editorCursor.foreground": color.editorCursor,
		"editorSuggestWidget.highlightForeground": color.editorCursor,

		"textPreformat.foreground": color.formattedText,
		"selection.background": `${color.selection}${hex[64]}`,
		"statusBar.debuggingBackground": color.main,
		"statusBarItem.remoteBackground": color.remote,
	}
}

module.exports = {
	makeBackground,
	makeBase,
	makeMain,
}
