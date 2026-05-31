import { HexColor } from "./colors";
import {
	Background,
	Comments,
	FocusBorder,
	FontStyle,
	Highlight,
	Main,
	SyntaxBrightness,
	syntaxNames,
} from "./settings";
import { SemanticToken, TextmateToken } from "./tokens";

export type ThemeName = `Nebula Oni (${syntaxNames})`;

export type ThemeNebulaSyntax = `${syntaxNames} Color Scheme`;

export type ThemeType = "dark" | "light";

export type ThemeOniUI = `${Background} - ${Main}`;

export type ThemeInterfaceProperty = Record<string, HexColor>;

export type ThemeInterface = {
	colors: ThemeInterfaceProperty;
};

export type ThemeSyntax = {
	semanticHighlighting: boolean;
	semanticTokenColors: SemanticToken;
	tokenColors: TextmateToken[];
};

export type Theme = {
	// < creating each color scheme option
	$schema: "vscode://schemas/color-theme";
	_author: "[psudo-dev]";
	_name: ThemeName;
	_nebulaSyntax: ThemeNebulaSyntax;
	_type: ThemeType;
	_oniUI: ThemeOniUI;
	_comments: Comments;
	_fontStyle: FontStyle;
	_syntaxBrightness: SyntaxBrightness;
	_highlight: Highlight;
	_focusBorder: FocusBorder;
} & ThemeInterface &
	ThemeSyntax;
