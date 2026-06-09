import * as vscode from "vscode";
import {
	Background,
	Comments,
	Favorite,
	FocusBorder,
	FontStyle,
	Highlight,
	Main,
	RestoreConfiguration,
	SyntaxBrightness,
	ThemeSettings,
} from "../types/settings";

export const nebulaOniTheme = () =>
	vscode.workspace.getConfiguration("nebulaOni");

export const getThemeSettings = (): ThemeSettings => {
	const config = nebulaOniTheme();
	return {
		background: config.get("color.backgroundColor") as Background,
		main: config.get("color.mainColor") as Main,
		highlight: config.get(
			"interface.editorSelectionAndFindMatch",
		) as Highlight,
		focusBorder: config.get("interface.focusBorder") as FocusBorder,
		fontStyle: config.get("editor.fontStyle") as FontStyle,
		syntaxBrightness: config.get(
			"editor.syntaxBrightness",
		) as SyntaxBrightness,
		comments: config.get("editor.comments") as Comments,
		favorite: config.get("add.favorite") as Favorite,
	};
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
