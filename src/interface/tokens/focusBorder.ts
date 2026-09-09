import type { BackgroundPalette } from "../../types/colors";
import type { FocusBorder } from "../../types/settings";
import type { ThemeInterfaceProperty } from "../../types/theme";

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
