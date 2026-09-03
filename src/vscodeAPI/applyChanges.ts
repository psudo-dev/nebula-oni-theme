import { generateFavorite } from "../theme/generateFavorite";
import { generateThemes } from "../theme/generateThemes";
import { showReloadPrompt } from "./information";
import { reloadMessage } from "./messages";
import { getSanitizedRestoreConfig } from "./sanitizeRestoreConfig";
import {
	getRestoreConfig,
	getThemeSettings,
	resetApplyChanges,
	resetFavorite,
	saveRestoreConfig,
} from "./settings";

export const applyChanges = async (onComplete: () => void) => {
	try {
		const currentSettings = getThemeSettings();
		const existingConfig = getRestoreConfig();
		const { themeSettings, favoriteSettings } =
			await getSanitizedRestoreConfig(existingConfig);

		if (currentSettings.favorite === "OFF") {
			generateThemes(currentSettings);
			await saveRestoreConfig(currentSettings, favoriteSettings);
		} else {
			generateFavorite(currentSettings);
			await resetFavorite();
			await saveRestoreConfig(themeSettings, currentSettings);
		}
		await resetApplyChanges();
		showReloadPrompt(reloadMessage);
	} finally {
		onComplete();
	}
};
