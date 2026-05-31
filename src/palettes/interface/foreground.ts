import { ForegroundPalette } from "../../types/colors";
import { Background } from "../../types/settings";

const foregroundGrey: ForegroundPalette = {
	foreground: "#B4BBC8",
	tabActive: "#D7DAE0",
	white: "#F0F1F2",
};

const foregroundBlue: ForegroundPalette = {
	foreground: "#A3BDCC",
	tabActive: "#C3D9E6",
	white: "#79CAF2",
};

const foregroundPurple: ForegroundPalette = {
	foreground: "#B8AECC",
	tabActive: "#CFC4E6",
	white: "#C7B1F2",
};

export const foregroundPalette: Record<Background, ForegroundPalette> = {
	"Grey": foregroundGrey,
	"Dark Grey": foregroundGrey,
	"Blue": foregroundBlue,
	"Glacial Blue": foregroundBlue,
	"Purple": foregroundPurple,
	"Deep Purple": foregroundPurple,
} as const;
