import { SyntaxPalette } from "../../types/colors";
import { TextmateToken } from "../../types/tokens";

export const buildRegexp = (syntaxPalette: SyntaxPalette): TextmateToken[] => {
	return [
		{
			name: "REGEX GREEN",
			scope: [
				"string.regexp",
				"constant.regexp",
				"keyword.operator.or.regexp",
			],
			settings: {
				foreground: syntaxPalette.green,
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
				foreground: syntaxPalette.cyan,
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
				foreground: syntaxPalette.purple,
			},
		},
		{
			name: "REGEX YELLOW",
			scope: ["keyword.operator.quantifier.regexp"],
			settings: {
				foreground: syntaxPalette.yellow,
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
				foreground: syntaxPalette.pink,
			},
		},
	];
};
