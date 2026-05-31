import { InfoPalette } from "../../types/colors";
import { Background } from "../../types/settings";
import { basePalette } from "./base";

export const infoGrey: InfoPalette = {
	gitModified: "#AA99FF",
	modified: "#9966FF",
	untracked: basePalette.blue,
	hint: basePalette.yellow,
	info: basePalette.blue,
	added: basePalette.green,
	warning: basePalette.orange,
	error: basePalette.red,
	deleted: basePalette.raspberry,
};

export const infoBlue: InfoPalette = {
	gitModified: "#BB99FF",
	modified: "#B366FF",
	untracked: "#28CCCC",
	hint: basePalette.yellow,
	info: basePalette.blue,
	added: basePalette.green,
	warning: basePalette.orange,
	error: basePalette.red,
	deleted: basePalette.raspberry,
};

export const infoPurple: InfoPalette = {
	gitModified: "#D98CFF",
	modified: "#E359FF",
	untracked: "#59B9FF",
	hint: basePalette.yellow,
	info: basePalette.blue,
	added: basePalette.green,
	warning: basePalette.orange,
	error: basePalette.red,
	deleted: basePalette.raspberry,
};

export const infoPalettes: Record<Background, InfoPalette> = {
	"Grey": infoGrey,
	"Dark Grey": infoGrey,
	"Blue": infoBlue,
	"Glacial Blue": infoBlue,
	"Purple": infoPurple,
	"Deep Purple": infoPurple,
} as const;
