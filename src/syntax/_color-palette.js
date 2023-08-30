"use strict";

const syntaxColors = {
	Normal: {
		pink: "#FF9EE7",
		magenta: "#D74BBE",
		purple: "#AB80FF",
		blue: "#50B6FF",
		cyan: "#4FE0E0",
		green: "#2FDE73",
		yellow: "#E6E667",
		white: "#D3D1EB",
		red: "#E6457B",
		brown: "#99611F",
	},
	Dimmed: {
		pink: "#E18BCB",
		magenta: "#BD42AA",
		purple: "#8E6CD7",
		blue: "#4197D5",
		cyan: "#41BAB9",
		green: "#29BD62",
		yellow: "#CBCB5B",
		white: "#BBBAD2",
		red: "#CC3D69",
		brown: "#82511A",
	},
};

// Less Dimmed: {
// 	pink: "#E68ECF",
// 	magenta: "#C143AC",
// 	purple: "#926EDB",
// 	blue: "#429AD9",
// 	cyan: "#42BDBD",
// 	green: "#2AC264",
// 	yellow: "#CFCF5D",
// 	white: "#C0BED6",
// 	red: "#D13E6C",
// 	brown: "#85531C",
// },

const commentColors = {
	Normal: {
		"Dark Grey": "#737880",
		"Light Grey": "#8A9099",
		"Dark Magenta": "#9559B3",
		"Light Magenta": "#AA66CC",
		"Dark Forest": "#498C49",
		"Light Forest": "#55A355",
		"Dark Violet": "#6777CD",
		"Light Violet": "#768AED",
	},
	Dimmed: {
		"Dark Grey": "#666B72",
		"Light Grey": "#7B8088",
		"Dark Magenta": "#854F9F",
		"Light Magenta": "#975BB6",
		"Dark Forest": "#417D41",
		"Light Forest": "#4C914C",
		"Dark Violet": "#5C6AB6",
		"Light Violet": "#697AD3",
	},
};

const schemes = (options, colors) => {
	const schemes = {};
	schemes[options.option_1] = {
		string: colors.blue,
		property: colors.magenta,
		storageType: colors.purple,
		function: colors.yellow,
		class: colors.green,
		number: colors.pink,
		variable: colors.white,
		punctuation: colors.cyan,
		invalid: colors.red,
		deprecated: colors.brown,
	};
	schemes[options.option_2] = {
		string: colors.green,
		property: colors.purple,
		storageType: colors.magenta,
		function: colors.pink,
		class: colors.blue,
		number: colors.yellow,
		variable: colors.white,
		punctuation: colors.cyan,
		invalid: colors.red,
		deprecated: colors.brown,
	};
	schemes[options.option_3] = {
		string: colors.blue,
		property: colors.magenta,
		storageType: colors.green,
		function: colors.purple,
		class: colors.yellow,
		number: colors.pink,
		variable: colors.white,
		punctuation: colors.cyan,
		invalid: colors.red,
		deprecated: colors.brown,
	};
	schemes[options.option_4] = {
		string: colors.green,
		property: colors.purple,
		storageType: colors.pink,
		function: colors.blue,
		class: colors.magenta,
		number: colors.yellow,
		variable: colors.white,
		punctuation: colors.cyan,
		invalid: colors.red,
		deprecated: colors.brown,
	};
	return schemes;
};

module.exports = {
	syntaxColors,
	commentColors,
	schemes,
};
