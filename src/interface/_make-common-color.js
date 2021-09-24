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
	"editorInfo.background": `${colorInfo.info}${hex[32]}`,
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
	"editorWarning.background": `${colorInfo.warning}${hex[32]}`,
	"list.warningForeground": colorInfo.warning,
	"minimap.warningHighlight": colorInfo.warning,
	"problemsWarningIcon.foreground": colorInfo.warning,
	"charts.orange": colorInfo.warning,

	"editorError.foreground": colorInfo.error,
	"editorError.background": `${colorInfo.error}${hex[32]}`,
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
	// "editorBracketMatch.border": `${basicColors.white}${hex[32]}`, // decide to keep or not
	"minimap.selectionHighlight": `${basicColors.white}${hex[25]}`,
	"editor.findMatchHighlightBackground": `${basicColors.white}${hex[25]}`,
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
	"editor.selectionHighlightBackground": `${basicColors.pink}${hex[36]}`,
	"minimap.selectionHighlight": `${basicColors.purple}${hex[80]}`,
	"editor.wordHighlightBackground": `${basicColors.purple}${hex[36]}`,
	"editor.wordHighlightStrongBackground": `${basicColors.purple}${hex[36]}`,
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
	"statusBarItem.errorBackground": basicColors.crimson,
	"statusBarItem.errorForeground": basicColors.white,
	"statusBarItem.remoteForeground": basicColors.black,
	"editorLightBulbAutoFix.foreground": basicColors.limePlus,
	"editorLightBulb.foreground": basicColors.yellowPlus,
	"debugIcon.breakpointCurrentStackframeForeground": basicColors
		.yellow,
	"debugIcon.breakpointDisabledForeground": basicColors.grey,
	"debugIcon.breakpointForeground": basicColors.red,
	"debugIcon.breakpointStackframeForeground": basicColors.limePlus,
	"debugIcon.breakpointUnverifiedForeground": basicColors.orange,
	"debugIcon.continueForeground": basicColors.white,
	"debugIcon.disconnectForeground": basicColors.raspberry,
	"debugIcon.pauseForeground": basicColors.white,
	"debugIcon.restartForeground": basicColors.limePlus,
	"debugIcon.startForeground": basicColors.limePlus,
	"debugIcon.stepBackForeground": basicColors.white,
	"debugIcon.stepIntoForeground": basicColors.white,
	"debugIcon.stepOutForeground": basicColors.white,
	"debugIcon.stepOverForeground": basicColors.white,
	"debugIcon.stopForeground": basicColors.raspberry,
	// "editorBracketHighlight.foreground1": basicColors
	// .magenta, //property
	// "editorBracketHighlight.foreground2": basicColors
	// .cyan, //punctuation
	// "editorBracketHighlight.foreground3": basicColors
	// .brightYellow, //function
	// "editorBracketHighlight.foreground4": basicColors
	// .amethyst, //storageType
	// "editorBracketHighlight.foreground5": basicColors
	// .brightLime, //class
	// "editorBracketHighlight.foreground6": basicColors
	// .frenchBlue, //sting
})

const makeBrackets = (options, colors) => {
	const brackets = {}
	brackets[options.option_1] = {
		"editorBracketHighlight.foreground1": colors.magenta,
		"editorBracketHighlight.foreground2": colors.cyan,
		"editorBracketHighlight.foreground3": colors.brightYellow,
		"editorBracketHighlight.foreground4": colors.amethyst,
		"editorBracketHighlight.foreground5": colors.brightLime,
		"editorBracketHighlight.foreground6": colors.frenchBlue,
		"editorBracketHighlight.unexpectedBracket.foreground": colors
			.raspberry,
	}
	brackets[options.option_2] = {
		"editorBracketHighlight.foreground1": colors.brightLime,
		"editorBracketHighlight.foreground2": colors.brightYellow,
		"editorBracketHighlight.foreground3": colors.cyan,
		"editorBracketHighlight.foreground4": colors.amethyst,
		"editorBracketHighlight.foreground5": colors.magenta,
		"editorBracketHighlight.foreground6": colors.frenchBlue,
		"editorBracketHighlight.unexpectedBracket.foreground": colors
			.raspberry,
	}
	brackets[options.option_3] = brackets[options.option_1]
	brackets[options.option_4] = brackets[options.option_2]
	return brackets
}

const makeTerminal = (terminalColors) => ({
	"terminalCursor.foreground": terminalColors.cursor,
	"terminal.ansiBlack": terminalColors.black,
	"terminal.ansiBlue": terminalColors.blue,
	"terminal.ansiCyan": terminalColors.cyan,
	"terminal.ansiGreen": terminalColors.green,
	"terminal.ansiMagenta": terminalColors.magenta,
	"terminal.ansiRed": terminalColors.red,
	"terminal.ansiWhite": terminalColors.white,
	"terminal.ansiYellow": terminalColors.yellow,
	"terminal.ansiBrightBlack": terminalColors.brightBlack,
	"terminal.ansiBrightBlue": terminalColors.brightBlue,
	"terminal.ansiBrightCyan": terminalColors.brightCyan,
	"terminal.ansiBrightGreen": terminalColors.brightGreen,
	"terminal.ansiBrightMagenta": terminalColors.brightMagenta,
	"terminal.ansiBrightRed": terminalColors.brightRed,
	"terminal.ansiBrightWhite": terminalColors.brightWhite,
	"terminal.ansiBrightYellow": terminalColors.brightYellow,
})

module.exports = {
	makeInfo,
	makeHighlightClear,
	makeTransparency,
	makeCommon,
	makeBrackets,
	makeTerminal,
}
