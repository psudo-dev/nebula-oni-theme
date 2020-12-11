"use strict"

const {
	highlightClear,
	noFocusBorder,
} = require("../interface/theme-base-colors")

const {
	themeBackground
} = require("../interface/theme-background")

const {
	themeColor
} = require("../interface/theme-main-color")

class Interface {
	constructor(main, background, highlight, focusBorder) {
		this.colors = {
			...themeColor[main],
			...themeBackground[background],
		} // ? for highlight
		if (highlight === "Clear") Object.assign(this.colors,
			highlightClear)
		if (focusBorder === "OFF") Object.assign(this.colors, noFocusBorder)
	}
}

module.exports = {
	Interface,
}

// ! TEST

// const option_1 = new Interface("Bumblebee", "Dark Grey", "Ultra Violet", "OFF")
// console.log(option_1)

// const option_2 = new Interface("Lime", "Purple", "Ultra Violet", "OFF")
// console.log(option_2)

// const option_3 = new Interface("Peach", "Blue", "Ultra Violet", "OFF")
// console.log(option_3)

// const option_4 = new Interface("Aqua", "Glacial Blue", "Ultra Violet", "OFF")
// console.log(option_4)