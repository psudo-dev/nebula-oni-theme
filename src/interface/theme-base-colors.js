"use strict"

const {
	nameOptions
} = require("../../data/theme-names")

const {
	colorInfo_1,
	colorInfo_2,
	colorInfo_3,
	basicColors,
	terminalColors,
	hexCode
} = require("./_color-palette-common")

const {
	makeInfo,
	makeHighlightClear,
	makeTransparency,
	makeCommon,
	makeTerminal,
	makeBrackets,
} = require("./_make-common-color")

const common = makeCommon(basicColors)

const brackets = makeBrackets(nameOptions, basicColors)

const info_1 = makeInfo(colorInfo_1, hexCode)
const info_2 = makeInfo(colorInfo_2, hexCode)
const info_3 = makeInfo(colorInfo_3, hexCode)

const transparency = makeTransparency(basicColors, hexCode)

const highlightClear = makeHighlightClear(basicColors, hexCode)

const terminal = makeTerminal(terminalColors)

const noFocusBorder = {
	focusBorder: `${basicColors.zero}`,
}

const base_1 = {
	...common,
	...transparency,
	...terminal,
	...info_1,
}

const base_2 = {
	...common,
	...transparency,
	...terminal,
	...info_2,
}

const base_3 = {
	...common,
	...transparency,
	...terminal,
	...info_3,
}

module.exports = {
	base_1,
	base_3,
	base_2,
	highlightClear,
	noFocusBorder,
	brackets,
}
