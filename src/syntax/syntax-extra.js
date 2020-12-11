"use strict"

const markup = (colors) => {
	return [{
			scope: ["markup.underline"],
			settings: {
				fontStyle: "underline",
			},
		},
		{
			scope: ["punctuation.definition.bold.markdown",
				"markup.bold"
			],
			settings: {
				foreground: colors.yellow,
				fontStyle: "italic",
			},
		},
		{
			scope: ["markup.italic"],
			settings: {
				foreground: colors.green,
				fontStyle: "italic",
			},
		},
		{
			name: "MARKUP MAGENTA",
			scope: [
				"beginning.punctuation.definition.list.markdown",
				"entity.name.section.markdown",
				"markup.heading.setext",
				"markup.heading",
				"punctuation.definition.heading.markdown",
				"punctuation.definition.list.begin.markdown",
				"text.html.markdown invalid.deprecated",
				"text.html.markdown punctuation.definition.tag",
			],
			settings: {
				foreground: colors.magenta,
			},
		},
		{
			name: "MARKUP YELLOW",
			scope: ["markup.heading punctuation.definition.heading"],
			settings: {
				foreground: colors.yellow,
			},
		},
		{
			name: "MARKUP RED",
			scope: ["markup.error", "markup.deleted"],
			settings: {
				foreground: colors.red,
			},
		},
		{
			name: "MARKUP GREEN",
			scope: [
				"markup.fenced_code.block.markdown",
				"markup.inline.raw.markdown",
				"markup.inline.raw.string.markdown",
				"markup.inline.raw",
				"markup.inserted",
				"markup.raw.block.markdown",
				"markup.raw",
				"punctuation.definition.markdown",
				"punctuation.definition.raw.markdown",
			],
			settings: {
				foreground: colors.green,
			},
		},
		{
			name: "MARKUP PINK",
			scope: [
				"constant.other.reference.link.markdown",
				"string.other.link.description.markdown",
				"string.other.link.title.markdown",
			],
			settings: {
				foreground: colors.pink,
			},
		},
		{
			name: "MARKUP PURPLE",
			scope: [
				"markup.changed",
				"punctuation.definition.constant.begin.markdown",
				"punctuation.definition.constant.end.markdown",
				"punctuation.definition.constant.markdown",
				"punctuation.definition.metadata.markdown",
				"punctuation.definition.string.begin.markdown",
				"punctuation.definition.string.end.markdown",
				"string.other.link.description.title.markdown",
				"text.html.markdown string.quoted",
			],
			settings: {
				foreground: colors.purple,
			},
		},
		{
			name: "MARKUP BLUE",
			scope: [
				"beginning.punctuation.definition.quote.markdown",
				"markup.link",
				"markup.quote.markdown",
				"markup.quote",
				"markup.underline.link.image.markdown",
				"markup.underline.link.markdown",
				"meta.attribute.href.html string.quoted.double.html",
				"meta.attribute.href.html string.quoted.single.html",
				"punctuation.definition.link.restructuredtext",
			],
			settings: {
				foreground: colors.blue,
			},
		},
	]
}

const regexp = (colors) => {
	return [{
			name: "REGEX GREEN",
			scope: [
				"string.regexp",
				"constant.regexp",
				"keyword.operator.or.regexp",
			],
			settings: {
				foreground: colors.green,
			},
		},
		{
			name: "REGEX CYAN",
			scope: [
				"constant.character.escape.backslash.regexp",
				"meta.group.regexp",
				"punctuation.definition.group.assertion.regexp",
				"punctuation.definition.character-class.regexp",
				"punctuation.character.set.begin.regexp",
				"punctuation.character.set.end.regexp",
				"support.other.parenthesis.regexp",
			],
			settings: {
				foreground: colors.cyan,
			},
		},
		{
			name: "REGEX PURPLE",
			scope: [
				"constant.character.character-class.regexp",
				"constant.other.character-class.set.regexp",
				"constant.other.character-class.regexp",
				"constant.character.set.regexp",
				"punctuation.definition.group.regexp",
				"punctuation.definition.group.capture.regexp",
				"keyword.control.anchor.regexp",
			],
			settings: {
				foreground: colors.purple,
			},
		},
		{
			name: "REGEX YELLOW",
			scope: ["keyword.operator.quantifier.regexp"],
			settings: {
				foreground: colors.yellow,
			},
		},
		{
			name: "REGEX PINK",
			scope: [
				"keyword.operator.negation.regexp",
				"constant.character.regexp",
				"punctuation.definition.range.regexp",
			],
			settings: {
				foreground: colors.pink,
			},
		},
	]
}

const json = (colors, nameOptions, schemeName) => {
	let scheme
	let scheme_1 = {
		color_1: colors.magenta,
		color_2: colors.blue,
		color_3: colors.purple,
		color_4: colors.green,
	}
	let scheme_2 = {
		color_1: colors.purple,
		color_2: colors.green,
		color_3: colors.magenta,
		color_4: colors.blue,
	}
	if (
		schemeName === nameOptions.option_1 ||
		schemeName === nameOptions.option_3
	) {
		scheme = scheme_1
	} else {
		scheme = scheme_2
	}
	return [{
			name: "JSON KEY - Level 0",
			scope: [
				"meta.structure.dictionary.json support.type.property-name.json",
				"meta.structure.dictionary support.type.property-name punctuation.support.type.property-name.begin",
				"meta.structure.dictionary support.type.property-name punctuation.support.type.property-name.end",
			],
			settings: {
				foreground: scheme.color_1,
			},
		},
		{
			name: "JSON VALUE - Level 0",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted",
			],
			settings: {
				foreground: scheme.color_2,
			},
		},
		{
			name: "JSON KEY - Level 1",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.begin",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.end",
			],
			settings: {
				foreground: scheme.color_3,
			},
		},
		{
			name: "JSON VALUE - Level 1",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: scheme.color_4,
			},
		},
		{
			name: "JSON KEY - Level 2",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.begin",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.end",
			],
			settings: {
				foreground: scheme.color_2,
			},
		},
		{
			name: "JSON VALUE - Level 2",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: scheme.color_1,
			},
		},
		{
			name: "JSON KEY - Level 3",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.begin",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.end",
			],
			settings: {
				foreground: scheme.color_4,
			},
		},
		{
			name: "JSON VALUE - Level 3",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: scheme.color_3,
			},
		},
		{
			name: "JSON KEY - Level 4",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.begin",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.end",
			],
			settings: {
				foreground: scheme.color_1,
			},
		},
		{
			name: "JSON VALUE - Level 4",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: scheme.color_2,
			},
		},
		{
			name: "JSON KEY - Level 5",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.begin",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.end",
			],
			settings: {
				foreground: scheme.color_3,
			},
		},
		{
			name: "JSON VALUE - Level 5",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: scheme.color_4,
			},
		},
		{
			name: "JSON KEY - Level 6",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.begin",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.end",
			],
			settings: {
				foreground: scheme.color_2,
			},
		},
		{
			name: "JSON VALUE - Level 6",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: scheme.color_1,
			},
		},
		{
			name: "JSON KEY - Level 7",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.begin",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.end",
			],
			settings: {
				foreground: scheme.color_4,
			},
		},
		{
			name: "JSON VALUE - Level 7",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: scheme.color_3,
			},
		},
		{
			name: "JSON KEY - Level 8",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.begin",
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json punctuation.support.type.property-name.end",
			],
			settings: {
				foreground: scheme.color_1,
			},
		},
		{
			name: "JSON VALUE - Level 8",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: scheme.color_2,
			},
		},
	]
}

const commentTokens = (commentOption, commentColors) => [{
	name: `${commentOption} Comments`,
	scope: [
		"comment markup.link",
		"comment",
		"punctuation.definition.comment",
		"unused.comment",
		"wildcard.comment",
	],
	settings: {
		foreground: commentColors[commentOption],
		fontStyle: "italic",
	},
}, ]

module.exports = {
	markup,
	regexp,
	json,
	commentTokens,
}