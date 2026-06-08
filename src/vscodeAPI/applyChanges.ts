import { generateFavorite } from "../theme/generateFavorite";
import { generateThemes } from "../theme/generateThemes";
import { showReloadPrompt } from "./information";
import { reloadMessage } from "./messages";
import {
	getRestoreConfig,
	getThemeSettings,
	resetApplyChanges,
	resetFavorite,
	saveRestoreConfig,
} from "./settings";

export const applyChanges = async (onComplete: () => void) => {
	const currentSettings = getThemeSettings();
	const { themeSettings, favoriteSettings } = getRestoreConfig();

	if (currentSettings.favorite === "OFF") {
		generateThemes(currentSettings);
		saveRestoreConfig(currentSettings, favoriteSettings);
	} else {
		generateFavorite(currentSettings);
		await resetFavorite();
		saveRestoreConfig(themeSettings, currentSettings);
	}
	await resetApplyChanges();
	onComplete();
	showReloadPrompt(reloadMessage);
};
