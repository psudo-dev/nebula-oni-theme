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

export type Favorite = "ON" | "OFF";

export type SavedFavorite =
	| "Nebula Oni (Hourglass)"
	| "Nebula Oni (Pegasus)"
	| "Nebula Oni (Spirograph)"
	| "Nebula Oni (Cerberus)";

export type FocusBorder = "ON" | "OFF";

export type FontStyle = "Regular" | "Italic";

export type SyntaxBrightness = "Normal" | "Dimmed";

export interface ThemeSettings {
	background: Background;
	main: Main;
	highlight: Highlight;
	focusBorder: FocusBorder;
	fontStyle: FontStyle;
	syntaxBrightness: SyntaxBrightness;
	comments: Comments;
	favorite: Favorite;
}

export interface FavoriteSettings {
	background: Background;
	comments: Comments;
	favorite: SavedFavorite;
	focusBorder: FocusBorder;
	fontStyle: FontStyle;
	highlight: Highlight;
	main: Main;
	syntaxBrightness: SyntaxBrightness;
}

export type SyntaxScheme = "Hourglass" | "Pegasus" | "Spirograph" | "Cerberus";
