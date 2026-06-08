import { basePalette } from "../palettes/interface/base";
import { opacity } from "../palettes/interface/opacity";
import { terminalPalette } from "../palettes/interface/terminal";
import { Comments } from "./settings";

export type HexColor = `#${string}`;

export type SyntaxPalette = {
	pink: HexColor;
	magenta: HexColor;
	purple: HexColor;
	blue: HexColor;
	cyan: HexColor;
	green: HexColor;
	yellow: HexColor;
	white: HexColor;
	grey: HexColor;
	red: HexColor;
	brown: HexColor;
};

export type CommentPalette = Record<Comments, HexColor>;

export type SchemePalette = {
	string: HexColor;
	property: HexColor;
	storageType: HexColor;
	function: HexColor;
	class: HexColor;
	number: HexColor;
	variable: HexColor;
	punctuation: HexColor;
	grey: HexColor;
	invalid: HexColor;
	deprecated: HexColor;
};

export type JsonPalette = {
	keyZero: HexColor;
	valueZero: HexColor;
	keyOne: HexColor;
	valueOne: HexColor;
};

export type ForegroundPalette = {
	foreground: HexColor;
	tabActive: HexColor;
	white: HexColor;
};

export type BackgroundPalette = {
	zero: HexColor;
	input: HexColor;
	statusBar: HexColor;
	sideBar: HexColor;
	editor: HexColor;
	panelBorder: HexColor;
	activityBarBG: HexColor;
	button: HexColor;
	buttonHover: HexColor;
	noFolder: HexColor;
	gitIgnored: HexColor;
	activityBarFG: HexColor;
	tabInactive: HexColor;
};

export type BasePalette = typeof basePalette;

export type InfoPalette = {
	gitModified: HexColor;
	modified: HexColor;
	untracked: HexColor;
	hint: HexColor;
	info: HexColor;
	added: HexColor;
	warning: HexColor;
	error: HexColor;
	deleted: HexColor;
};

export type MainPalette = {
	main: HexColor;
	strong: HexColor;
	editorCursor: HexColor;
	remote: HexColor;
	formattedText: HexColor;
	selection: HexColor;
	listSelection: HexColor;
};

export type Opacity = typeof opacity;

export type TerminalPalette = typeof terminalPalette;
