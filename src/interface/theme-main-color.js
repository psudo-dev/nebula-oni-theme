"use strict"

const { mainColorPalette } = require("./_color-palette-theme")

const { makeMain } = require("./_make-theme-color")

const { hexCode } = require("./_color-palette-common")

// < Bumblebee
const theme_1 = {
	main: mainColorPalette.color_1A,
	strong: mainColorPalette.color_1B,

	editorCursor: mainColorPalette.color_2B,

	remote: mainColorPalette.color_2A,
	formattedText: mainColorPalette.color_2B,

	selection: mainColorPalette.selection_1,
	listSelection: mainColorPalette.text,
}

// < Lavender
const theme_2 = {
	main: mainColorPalette.color_2A,
	strong: mainColorPalette.color_2B,

	editorCursor: mainColorPalette.color_1B,

	// ? inverted
	remote: mainColorPalette.color_1B,
	formattedText: mainColorPalette.color_1A,

	selection: mainColorPalette.selection_1,
	listSelection: mainColorPalette.text,
}

// < Sakura
const theme_3 = {
	main: mainColorPalette.color_3A,
	strong: mainColorPalette.color_3B,

	editorCursor: mainColorPalette.color_4B,

	remote: mainColorPalette.color_4A,
	formattedText: mainColorPalette.color_4B,

	selection: mainColorPalette.selection_2,
	listSelection: mainColorPalette.text,
}

// < Mint
const theme_4 = {
	main: mainColorPalette.color_4A,
	strong: mainColorPalette.color_4B,

	editorCursor: mainColorPalette.color_3B,

	// ? inverted
	remote: mainColorPalette.color_3B,
	formattedText: mainColorPalette.color_3A,

	selection: mainColorPalette.selection_2,
	listSelection: mainColorPalette.text,
}

// < Peach
const theme_5 = {
	main: mainColorPalette.color_5A,
	strong: mainColorPalette.color_5B,

	editorCursor: mainColorPalette.color_6B,

	remote: mainColorPalette.color_6A,
	formattedText: mainColorPalette.color_6B,

	selection: mainColorPalette.selection_3,
	listSelection: mainColorPalette.text,
}

// < Aqua
const theme_6 = {
	main: mainColorPalette.color_6A,
	strong: mainColorPalette.color_6B,

	editorCursor: mainColorPalette.color_5B,

	remote: mainColorPalette.color_5A,
	formattedText: mainColorPalette.color_5B,

	selection: mainColorPalette.selection_3,
	listSelection: mainColorPalette.text,
}

const themeColor = {
	Bumblebee: makeMain(theme_1, hexCode),
	Lavender: makeMain(theme_2, hexCode),
	Sakura: makeMain(theme_3, hexCode),
	Mint: makeMain(theme_4, hexCode),
	Peach: makeMain(theme_5, hexCode),
	Aqua: makeMain(theme_6, hexCode),
}

module.exports = {
	themeColor,
}

// < "list.hoverForeground": yellow/green
