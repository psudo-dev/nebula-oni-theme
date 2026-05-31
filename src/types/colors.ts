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
