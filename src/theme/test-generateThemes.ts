import fs from "node:fs";
import path from "node:path";
import { SyntaxNames, ThemeSettings } from "../types/settings";
import { buildTheme } from "./buildTheme";

const writeTheme = (settings: ThemeSettings, syntaxName: SyntaxNames): void => {
	const themesDirPath = path.join(__dirname, "themes/");
	const theme = buildTheme(settings, syntaxName);
	const fileName = `nebula-oni-theme-${syntaxName.toLowerCase()}.json`;
	const message = `${fileName} file has been created!`;
	try {
		fs.writeFileSync(`${themesDirPath}${fileName}`, JSON.stringify(theme));
		console.log(message);
	} catch (err) {
		console.error(`Failed to write ${fileName}:`, err);
	}
};

const generateThemes = (settings: ThemeSettings): void => {
	const themes: SyntaxNames[] = [
		"Hourglass",
		"Pegasus",
		"Spirograph",
		"Cerberus",
	];
	themes.forEach((theme) => {
		writeTheme(settings, theme);
	});
};

const generateFavorite = (settings: ThemeSettings): void => {
	const syntaxName = settings.favorite.match(
		/\(([a-z]+)\)/i,
	)?.[1] as SyntaxNames;
	const themesDirPath = path.join(__dirname, "themes/");
	const theme = buildTheme(settings, syntaxName);
	const fileName = "nebula-oni-theme-favorite.json";
	const message = `${fileName} file has been created!`;
	try {
		fs.writeFileSync(`${themesDirPath}${fileName}`, JSON.stringify(theme));
		console.log(message);
	} catch (err) {
		console.error(`Failed to write ${fileName}:`, err);
	}
};

generateThemes({
	background: "Grey",
	main: "Bumblebee",
	highlight: "Ultra Violet",
	focusBorder: "OFF",
	fontStyle: "Italic",
	syntaxBrightness: "Normal",
	comments: "Dark Violet",
	favorite: "OFF",
});

generateFavorite({
	background: "Glacial Blue",
	main: "Sakura",
	highlight: "Ultra Violet",
	focusBorder: "OFF",
	fontStyle: "Italic",
	syntaxBrightness: "Dimmed",
	comments: "Dark Magenta",
	favorite: "Nebula Oni (Pegasus)",
});
