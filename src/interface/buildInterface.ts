import { backgroundPalettes } from "../palettes/interface/background";
import { basePalette } from "../palettes/interface/base";
import { foregroundPalettes } from "../palettes/interface/foreground";
import { infoPalettes } from "../palettes/interface/info";
import { mainPalettes } from "../palettes/interface/main";
import { opacity } from "../palettes/interface/opacity";
import { terminalPalette } from "../palettes/interface/terminal";
import { SyntaxNames, ThemeSettings } from "../types/settings";
import { ThemeInterface } from "../types/theme";
import { buildBackground } from "./tokens/background";
import { buildBrackets } from "./tokens/brackets";
import { buildCommon } from "./tokens/common";
import { buildFocusBorder } from "./tokens/focusBorder";
import { buildForeground } from "./tokens/foreground";
import { buildHighlight } from "./tokens/highlight";
import { buildInfo } from "./tokens/info";
import { buildMain } from "./tokens/main";
import { buildTerminal } from "./tokens/terminal";
import { buildTransparency } from "./tokens/transparency";

export const buildInterface = (
	settings: ThemeSettings,
	syntaxName: SyntaxNames,
): ThemeInterface => {
	const { main, background, highlight, focusBorder } = settings;
	const mainPalette = mainPalettes[main];
	const backgroundPalette = backgroundPalettes[background];
	const foregroundPalette = foregroundPalettes[background];
	const infoPalette = infoPalettes[background];
	return {
		colors: {
			...buildMain(mainPalette, opacity),
			...buildForeground(foregroundPalette, opacity),
			...buildBackground(backgroundPalette, opacity),
			...buildCommon(basePalette),
			...buildInfo(infoPalette, opacity),
			...buildFocusBorder(backgroundPalette, focusBorder),
			...buildHighlight(basePalette, opacity, highlight),
			...buildTransparency(basePalette, opacity),
			...buildBrackets(syntaxName, basePalette),
			...buildTerminal(terminalPalette),
		},
	};
};
