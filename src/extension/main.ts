import * as vscode from "vscode";
import {
	getApplyChanges,
	getRestoreConfig,
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

let isApplying = false;

export function activate(context: vscode.ExtensionContext) {
	// context.globalState.update("version", undefined);
	// context.globalState.update("version", "2.0.0");
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
		showUpdateMessage(updateMessage, psudoFontOption);
		context.globalState.update("version", currentVersion);
	}

	const listener = vscode.workspace.onDidChangeConfiguration((event) => {
		if (!event.affectsConfiguration("nebulaOni")) {
			return;
		}
		if (isApplying) {
			return;
		}
		if (!getApplyChanges()) {
			return;
		}
		isApplying = true;
		applyChanges(() => {
			isApplying = false;
		});
	});

	context.subscriptions.push(listener);
}

export function deactivate() {}
