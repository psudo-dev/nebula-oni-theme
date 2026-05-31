const mainBasePalette = {
	yellow: "#FFE14D",
	yellowStrong: "#FFD919",
	lavender: "#BB99FF",
	lavenderStrong: "#B28CFF",
	selectionBlue: "#2453B3",
	sakura: "#FF99E5",
	sakuraStrong: "#FF8CE2",
	mint: "#55F26F",
	mintStrong: "#51E669",
	selectionPurple: "#523FB3",
	peach: "#FFBFBF",
	peachStrong: "#FFB3B3",
	aqua: "#2EE6D6",
	aquaStrong: "#22DECD",
	selectionEmerald: "#006073",
	text: "#E4E6E6",
};

export const bumblebeePalette = {
	main: mainBasePalette.yellow,
	strong: mainBasePalette.yellowStrong,
	editorCursor: mainBasePalette.lavenderStrong,
	remote: mainBasePalette.lavender,
	formattedText: mainBasePalette.lavenderStrong,
	selection: mainBasePalette.selectionBlue,
	listSelection: mainBasePalette.text,
};

export const lavenderPalette = {
	main: mainBasePalette.lavender,
	strong: mainBasePalette.lavenderStrong,
	editorCursor: mainBasePalette.yellowStrong,
	remote: mainBasePalette.yellowStrong,
	formattedText: mainBasePalette.yellow,
	selection: mainBasePalette.selectionBlue,
	listSelection: mainBasePalette.text,
};

export const sakuraPalette = {
	main: mainBasePalette.sakura,
	strong: mainBasePalette.sakuraStrong,
	editorCursor: mainBasePalette.mintStrong,
	remote: mainBasePalette.mint,
	formattedText: mainBasePalette.mintStrong,
	selection: mainBasePalette.selectionPurple,
	listSelection: mainBasePalette.text,
};

export const mintPalette = {
	main: mainBasePalette.mint,
	strong: mainBasePalette.mintStrong,
	editorCursor: mainBasePalette.sakuraStrong,
	remote: mainBasePalette.sakuraStrong,
	formattedText: mainBasePalette.sakura,
	selection: mainBasePalette.selectionPurple,
	listSelection: mainBasePalette.text,
};

export const peachPalette = {
	main: mainBasePalette.peach,
	strong: mainBasePalette.peachStrong,
	editorCursor: mainBasePalette.aquaStrong,
	remote: mainBasePalette.aqua,
	formattedText: mainBasePalette.aquaStrong,
	selection: mainBasePalette.selectionEmerald,
	listSelection: mainBasePalette.text,
};

export const aquaPalette = {
	main: mainBasePalette.aqua,
	strong: mainBasePalette.aquaStrong,
	editorCursor: mainBasePalette.peachStrong,
	remote: mainBasePalette.peach,
	formattedText: mainBasePalette.peachStrong,
	selection: mainBasePalette.selectionEmerald,
	listSelection: mainBasePalette.text,
};

export const mainPalette = {
	Bumblebee: bumblebeePalette,
	Lavender: lavenderPalette,
	Sakura: sakuraPalette,
	Mint: mintPalette,
	Peach: peachPalette,
	Aqua: aquaPalette,
} as const;
