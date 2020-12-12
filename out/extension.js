"use strict"

const vscode = require("vscode")

const {
	Theme
} = require("../src/_make-theme/_make-theme")

const {
	markdownFile,
	themeMenuName
} = require("../data/theme-names")

const {
	info,
	installMessage,
	reloadMessage,
	updateMessage,
	website,
} = require("../src/vscode/info-message")

const {
	favoriteConfig,
	saveSettings,
	themeConfig,
	freshInstall,
} = require("../src/vscode/user-preferences")

const {
	applyChanges,
	applyChangesFalse,
	favoriteOFF,
	getConfig,
} = require("../src/vscode/menu-settings")

const {
	createFile,
	dataDir,
	dataFileName,
	fileMessage,
	noFile,
} = require("../src/vscode/theme-control")

// ! for tests
// info("FIRST")
// info(getConfig(), "OK")
// info(`APPLY CHANGES: ${applyChanges()}`)

function activate() {
	if (noFile) {
		createFile(dataDir, dataFileName, markdownFile, fileMessage)
		if (freshInstall) {
			info(installMessage, "More Info", website)
			saveSettings(getConfig())
		} else {
			info(updateMessage, "OK")
			new Theme(themeConfig()).allThemes()
			new Theme(favoriteConfig()).favoriteTheme()
		}
	}
	vscode.workspace.onDidChangeConfiguration((event) => {
		if (event.affectsConfiguration(themeMenuName)) {
			if (applyChanges()) {
				const config = getConfig()
				new Theme(config).allThemes()
				new Theme(config).favoriteTheme()
				applyChangesFalse()
				favoriteOFF()
				info(reloadMessage, "Reload", true)
				saveSettings(config)
			}
		}
	})
}

function deactivate() {}

module.exports = {
	activate,
	deactivate,
}