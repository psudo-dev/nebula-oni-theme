import { SyntaxBrightness } from "../types/settings";

export const commentPalettes = {
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
} as const;

export const getCommentPalette = (brightness: SyntaxBrightness) =>
	commentPalettes[brightness];
