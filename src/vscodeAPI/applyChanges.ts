import { generateFavorite } from "../theme/generateFavorite";
import { generateThemes } from "../theme/generateThemes";
import { showReloadPrompt } from "./information";
import { reloadMessage } from "./messages";
import {
	getRestoreConfig,
	getThemeSettings,
	resetApplyChanges,
	restoreMenuSettings,
	saveRestoreConfig,
} from "./settings";

export const applyChanges = () => {
	const currentSettings = getThemeSettings();
	const { themeSettings, favoriteSettings } = getRestoreConfig();

	if (currentSettings.favorite === "OFF") {
		generateThemes(currentSettings);
		saveRestoreConfig(currentSettings, favoriteSettings);
	} else {
		generateFavorite(currentSettings);
		restoreMenuSettings(themeSettings);
		saveRestoreConfig(themeSettings, currentSettings);
	}
	resetApplyChanges();
	showReloadPrompt(reloadMessage);
};
