import { syntaxNames, ThemeSettings } from "../types/settings";
import { ThemeSyntax } from "../types/theme";
import { buildSemantic } from "./buildSemantic";
import { buildTextmate } from "./buildTextmate";

export const buildSyntax = (
	settings: ThemeSettings,
	syntaxName: syntaxNames,
): ThemeSyntax => {
	return {
		semanticHighlighting: true,
		semanticTokenColors: buildSemantic(settings, syntaxName),
		tokenColors: buildTextmate(settings, syntaxName),
	};
};
