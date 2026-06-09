import { SyntaxNames, ThemeSettings } from "../types/settings";
import { writeTheme } from "./writeTheme";

export const generateThemes = (settings: ThemeSettings): void => {
	const themes: SyntaxNames[] = [
		"Hourglass",
		"Pegasus",
		"Spirograph",
		"Cerberus",
	];
	themes.forEach((theme) => {
		writeTheme(settings, theme);
	});
};
