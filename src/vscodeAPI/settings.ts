import * as vscode from "vscode";
import { RestoreConfiguration, ThemeSettings } from "../types/settings";
import { sanitizeThemeSettings } from "./sanitizeRestoreConfig";
import { defaultThemeSettings } from "./defaults";

export const nebulaOniTheme = () =>
	vscode.workspace.getConfiguration("nebulaOni");

export const getThemeSettings = (): ThemeSettings => {
	const config = nebulaOniTheme();

	const rawSettings: Partial<ThemeSettings> = {
		background: config.get("color.backgroundColor"),
		main: config.get("color.mainColor"),
		highlight: config.get("interface.editorSelectionAndFindMatch"),
		focusBorder: config.get("interface.focusBorder"),
		fontStyle: config.get("editor.fontStyle"),
		syntaxBrightness: config.get("editor.syntaxBrightness"),
		comments: config.get("editor.comments"),
		favorite: config.get("add.favorite"),
	};

	const [sanitizedSettings] = sanitizeThemeSettings(
		"menu",
		rawSettings,
		defaultThemeSettings,
	);

	return sanitizedSettings;
};

export const getApplyChanges = () => {
	return nebulaOniTheme().get("applyChanges") as boolean;
};

export const getRestoreConfig = () => {
	const restoreConfig = nebulaOniTheme().get(
		"update.restoreConfiguration",
	) as RestoreConfiguration;
	return restoreConfig && Object.keys(restoreConfig).length > 0
		? restoreConfig
		: undefined;
};

export const resetApplyChanges = (): Thenable<void> => {
	return nebulaOniTheme().update("applyChanges", false, true);
};

export const resetFavorite = (): Thenable<void> => {
	return nebulaOniTheme().update("add.favorite", "OFF", true);
};

export const saveRestoreConfig = (
	themeSettings: ThemeSettings,
	favoriteSettings: ThemeSettings,
): Thenable<void> => {
	const restoreConfig: RestoreConfiguration = {
		themeSettings: themeSettings,
		favoriteSettings: favoriteSettings,
	};
	return nebulaOniTheme().update(
		"update.restoreConfiguration",
		restoreConfig,
		true,
	);
};
