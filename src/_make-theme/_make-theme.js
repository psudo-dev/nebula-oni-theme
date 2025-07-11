const {
	nameOptions,
	themeTextName,
	themeFileName,
} = require("./../../data/theme-names");

const { createFile, themeDir } = require("../vscode/theme-control");

const { Interface } = require("./make-interface");

const { Syntax } = require("./make-syntax");

class Theme {
	constructor(config) {
		this.themeSyntax = new Syntax(
			config.fontStyle,
			config.comments,
			config.syntaxBrightness
		);
		this.themeInterface = new Interface(
			config.main,
			config.background,
			config.highlight,
			config.focusBorder
		);
		this.favorite = config.favorite;
		this.schemeNames = Object.keys(this.themeSyntax);
		this.schemeNames.map((optionName) => {
			this[optionName] = {
				// < creating each color scheme option
				$schema: "vscode://schemas/color-theme",
				_Author: "[psudo-dev]",
				_Name: `${themeTextName} (${optionName})`,
				_NebulaSyntax: `${optionName} Color Scheme`,
				_Type: "dark",
				_OniUI: `${config.background} - ${config.main}`,
				_comments: `${config.comments}`,
				_fontStyle: `${config.fontStyle}`,
				_syntaxBrightness: `${config.syntaxBrightness}`,
				_highlight: `${config.highlight}`,
				_focusBorder: `${config.focusBorder}`,
				...this.themeInterface[optionName],
				...this.themeSyntax[optionName],
			};
		});
	}
	createTheme(optionName, favorite) {
		let fileName = favorite;
		if (typeof favorite !== "string") fileName = optionName;
		const name = `${themeFileName}-${fileName.toLowerCase()}.json`;
		const message = `${name} file has been created!`;
		createFile(themeDir, name, JSON.stringify(this[optionName]), message);
	}
	favoriteTheme() {
		if (this.favorite === "OFF") {
			console.log("Favorite hasn't been selected");
		} else {
			// < to extract the color scheme name of the favorite menu
			const firstChar = this.favorite.indexOf("(") + 1;
			const favorite = this.favorite.slice(firstChar, -1);
			this.createTheme(favorite, "favorite");
		}
	}
	allThemes() {
		this.schemeNames.forEach((theme) => {
			this.createTheme(theme);
		});
	}
}

module.exports = {
	Theme,
};

// < Theme
// const nebulaTheme = {
// 	background: "Grey",
// 	main: "Bumblebee",
// 	highlight: "Ultra Violet",
// 	focusBorder: "ON",
// 	fontStyle: "Italic",
// 	syntaxBrightness: "Normal",
// 	comments: "Dark Violet",
// 	favorite: "OFF",
// };
// new Theme(nebulaTheme).allThemes();

// const nebulaFav = {
// 	background: "Glacial Blue",
// 	main: "Sakura",
// 	highlight: "Ultra Violet",
// 	focusBorder: "ON",
// 	fontStyle: "Italic",
// 	syntaxBrightness: "Dimmed",
// 	comments: "Dark Magenta",
// 	favorite: `${themeTextName} (${nameOptions.option_2})`,
// };
// new Theme(nebulaFav).favoriteTheme();

// new Theme(nebulaTheme).createTheme(`${nameOptions.option_1}`)
// new Theme(nebulaTheme).createTheme(`${nameOptions.option_2}`)
// new Theme(nebulaTheme).createTheme(`${nameOptions.option_3}`)
// new Theme(nebulaTheme).createTheme(`${nameOptions.option_4}`)
