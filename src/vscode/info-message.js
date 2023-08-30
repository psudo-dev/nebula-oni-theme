"use strict";

const { themeTextName, themeFileName } = require("./../../data/theme-names");

const vscode = require("vscode");

// < popup messages
const modal = (boolean) => ({
	modal: boolean,
});
// < config log
const loggingData = (message) =>
	`Background: ${message.background.toUpperCase()}, Main Color: ${message.main.toUpperCase()}, Favorite: ${message.favorite.toUpperCase()}`;

// < Info Message:
const info = (message, button, option) => {
	if (option !== undefined) {
		option === true
			? vscode.window // ~ pop up message
					.showInformationMessage(message, modal(option), button)
					.then((selectedAction) => {
						if (selectedAction === button) {
							vscode.commands.executeCommand(
								"workbench.action.reloadWindow"
							);
						}
					})
			: vscode.window // ~ external link
					.showInformationMessage(message, button, "OK")
					.then((selection) => {
						if (selection === button) {
							vscode.env.openExternal(vscode.Uri.parse(option));
						}
					});
	} else {
		typeof message === "object" && message !== null
			? vscode.window.showInformationMessage(loggingData(message), button)
			: vscode.window.showInformationMessage(message, button);
	}
};

// < messages text:
const reloadMessage =
	"Your theme preferences have been saved! Reload the Window to apply the changes!";

const installMessage = `Thanks for downloading ${themeTextName} Theme! Use the VSCode Extension's menu to save your preferences and customize your theme! For more information check the theme's page.`;

const updateMessage = `${themeTextName} v2.0 is here! NEW MENU OPTION: Dimmed Syntax Brightness! This update is for those that either prefer less contrast or an overall darker setup! Mix-and-match with darker background colors for different results.`;

const website = `https://github.com/psudo-dev/${themeFileName}`;

module.exports = {
	info,
	reloadMessage,
	installMessage,
	updateMessage,
	website,
};
