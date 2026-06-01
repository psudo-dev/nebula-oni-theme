import fs from "node:fs";
import path from "node:path";
import { SyntaxNames, ThemeSettings } from "../types/settings";
import { buildTheme } from "./buildTheme";

export const writeTheme = (
	settings: ThemeSettings,
	syntaxName: SyntaxNames,
): void => {
	const themesDirPath = path.join(__dirname, "../themes/");
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
