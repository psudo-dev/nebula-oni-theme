import { TerminalPalette } from "../../types/colors";
import { ThemeInterfaceProperty } from "../../types/theme";

export const buildTerminal = (
	terminalPalette: TerminalPalette,
): ThemeInterfaceProperty => {
	return {
		"terminalCursor.foreground": terminalPalette.cursor,
		"terminal.ansiBlack": terminalPalette.black,
		"terminal.ansiBlue": terminalPalette.blue,
		"terminal.ansiCyan": terminalPalette.cyan,
		"terminal.ansiGreen": terminalPalette.green,
		"terminal.ansiMagenta": terminalPalette.magenta,
		"terminal.ansiRed": terminalPalette.red,
		"terminal.ansiWhite": terminalPalette.white,
		"terminal.ansiYellow": terminalPalette.yellow,
		"terminal.ansiBrightBlack": terminalPalette.brightBlack,
		"terminal.ansiBrightBlue": terminalPalette.brightBlue,
		"terminal.ansiBrightCyan": terminalPalette.brightCyan,
		"terminal.ansiBrightGreen": terminalPalette.brightGreen,
		"terminal.ansiBrightMagenta": terminalPalette.brightMagenta,
		"terminal.ansiBrightRed": terminalPalette.brightRed,
		"terminal.ansiBrightWhite": terminalPalette.brightWhite,
		"terminal.ansiBrightYellow": terminalPalette.brightYellow,
	};
};
