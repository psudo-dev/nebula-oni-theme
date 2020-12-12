"use strict"

const makeInfo = (colorInfo, hex) => ({
	"editorHint.foreground": colorInfo.hint,
	"gitDecoration.submoduleResourceForeground": colorInfo.hint,
	"charts.yellow": colorInfo.hint,

	"gitDecoration.modifiedResourceForeground": colorInfo.gitModified,
	"gitDecoration.stageModifiedResourceForeground": `${colorInfo.gitModified}${hex[75]}`,

	"editorGutter.modifiedBackground": colorInfo.modified,
	"editorOverviewRuler.modifiedForeground": colorInfo.modified,
	"minimapGutter.modifiedBackground": colorInfo.modified,
	"charts.purple": colorInfo.modified,

	"gitDecoration.untrackedResourceForeground": colorInfo.untracked,
	"charts.blue": colorInfo.untracked,

	"editorInfo.foreground": colorInfo.info,
	"editorMarkerNavigationInfo.background": colorInfo.info,
	"editorOverviewRuler.infoForeground": colorInfo.info,
	"problemsInfoIcon.foreground": colorInfo.info,

	"editorGutter.addedBackground": colorInfo.added,
	"editorOverviewRuler.addedForeground": colorInfo.added,
	"gitDecoration.addedResourceForeground": colorInfo.added,
	// "gitDecoration.stageAddedResourceForeground": `${colorInfo.added}${hex[75]}`,
	"minimap.findMatchHighlight": colorInfo.added,
	"minimapGutter.addedBackground": colorInfo.added,
	"charts.green": colorInfo.added,

	"editorMarkerNavigationWarning.background": colorInfo.warning,
	"editorOverviewRuler.warningForeground": colorInfo.warning,
	"editorWarning.foreground": colorInfo.warning,
	"list.warningForeground": colorInfo.warning,
	"minimap.warningHighlight": colorInfo.warning,
	"problemsWarningIcon.foreground": colorInfo.warning,
	"charts.orange": colorInfo.warning,

	"editorError.foreground": colorInfo.error,
	"editorMarkerNavigationError.background": colorInfo.error,
	"editorOverviewRuler.errorForeground": colorInfo.error,
	"errorForeground": colorInfo.error,
	"gitDecoration.conflictingResourceForeground": colorInfo.error,
	"list.errorForeground": colorInfo.error,
	"list.invalidItemForeground": colorInfo.error,
	"listFilterWidget.noMatchesOutline": colorInfo.error,
	"minimap.errorHighlight": colorInfo.error,
	"problemsErrorIcon.foreground": colorInfo.error,

	"editorGutter.deletedBackground": colorInfo.deleted,
	"editorOverviewRuler.deletedForeground": colorInfo.deleted,
	"gitDecoration.deletedResourceForeground": colorInfo.deleted,
	"gitDecoration.stageDeletedResourceForeground": `${colorInfo.deleted}${hex[75]}`,
	"minimapGutter.deletedBackground": colorInfo.deleted,
	"charts.red": colorInfo.deleted,
})

const makeHighlightClear = (basicColors, hex) => ({
	"editorBracketMatch.border": `${basicColors.white}${hex[32]}`,
	"minimap.selectionHighlight": `${basicColors.white}${hex[24]}`,
	"editor.findMatchHighlightBackground": `${basicColors.white}${hex[24]}`,
	"selection.background": `${basicColors.white}${hex[20]}`,
	"editor.findMatchBackground": `${basicColors.white}${hex[16]}`,
	"editor.selectionBackground": `${basicColors.white}${hex[10]}`,
	"editor.selectionHighlightBackground": `${basicColors.white}${hex[10]}`,
})

const makeTransparency = (basicColors, hex) => ({
	"activityBar.border": basicColors.zero,
	"editor.findMatchHighlightBorder": basicColors.zero,
	"editorBracketMatch.background": basicColors.zero,
	"editorBracketMatch.border": basicColors.zero,
	"editorError.border": basicColors.zero,
	"editorHint.border": basicColors.zero,
	"editorHoverWidget.border": basicColors.zero,
	"editorInfo.border": basicColors.zero,
	"editorOverviewRuler.border": basicColors.zero,
	"editorSuggestWidget.border": basicColors.zero,
	"editorWarning.border": basicColors.zero,
	"menu.selectionBorder": basicColors.zero,
	"menubar.selectionBorder": basicColors.zero,
	"tab.border": basicColors.zero,
	"terminal.border": basicColors.zero,
	"editor.findMatchBackground": `${basicColors.purple}${hex[80]}`,
	"editor.findMatchHighlightBackground": `${basicColors.purple}${hex[80]}`,
	"editor.selectionBackground": `${basicColors.purple}${hex[80]}`,
	"editor.selectionHighlightBackground": `${basicColors.purple}${hex[80]}`,
	"minimap.selectionHighlight": `${basicColors.purple}${hex[80]}`,
	"editor.wordHighlightBackground": `${basicColors.white}${hex[16]}`,
	"editor.wordHighlightStrongBackground": `${basicColors.white}${hex[10]}`,
	"editor.lineHighlightBackground": `${basicColors.white}${hex[8]}`,
	"diffEditor.insertedTextBackground": `${basicColors.emerald}${hex[20]}`,
	"diffEditor.removedTextBackground": `${basicColors.red}${hex[20]}`,
})

const makeCommon = (basicColors) => ({
	"activityBarBadge.foreground": basicColors.black,
	"badge.foreground": basicColors.black,
	"extensionButton.prominentForeground": basicColors.black,
	"notificationCenterHeader.foreground": basicColors.black,
	"statusBar.debuggingForeground": basicColors.black,
	"statusBarItem.remoteForeground": basicColors.black,
	"editorLightBulbAutoFix.foreground": basicColors.limePlus,
	"editorLightBulb.foreground": basicColors.yellowPlus,
	"debugIcon.breakpointCurrentStackframeForeground": basicColors.yellow,
	"debugIcon.breakpointDisabledForeground": basicColors.grey,
	"debugIcon.breakpointForeground": basicColors.red,
	"debugIcon.breakpointStackframeForeground": basicColors.limePlus,
	"debugIcon.breakpointUnverifiedForeground": basicColors.orange,
	"debugIcon.continueForeground": basicColors.white,
	"debugIcon.disconnectForeground": basicColors.crimson,
	"debugIcon.pauseForeground": basicColors.white,
	"debugIcon.restartForeground": basicColors.limePlus,
	"debugIcon.startForeground": basicColors.limePlus,
	"debugIcon.stepBackForeground": basicColors.white,
	"debugIcon.stepIntoForeground": basicColors.white,
	"debugIcon.stepOutForeground": basicColors.white,
	"debugIcon.stepOverForeground": basicColors.white,
	"debugIcon.stopForeground": basicColors.crimson,
})

const makeTerminal = (colorTerminal) => ({
	"terminalCursor.foreground": colorTerminal.cursor,
	"terminal.ansiBlack": colorTerminal.black,
	"terminal.ansiBlue": colorTerminal.blue,
	"terminal.ansiCyan": colorTerminal.cyan,
	"terminal.ansiGreen": colorTerminal.green,
	"terminal.ansiMagenta": colorTerminal.magenta,
	"terminal.ansiRed": colorTerminal.red,
	"terminal.ansiWhite": colorTerminal.white,
	"terminal.ansiYellow": colorTerminal.yellow,
	"terminal.ansiBrightBlack": colorTerminal.brightBlack,
	"terminal.ansiBrightBlue": colorTerminal.brightBlue,
	"terminal.ansiBrightCyan": colorTerminal.brightCyan,
	"terminal.ansiBrightGreen": colorTerminal.brightGreen,
	"terminal.ansiBrightMagenta": colorTerminal.brightMagenta,
	"terminal.ansiBrightRed": colorTerminal.brightRed,
	"terminal.ansiBrightWhite": colorTerminal.brightWhite,
	"terminal.ansiBrightYellow": colorTerminal.brightYellow,
})

module.exports = {
	makeInfo,
	makeHighlightClear,
	makeTransparency,
	makeCommon,
	makeTerminal,
}