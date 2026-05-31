import { SyntaxBrightness } from "../types/settings";

const syntaxPalettes = {
	Normal: {
		pink: "#FF9EE7",
		magenta: "#D74BBE",
		purple: "#AB80FF",
		blue: "#50B6FF",
		cyan: "#4FE0E0",
		green: "#2FDE73",
		yellow: "#E6E667",
		white: "#D3D1EB",
		grey: "#7F848C",
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
		grey: "#71767D",
		red: "#CC3D69",
		brown: "#82511A",
	},
} as const;

export const getSyntaxPalette = (brightness: SyntaxBrightness) =>
	syntaxPalettes[brightness];
