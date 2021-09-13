"use strict"

const basicColors = {
	zero: "#00000000",
	black: "#14151A",
	white: "#F0F1F2",
	grey: "#9096A0",
	magenta: "#E63AC8",
	pink: "#FF00FF",
	purple: "#6D29CC",
	amethyst: "#AB80FF",
	blue: "#5991FF",
	frenchBlue: "#59BAFF",
	cyan: "#00FFFF",
	brightLime: "#00FF64",
	lime: "#49F249",
	limePlus: "#51D936",
	green: "#7CE667",
	emerald: "#00B386",
	brightYellow: "#FFEA00",
	yellow: "#FFDF40",
	yellowPlus: "#FFD500",
	orange: "#FF8A00",
	red: "#F24949",
	raspberry: "#F22468",
	crimson: "#BF003F",
}

// < Grey
const colorInfo_1 = {
	gitModified: "#AA99FF",
	modified: "#9966FF",
	untracked: basicColors.blue,
	hint: basicColors.yellow,
	info: basicColors.blue,
	added: basicColors.green,
	warning: basicColors.orange,
	error: basicColors.red,
	deleted: basicColors.raspberry,
}

// < Blue
const colorInfo_2 = {
	gitModified: "#BB99FF",
	modified: "#B366FF",
	untracked: "#28CCCC",
	hint: basicColors.yellow,
	info: basicColors.blue,
	added: basicColors.green,
	warning: basicColors.orange,
	error: basicColors.red,
	deleted: basicColors.raspberry,
}

// < Purple
const colorInfo_3 = {
	gitModified: "#D98CFF",
	modified: "#E359FF",
	untracked: "#59B9FF",
	hint: basicColors.yellow,
	info: basicColors.blue,
	added: basicColors.green,
	warning: basicColors.orange,
	error: basicColors.red,
	deleted: basicColors.raspberry,
}

const terminalColors = {
	cursor: basicColors.lime,
	green: basicColors.lime,
	brightGreen: basicColors.lime,
	red: basicColors.raspberry,
	brightRed: basicColors.raspberry,
	cyan: basicColors.blue,
	brightWhite: basicColors.white,
	black: basicColors.black,
	white: "#D7DAE0",
	brightBlack: "#5C6673",
	brightYellow: "#4DB4FF",
	yellow: "#FFFF00",
	brightCyan: "#FFFF4D",
	brightBlue: "#FFA740",
	brightMagenta: "#FF66CC",
	magenta: "#B973FF",
	blue: "#7A36D9",
}

const hexCode = {
	// < Hex Code for opacity
	8: "14",
	10: "1A",
	16: "29",
	20: "33",
	25: "40",
	32: "52",
	36: "5C",
	40: "66",
	42: "6B",
	50: "80",
	64: "A3",
	75: "BF",
	80: "CC",
} // ~ percentage: hexcode

module.exports = {
	colorInfo_1,
	colorInfo_3,
	colorInfo_2,
	basicColors,
	terminalColors,
	hexCode,
}
