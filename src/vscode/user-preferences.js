"use strict"

const {
	themeTextName,
	nameOptions
} = require("./../../data/theme-names")

const {
	themeMenu
} = require("./menu-settings")

// < gets saved configuration (settings.json)
const settingsConfig = () => themeMenu().get("update.restoreConfiguration")

// ~ theme settings and favorite settings
const themeConfig = () => settingsConfig().themeSettings
const favoriteConfig = () => settingsConfig().favoriteSettings

// < theme default configuration
const themeDefault = (type) => {
	let theme
	if (type === "theme") {
		theme = {
			background: "Grey",
			main: "Bumblebee",
			highlight: "Ultra Violet",
			focusBorder: "ON",
			fontStyle: "Italic",
			comments: "Dark Violet",
			favorite: "OFF",
		}
	}
	if (type === "favorite") {
		theme = {
			background: "Glacial Blue",
			main: "Sakura",
			highlight: "Ultra Violet",
			focusBorder: "ON",
			fontStyle: "Italic",
			comments: "Dark Magenta",
			favorite: `${themeTextName} (${nameOptions.option_2})`,
		}
	}
	return theme
}

// < checks for saved preferences:
// ~ if "update.restoreConfiguration" is empty, it's a fresh install
// ? if "update.restoreConfiguration" is has config, it's an update
const freshInstall = Object.keys(settingsConfig()).length === 0

// < creates the object that will be saved in the update.restoreConfig
class Settings {
	constructor(config) {
		if (freshInstall) {
			this.themeSettings = {
				...themeDefault("theme"),
			}
			this.favoriteSettings = {
				...themeDefault("favorite"),
			}
		} else if (config.favorite !== "OFF") {
			this.themeSettings = {
				...config,
			}
			this.favoriteSettings = {
				...config,
			}
		} else {
			this.themeSettings = {
				...config,
			}
			this.favoriteSettings = {
				...favoriteConfig(),
			}
		}
	}
}

// < saves configuration
const saveSettings = (config) => {
	themeMenu().update("update.restoreConfiguration", new Settings(config),
		true)
}

module.exports = {
	favoriteConfig,
	saveSettings,
	themeConfig,
	freshInstall,
}