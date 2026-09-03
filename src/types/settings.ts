export const backgroundValues = [
	"Grey",
	"Dark Grey",
	"Blue",
	"Glacial Blue",
	"Purple",
	"Deep Purple",
] as const;

export type Background = (typeof backgroundValues)[number];

export const mainValues = [
	"Bumblebee",
	"Lavender",
	"Sakura",
	"Mint",
	"Peach",
	"Aqua",
] as const;

export type Main = (typeof mainValues)[number];

export const commentValues = [
	"Dark Grey",
	"Light Grey",
	"Dark Magenta",
	"Light Magenta",
	"Dark Forest",
	"Light Forest",
	"Dark Violet",
	"Light Violet",
] as const;

export type Comments = (typeof commentValues)[number];

export const highlightValues = ["Ultra Violet", "Clear"] as const;

export type Highlight = (typeof highlightValues)[number];

export const favoriteOffValue = ["OFF"] as const;

export type FavoriteOff = (typeof favoriteOffValue)[number];

export const favoriteSyntaxValues = [
	"Nebula Oni (Hourglass)",
	"Nebula Oni (Pegasus)",
	"Nebula Oni (Spirograph)",
	"Nebula Oni (Cerberus)",
] as const;

export type FavoriteSyntax = (typeof favoriteSyntaxValues)[number];

export type Favorite = FavoriteOff | FavoriteSyntax;

export const focusBorderValues = ["ON", "OFF"] as const;

export type FocusBorder = (typeof focusBorderValues)[number];

export const fontStyleValues = ["Regular", "Italic"] as const;

export type FontStyle = (typeof fontStyleValues)[number];

export const syntaxBrightnessValues = ["Normal", "Dimmed"] as const;

export type SyntaxBrightness = (typeof syntaxBrightnessValues)[number];

export const syntaxNameValues = [
	"Hourglass",
	"Pegasus",
	"Spirograph",
	"Cerberus",
] as const;

export type SyntaxNames = (typeof syntaxNameValues)[number];

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

export type RestoreConfiguration = {
	themeSettings: ThemeSettings;
	favoriteSettings: ThemeSettings;
};

export type ThemeType = "theme" | "favorite" | "menu";
