import { BackgroundPalette } from "../types/colors";
import { FocusBorder } from "../types/settings";
import { ThemeInterfaceProperty } from "../types/theme";

export const buildFocusBorder = (
	backgroundPalette: BackgroundPalette,
	focusBorder: FocusBorder,
): ThemeInterfaceProperty => {
	if (focusBorder === "ON") {
		return {
			focusBorder: backgroundPalette.gitIgnored,
		};
	} else {
		return { focusBorder: backgroundPalette.zero };
	}
};
