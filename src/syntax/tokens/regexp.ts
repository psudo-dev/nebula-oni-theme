import { SyntaxPalette } from "../../types/colors";
import { TextmateToken } from "../../types/tokens";

export const buildRegexpTokens = (
	syntaxPalette: SyntaxPalette,
): TextmateToken[] => {
	return [
		{
			name: "REGEX GREEN",
			scope: [
				"string.regexp",
				"constant.regexp",
				"variable.other.regexp",
				"meta.group.regexp",
				"constant.other.character-class.set.regexp",
			],
			settings: {
				foreground: syntaxPalette.green,
			},
		},
		{
			name: "REGEX CYAN",
			scope: [
				"punctuation.definition.group.assertion.regexp",
				"punctuation.definition.character-class.regexp",
				"punctuation.character.set.begin.regexp",
				"punctuation.character.set.end.regexp",
				"support.other.parenthesis.regexp",
			],
			settings: {
				foreground: syntaxPalette.cyan,
			},
		},
		{
			name: "REGEX PURPLE",
			scope: [
				"constant.character.character-class.regexp",
				"constant.other.character-class.regexp",
				"constant.character.set.regexp",
				"punctuation.definition.group.regexp",
				"punctuation.definition.group.capture.regexp",
				"keyword.other.back-reference.regexp",
			],
			settings: {
				foreground: syntaxPalette.purple,
			},
		},
		{
			name: "REGEX YELLOW",
			scope: [
				"keyword.operator.or.regexp",
				"keyword.operator.quantifier.regexp",
			],
			settings: {
				foreground: syntaxPalette.yellow,
			},
		},
		{
			name: "REGEX PINK",
			scope: [
				"constant.character.regexp",
				"punctuation.definition.range.regexp",
				"constant.character.numeric.regexp",
				"keyword.control.anchor.regexp",
			],
			settings: {
				foreground: syntaxPalette.pink,
			},
		},
		{
			name: "REGEX MAGENTA",
			scope: [
				"constant.character.escape.backslash.regexp",
				"keyword.operator.negation.regexp",
				"meta.assertion.negative-look-ahead.regexp",
				"meta.assertion.negative-look-behind.regexp",
				"punctuation.definition.group.no-capture.regexp",
			],
			settings: {
				foreground: syntaxPalette.magenta,
			},
		},
	];
};
