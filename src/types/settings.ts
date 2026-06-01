export type Background =
	| "Grey"
	| "Dark Grey"
	| "Blue"
	| "Glacial Blue"
	| "Purple"
	| "Deep Purple";

export type Main =
	| "Bumblebee"
	| "Lavender"
	| "Sakura"
	| "Mint"
	| "Peach"
	| "Aqua";

export type Comments =
	| "Dark Grey"
	| "Light Grey"
	| "Dark Magenta"
	| "Light Magenta"
	| "Dark Forest"
	| "Light Forest"
	| "Dark Violet"
	| "Light Violet";

export type Highlight = "Ultra Violet" | "Clear";

export type Favorite =
	| "Nebula Oni (Hourglass)"
	| "Nebula Oni (Pegasus)"
	| "Nebula Oni (Spirograph)"
	| "Nebula Oni (Cerberus)"
	| "OFF";

export type FocusBorder = "ON" | "OFF";

export type FontStyle = "Regular" | "Italic";

export type SyntaxBrightness = "Normal" | "Dimmed";

export type ThemeSettings = {
	background: Background;
	main: Main;
	highlight: Highlight;
	focusBorder: FocusBorder;
	fontStyle: FontStyle;
	syntaxBrightness: SyntaxBrightness;
	comments: Comments;
	favorite: Favorite;
};

export type SyntaxNames = "Hourglass" | "Pegasus" | "Spirograph" | "Cerberus";
