import { SyntaxPalette } from "../../types/colors";
import { SyntaxSchemes } from "../../types/settings";
import { TextmateToken } from "../../types/tokens";

export const buildJsonTokens = (
	syntaxPalette: SyntaxPalette,
	syntaxScheme: SyntaxSchemes,
): TextmateToken[] => {
	const jsonPalette =
		syntaxScheme === "Hourglass" || syntaxScheme === "Spirograph"
			? {
					keyZero: syntaxPalette.magenta,
					valueZero: syntaxPalette.blue,
					keyOne: syntaxPalette.purple,
					valueOne: syntaxPalette.green,
				}
			: {
					keyZero: syntaxPalette.purple,
					valueZero: syntaxPalette.green,
					keyOne: syntaxPalette.magenta,
					valueOne: syntaxPalette.blue,
				};
	return [
		{
			name: "JSON KEY - Level 0",
			scope: [
				"meta.structure.dictionary.json support.type.property-name.json",
				"meta.structure.dictionary support.type.property-name punctuation.support.type.property-name.begin",
				"meta.structure.dictionary support.type.property-name punctuation.support.type.property-name.end",
			],
			settings: {
				foreground: jsonPalette.keyZero,
			},
		},
		{
			name: "JSON VALUE - Level 0",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted",
			],
			settings: {
				foreground: jsonPalette.valueZero,
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
				foreground: jsonPalette.keyOne,
			},
		},
		{
			name: "JSON VALUE - Level 1",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: jsonPalette.valueOne,
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
				foreground: jsonPalette.valueZero,
			},
		},
		{
			name: "JSON VALUE - Level 2",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: jsonPalette.keyZero,
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
				foreground: jsonPalette.valueOne,
			},
		},
		{
			name: "JSON VALUE - Level 3",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: jsonPalette.keyOne,
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
				foreground: jsonPalette.keyZero,
			},
		},
		{
			name: "JSON VALUE - Level 4",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: jsonPalette.valueZero,
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
				foreground: jsonPalette.keyOne,
			},
		},
		{
			name: "JSON VALUE - Level 5",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: jsonPalette.valueOne,
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
				foreground: jsonPalette.valueZero,
			},
		},
		{
			name: "JSON VALUE - Level 6",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: jsonPalette.keyZero,
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
				foreground: jsonPalette.valueOne,
			},
		},
		{
			name: "JSON VALUE - Level 7",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: jsonPalette.keyOne,
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
				foreground: jsonPalette.keyZero,
			},
		},
		{
			name: "JSON VALUE - Level 8",
			scope: [
				"meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value string.quoted",
			],
			settings: {
				foreground: jsonPalette.valueZero,
			},
		},
	];
};
