const bgBaseGrey = {
	input: "#14151A",
	foreground: "#B4BBC8",
	tabActive: "#D7DAE0",
	white: "#F0F1F2",
};

const bgBaseBlue = {
	input: "#081620",
	foreground: "#A3BDCC",
	tabActive: "#C3D9E6",
	white: "#79CAF2",
};

const bgBasePurple = {
	input: "#151321",
	foreground: "#B8AECC",
	tabActive: "#CFC4E6",
	white: "#C7B1F2",
};

export const bgGrey = {
	...bgBaseGrey,
	statusBar: "#1E2126",
	sideBar: "#21252A",
	editor: "#262A30",
	panelBorder: "#2E333A",
	activityBarBG: "#363C44",

	button: "#454D59",
	buttonHover: "#5A6473",
	noFolder: "#6D7580",

	gitIgnored: "#5C6673",
	activityBarFG: "#737880",
	tabInactive: "#9097A0",
};

export const bgDarkGrey = {
	...bgBaseGrey,
	statusBar: "#191C26",
	sideBar: "#1C1F29",
	editor: "#1D212D",
	panelBorder: "#242937",
	activityBarBG: "#2D3345",

	button: "#384059",
	buttonHover: "#495373",
	noFolder: "#5A6380",

	gitIgnored: "#4B5573",
	activityBarFG: "#636D83",
	tabInactive: "#7B88A3",
};

export const bgBlue = {
	...bgBaseBlue,
	statusBar: "#0A222E",
	sideBar: "#0A2533",
	editor: "#0C2B3B",
	panelBorder: "#0F3549",
	activityBarBG: "#123F55",

	button: "#17516F",
	buttonHover: "#1D6488",
	noFolder: "#1F6D95",

	gitIgnored: "#406980",
	activityBarFG: "#5C8599",
	tabInactive: "#5993B3",
};

export const bgGlacialBlue = {
	...bgBaseBlue,
	statusBar: "#091A2B",
	sideBar: "#0A1D2E",
	editor: "#0B2134",
	panelBorder: "#0E2941",
	activityBarBG: "#10314F",

	button: "#153E66",
	buttonHover: "#1B4D80",
	noFolder: "#1D558C",

	gitIgnored: "#406080",
	activityBarFG: "#5C7B99",
	tabInactive: "#5986B3",
};

export const bgPurple = {
	...bgBasePurple,
	statusBar: "#1D192E",
	sideBar: "#221D38",
	editor: "#272240",
	panelBorder: "#2F294D",
	activityBarBG: "#3A3263",

	button: "#483D80",
	buttonHover: "#574999",
	noFolder: "#5D4FA6",

	gitIgnored: "#67608D",
	activityBarFG: "#7971A6",
	tabInactive: "#8B81B9",
};

export const bgDeepPurple = {
	...bgBasePurple,
	statusBar: "#17152A",
	sideBar: "#1B182E",
	editor: "#1E1B33",
	panelBorder: "#252240",
	activityBarBG: "#2E2A53",

	button: "#3A3666",
	buttonHover: "#494280",
	noFolder: "#514B8C",

	gitIgnored: "#5B5780",
	activityBarFG: "#6E67B3",
	tabInactive: "#7D78AC",
};

export const backgroundPalette = {
	"Grey": bgGrey,
	"Dark Grey": bgDarkGrey,
	"Blue": bgBlue,
	"Glacial Blue": bgGlacialBlue,
	"Purple": bgPurple,
	"Deep Purple": bgDeepPurple,
} as const;
