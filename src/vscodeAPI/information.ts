import * as vscode from "vscode";

export type MessageOption = {
	button: string;
	website: string;
};

export const showInstallMessage = (
	message: string,
	option?: MessageOption,
): void => {
	const github = "https://github.com/psudo-dev/nebula-oni-theme";
	const buttons = option ? ["Github", option.button, "OK"] : ["Github", "OK"];

	vscode.window
		.showInformationMessage(message, ...buttons)
		.then((selection) => {
			if (selection === "Github") {
				vscode.env.openExternal(vscode.Uri.parse(github));
			} else if (option && selection === option.button) {
				vscode.env.openExternal(vscode.Uri.parse(option.website));
			}
		});
};

export const showUpdateMessage = (
	message: string,
	option?: MessageOption,
): void => {
	const changelog =
		"https://github.com/psudo-dev/nebula-oni-theme/blob/main/CHANGELOG.md";
	const buttons = option
		? ["CHANGELOG", option.button, "OK"]
		: ["CHANGELOG", "OK"];

	vscode.window
		.showInformationMessage(message, ...buttons)
		.then((selection) => {
			if (selection === "CHANGELOG") {
				vscode.env.openExternal(vscode.Uri.parse(changelog));
			} else if (option && selection === option.button) {
				vscode.env.openExternal(vscode.Uri.parse(option.website));
			}
		});
};

export const showReloadPrompt = (message: string): void => {
	const options: vscode.MessageOptions = { modal: true };
	vscode.window
		.showInformationMessage(message, options, "Reload")
		.then((selection) => {
			if (selection === "Reload") {
				vscode.commands.executeCommand("workbench.action.reloadWindow");
			}
		});
};
