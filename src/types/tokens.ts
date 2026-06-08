import { HexColor } from "./colors";

export type TextmateToken = {
	name?: string;
	scope: string | string[];
	settings: {
		foreground?: HexColor;
		fontStyle?: string;
	};
};

type SemanticTokenValue =
	| HexColor
	| { foreground?: HexColor; fontStyle?: string };

export type SemanticToken = Record<string, SemanticTokenValue>;
