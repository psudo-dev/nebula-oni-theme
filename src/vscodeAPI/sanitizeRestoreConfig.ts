import {
	backgroundValues,
	commentValues,
	Favorite,
	favoriteOffValue,
	favoriteSyntaxValues,
	focusBorderValues,
	fontStyleValues,
	highlightValues,
	mainValues,
	RestoreConfiguration,
	syntaxBrightnessValues,
	ThemeSettings,
	ThemeType,
} from "../types/settings";
import { defaultFavoriteSettings, defaultThemeSettings } from "./defaults";
import { saveRestoreConfig } from "./settings";

const getFavoriteValues = (themeType: ThemeType): Favorite[] => {
	switch (themeType) {
		case "theme":
			return [...favoriteOffValue];
		case "favorite":
			return [...favoriteSyntaxValues];
		case "menu":
			return [...favoriteOffValue, ...favoriteSyntaxValues];
	}
};

const getValidSettings = (
	themeType: ThemeType,
): { [K in keyof ThemeSettings]: ThemeSettings[K][] } => {
	return {
		background: [...backgroundValues],
		main: [...mainValues],
		highlight: [...highlightValues],
		focusBorder: [...focusBorderValues],
		fontStyle: [...fontStyleValues],
		syntaxBrightness: [...syntaxBrightnessValues],
		comments: [...commentValues],
		favorite: [...getFavoriteValues(themeType)],
	};
};

export const sanitizeThemeSettings = (
	themeType: ThemeType,
	restoredSettings: Partial<ThemeSettings> | undefined,
	defaultSettings: ThemeSettings,
): [ThemeSettings, boolean] => {
	if (!restoredSettings) return [defaultSettings, true];

	const result = {} as ThemeSettings;
	let changed = false;

	const validSettings = getValidSettings(themeType);

	for (const key in validSettings) {
		const property = key as keyof ThemeSettings;
		const validSetting = validSettings[property] as unknown[];
		const restoredSetting = restoredSettings[property];
		const defaultSetting = defaultSettings[property];
		const isValid = validSetting.includes(restoredSetting);
		result[property] = isValid
			? (restoredSetting as never)
			: (defaultSetting as never);
		if (!isValid) changed = true;
	}
	return [result, changed];
};

export const getSanitizedRestoreConfig = async (
	restoreConfig: Partial<RestoreConfiguration> | undefined,
): Promise<RestoreConfiguration> => {
	const [themeSettings, _themeChanged] = sanitizeThemeSettings(
		"theme",
		restoreConfig?.themeSettings,
		defaultThemeSettings,
	);
	const [favoriteSettings, _favoriteChanged] = sanitizeThemeSettings(
		"favorite",
		restoreConfig?.favoriteSettings,
		defaultFavoriteSettings,
	);

	return { themeSettings, favoriteSettings };
};

export const saveSanitizedRestoreConfig = async (
	restoreConfig: Partial<RestoreConfiguration> | undefined,
): Promise<RestoreConfiguration> => {
	const [themeSettings, themeChanged] = sanitizeThemeSettings(
		"theme",
		restoreConfig?.themeSettings,
		defaultThemeSettings,
	);
	const [favoriteSettings, favoriteChanged] = sanitizeThemeSettings(
		"favorite",
		restoreConfig?.favoriteSettings,
		defaultFavoriteSettings,
	);

	if (themeChanged || favoriteChanged) {
		await saveRestoreConfig(themeSettings, favoriteSettings);
	}

	return { themeSettings, favoriteSettings };
};
