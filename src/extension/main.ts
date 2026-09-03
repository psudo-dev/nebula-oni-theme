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
import { saveSanitizedRestoreConfig } from "../vscodeAPI/sanitizeRestoreConfig";

// + prevents the listener to misfire
// + while applyChanges() is still running
let isApplying = false;

export async function activate(context: vscode.ExtensionContext) {
	// ~ extension host tests
	// > to test fresh install
	// context.globalState.update("version", undefined);
	// > to test update
	// context.globalState.update("version", "2.0.0");
	const currentVersion = context.extension.packageJSON.version;
	const storedVersion = context.globalState.get<string>("version");
	const existingConfig = getRestoreConfig();

	if (storedVersion === undefined) {
		if (existingConfig) {
			// < coming from v2 update
			const { themeSettings, favoriteSettings } =
				await saveSanitizedRestoreConfig(existingConfig);
			generateThemes(themeSettings);
			generateFavorite(favoriteSettings);
			showUpdateMessage(updateMessage, psudoFontOption);
		} else {
			// < fresh install
			await saveRestoreConfig(
				defaultThemeSettings,
				defaultFavoriteSettings,
			);
			showInstallMessage(installMessage, psudoFontOption);
		}
		await context.globalState.update("version", currentVersion);
		// < updates from v3 onwards
	} else if (storedVersion !== currentVersion) {
		const { themeSettings, favoriteSettings } =
			await saveSanitizedRestoreConfig(existingConfig);
		generateThemes(themeSettings);
		generateFavorite(favoriteSettings);
		showUpdateMessage(updateMessage, psudoFontOption);
		await context.globalState.update("version", currentVersion);
	}
	// ~ extension .vsix tests
	// > to reset global state (fresh install)
	// context.globalState.update("version", undefined);
	// > to restore pre-update state for testing
	// context.globalState.update("version", "3.0.0");

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
