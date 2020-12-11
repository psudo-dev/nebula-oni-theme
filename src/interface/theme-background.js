"use strict"

const {
	backgroundBase_1,
	background_1A,
	background_1B,
	backgroundBase_2,
	background_2A,
	background_2B,
	backgroundBase_3,
	background_3A,
	background_3B,
} = require("./_color-palette-theme")

const { makeBackground, makeBase } = require("./_make-theme-color")

const { base_1, base_2, base_3 } = require("./theme-base-colors")

const { hexCode } = require("./_color-palette-common")

const editorBase_1 = makeBase(backgroundBase_1, hexCode)
const bg_1A = makeBackground(background_1A, hexCode)
const bg_1B = makeBackground(background_1B, hexCode)

const editorBase_2 = makeBase(backgroundBase_2, hexCode)
const bg_2A = makeBackground(background_2A, hexCode)
const bg_2B = makeBackground(background_2B, hexCode)

const editorBase_3 = makeBase(backgroundBase_3, hexCode)
const bg_3A = makeBackground(background_3A, hexCode)
const bg_3B = makeBackground(background_3B, hexCode)

const themeBackground = {
	"Grey": {
		...editorBase_1,
		...base_1,
		...bg_1A,
	},
	"Dark Grey": {
		...editorBase_1,
		...base_1,
		...bg_1B,
	},
	"Blue": {
		...editorBase_2,
		...base_2,
		...bg_2A,
	},
	"Glacial Blue": {
		...editorBase_2,
		...base_2,
		...bg_2B,
	},
	"Purple": {
		...editorBase_3,
		...base_3,
		...bg_3A,
	},
	"Deep Purple": {
		...editorBase_3,
		...base_3,
		...bg_3B,
	},
}

module.exports = {
	themeBackground,
}