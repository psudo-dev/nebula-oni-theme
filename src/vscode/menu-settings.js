"use strict"

const vscode = require("vscode")

const {
	themeMenuName
} = require("../../data/theme-names")

// < To get any setting
const themeMenu = () => vscode.workspace.getConfiguration(themeMenuName)

// ~ gets a boolean from changes
const applyChanges = () => themeMenu().get("applyChanges")

// ~ set applyChanges to FALSE
const applyChangesFalse = () => themeMenu().update("applyChanges", false, true)

// < set Favorite to OFF
const favoriteOFF = () => themeMenu().update("add.favorite", "OFF", true)

// ? get user preferences
const getConfig = () => {
	return {
		background: themeMenu().get("color.backgroundColor"),
		main: themeMenu().get("color.mainColor"),
		highlight: themeMenu().get("interface.editorSelectionAndFindMatch"),
		focusBorder: themeMenu().get("interface.focusBorder"),
		fontStyle: themeMenu().get("editor.fontStyle"),
		comments: themeMenu().get("editor.comments"),
		// darkerSyntax: themeMenu().get("editor.darkerSyntaxColors"),
		favorite: themeMenu().get("add.favorite"),
	}
}

module.exports = {
	applyChanges,
	getConfig,
	applyChangesFalse,
	favoriteOFF,
	themeMenu,
}
