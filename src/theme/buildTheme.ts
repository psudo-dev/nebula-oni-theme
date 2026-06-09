import { buildInterface } from "../interface/buildInterface";
import { buildSyntax } from "../syntax/buildSyntax";
import { SyntaxNames, ThemeSettings } from "../types/settings";
import { Theme } from "../types/theme";

export const buildTheme = (
	settings: ThemeSettings,
	syntaxName: SyntaxNames,
): Theme => {
	const {
		main,
		background,
		comments,
		fontStyle,
		syntaxBrightness,
		highlight,
		focusBorder,
	} = settings;
	return {
		$schema: "vscode://schemas/color-theme",
		_author: "[psudo-dev]",
		_name: `Nebula Oni (${syntaxName})`,
		_nebulaSyntax: `${syntaxName} Color Scheme`,
		_type: "dark",
		_oniUI: `${background} - ${main}`,
		_comments: `${comments}`,
		_fontStyle: `${fontStyle}`,
		_syntaxBrightness: `${syntaxBrightness}`,
		_highlight: `${highlight}`,
		_focusBorder: `${focusBorder}`,
		...buildInterface(settings, syntaxName),
		...buildSyntax(settings, syntaxName),
	};
};
