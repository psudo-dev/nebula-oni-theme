"use strict"

const {
	themeTextName,
	themeFileName
} = require("./../../data/theme-names")

const fs = require("fs")

const path = require("path")

const markdownFile = `
## Hello, curious visitor!

### Welcome to ${themeTextName} Theme!

So, what are you doing around here? This is just an *easter egg*, it's a file that has no purpose besides checking if ${themeTextName} was either installed or updated.

But since you've got here, would like to support this theme?

You can do simple things like recommending this theme to friends and colleagues, rating it on *Visual Studio Code Market Place*, giving it a star on *Github*, there are several ways to help support it!

If you **really** liked this theme, consider [buying me a coffee](https://buymeacoff.ee/psudo.dev)!


### Curiosity Bonus

This is a pretty nice extension to have: \`customizeUI\`.
This settings eliminates all the icons some extensions put beside the tabs:

\`\`\` json
"customizeUI.stylesheet": {
	".editor-actions": "display: none !important"
}
\`\`\`


[PSUDO.DEV](https://github.com/psudo-dev/)
`

// < file to check install/update
const dataDir = path.join(__dirname, "../../data/")
const dataFileName = `${themeFileName}.md`
const fileMessage = `${dataFileName} file has been created`
// ~ for checking if trigger file is on the ./data directory
const noFile = fs.existsSync(`${dataDir}${dataFileName}`) === false

// < theme directory
const themeDir = path.join(__dirname, "../../themes/")

// < node.js file creator
const createFile = (filePath, fileName, file, message) => {
	fs.writeFile(`${filePath}${fileName}`, file, (err) => {
		if (err) throw err
		console.log(message)
	})
}

module.exports = {
	createFile,
	dataDir,
	dataFileName,
	fileMessage,
	markdownFile,
	noFile,
	themeDir,
}