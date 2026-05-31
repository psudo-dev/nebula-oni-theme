import { SyntaxPalette } from "../../types/colors";
import { SyntaxSchemes } from "../../types/settings";
import { TextmateToken } from "../../types/tokens";

export const buildTextmateCorrections = (
	syntaxScheme: SyntaxSchemes,
	syntaxPalette: SyntaxPalette,
): TextmateToken[] => {
	const textmateCorrections = {
		Hourglass: [],
		Pegasus: [
			{
				name: "[CORRECTIONS] GREEN",
				scope: [
					"keyword.operator.new",
					"keyword.control.new",
					"keyword.operator.accessor",
					"punctuation.accessor",
				],
				settings: {
					foreground: syntaxPalette.green,
				},
			},
			{
				name: "[CORRECTIONS] YELLOW",
				scope: ["storage.type.accessor", "variable.language.super"],
				settings: {
					foreground: syntaxPalette.yellow,
				},
			},
		],
		Spirograph: [
			{
				name: "[CORRECTIONS] CYAN",
				scope: ["keyword.operator.new", "keyword.control.new"],
				settings: {
					foreground: syntaxPalette.cyan,
				},
			},
		],
		Cerberus: [
			{
				name: "[CORRECTIONS] GREEN",
				scope: ["keyword.operator.accessor", "punctuation.accessor"],
				settings: {
					foreground: syntaxPalette.green,
				},
			},
			{
				name: "[CORRECTIONS] YELLOW",
				scope: [
					"keyword.control.new",
					"keyword.operator.new",
					"storage.type.accessor",
					"variable.language.super",
				],
				settings: {
					foreground: syntaxPalette.yellow,
				},
			},
		],
	} satisfies Record<SyntaxSchemes, TextmateToken[]>;
	return textmateCorrections[syntaxScheme];
};
