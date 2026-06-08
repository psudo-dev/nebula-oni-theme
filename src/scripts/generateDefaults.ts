import { generateThemes } from "../theme/generateThemes";
import { generateFavorite } from "../theme/generateFavorite";
import {
	defaultThemeSettings,
	defaultFavoriteSettings,
} from "../vscodeAPI/defaults";

generateThemes(defaultThemeSettings);
generateFavorite(defaultFavoriteSettings);
