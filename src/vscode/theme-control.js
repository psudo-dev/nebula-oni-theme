"use strict"

const {
	themeTextName,
	themeFileName
} = require("./../../data/theme-names")

const fs = require("fs")

const path = require("path")

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
	noFile,
	themeDir,
}