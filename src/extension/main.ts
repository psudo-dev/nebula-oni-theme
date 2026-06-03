import * as vscode from "vscode";
import {
	getApplyChanges,
	getRestoreConfig,
	restoreMenuSettings,
	saveRestoreConfig,
} from "../vscodeAPI/settings";
import {
	defaultFavoriteSettings,
	defaultThemeSettings,
} from "../vscodeAPI/defaults";
import {
	showInstallMessage,
	showUpdateMessage,
} from "../vscodeAPI/information";
import {
	installMessage,
	psudoFontOption,
	updateMessage,
} from "../vscodeAPI/messages";
import { generateThemes } from "../theme/generateThemes";
import { generateFavorite } from "../theme/generateFavorite";
import { applyChanges } from "../vscodeAPI/applyChanges";

export function activate(context: vscode.ExtensionContext) {
	const currentVersion = context.extension.packageJSON.version;
	const storedVersion = context.globalState.get<string>("version");

	if (storedVersion === undefined) {
		saveRestoreConfig(defaultThemeSettings, defaultFavoriteSettings);
		showInstallMessage(installMessage, psudoFontOption);
		context.globalState.update("version", currentVersion);
	} else if (storedVersion !== currentVersion) {
		const { themeSettings, favoriteSettings } = getRestoreConfig();
		generateThemes(themeSettings);
		generateFavorite(favoriteSettings);
		restoreMenuSettings(themeSettings);
		showUpdateMessage(updateMessage, psudoFontOption);
		context.globalState.update("version", currentVersion);
	} else {
		const { themeSettings } = getRestoreConfig();
		restoreMenuSettings(themeSettings);
	}

	const listener = vscode.workspace.onDidChangeConfiguration((event) => {
		if (!event.affectsConfiguration("nebulaOni")) {
			return;
		}
		if (!getApplyChanges()) {
			return;
		}
		applyChanges();
	});

	context.subscriptions.push(listener);
}

export function deactivate() {}
