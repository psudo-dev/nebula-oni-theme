import fs from "node:fs";
import path from "node:path";
import { ThemeSettings, SyntaxNames } from "../types/settings";
import { buildTheme } from "./buildTheme";

export const generateFavorite = (settings: ThemeSettings): void => {
	const syntaxName = settings.favorite.match(
		/\(([a-z]+)\)/i,
	)?.[1] as SyntaxNames;
	const theme = buildTheme(settings, syntaxName);
	const themesDirPath = path.join(__dirname, "../themes/");
	const fileName = "nebula-oni-theme-favorite.json";
	const message = `${fileName} file has been created!`;
	try {
		fs.writeFileSync(`${themesDirPath}${fileName}`, JSON.stringify(theme));
		console.log(message);
	} catch (err) {
		console.error(`Failed to write ${fileName}:`, err);
	}
};
