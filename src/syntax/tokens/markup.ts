import { SyntaxPalette } from "../../types/colors";
import { TextmateToken } from "../../types/tokens";

export const buildMarkupTokens = (
	syntaxPalette: SyntaxPalette,
): TextmateToken[] => {
	return [
		{
			scope: ["markup.underline"],
			settings: {
				fontStyle: "underline",
			},
		},
		{
			scope: ["punctuation.definition.bold.markdown", "markup.bold"],
			settings: {
				foreground: syntaxPalette.yellow,
				fontStyle: "italic",
			},
		},
		{
			scope: ["markup.italic"],
			settings: {
				foreground: syntaxPalette.green,
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
				foreground: syntaxPalette.magenta,
			},
		},
		{
			name: "MARKUP YELLOW",
			scope: ["markup.heading punctuation.definition.heading"],
			settings: {
				foreground: syntaxPalette.yellow,
			},
		},
		{
			name: "MARKUP RED",
			scope: ["markup.error", "markup.deleted"],
			settings: {
				foreground: syntaxPalette.red,
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
				foreground: syntaxPalette.green,
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
				foreground: syntaxPalette.pink,
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
				foreground: syntaxPalette.purple,
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
				foreground: syntaxPalette.blue,
			},
		},
	];
};
