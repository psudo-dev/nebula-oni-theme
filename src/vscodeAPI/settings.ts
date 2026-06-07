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
	return nebulaOniTheme().get(
		"update.restoreConfiguration",
	) as RestoreConfiguration;
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

export const restoreMenuSettings = (
	themeSettings: ThemeSettings,
): Promise<void[]> => {
	const config = nebulaOniTheme();
	return Promise.all([
		config.update("color.backgroundColor", themeSettings.background, true),
		config.update("color.mainColor", themeSettings.main, true),
		config.update(
			"interface.editorSelectionAndFindMatch",
			themeSettings.highlight,
			true,
		),
		config.update("interface.focusBorder", themeSettings.focusBorder, true),
		config.update("editor.fontStyle", themeSettings.fontStyle, true),
		config.update(
			"editor.syntaxBrightness",
			themeSettings.syntaxBrightness,
			true,
		),
		config.update("editor.comments", themeSettings.comments, true),
		config.update("add.favorite", themeSettings.favorite, true),
	]);
};
