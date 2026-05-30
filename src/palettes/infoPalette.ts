import { basePalette } from "./basePalette";

export const infoGrey = {
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

export const infoBlue = {
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

export const infoPurple = {
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

export const infoPalette = {
	"Grey": infoGrey,
	"Dark Grey": infoGrey,
	"Blue": infoBlue,
	"Glacial Blue": infoBlue,
	"Purple": infoPurple,
	"Deep Purple": infoPurple,
} as const;
