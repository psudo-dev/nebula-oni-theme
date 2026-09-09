import { getCommentPalette } from "../palettes/syntax/comments";
import { getSyntaxPalette } from "../palettes/syntax/syntax";
import type { SyntaxNames, ThemeSettings } from "../types/settings";
import type { TextmateToken } from "../types/tokens";
import { buildCommentTokens } from "./tokens/comments";
import { buildJsonTokens } from "./tokens/json";
import { buildMarkupTokens } from "./tokens/markup";
import { buildRegexpTokens } from "./tokens/regexp";
import { buildTextmateBase } from "./tokens/textmateBase";
import { buildTextmateCorrections } from "./tokens/textmateCorrections";

export const buildTextmate = (
	settings: ThemeSettings,
	syntaxName: SyntaxNames,
): TextmateToken[] => {
	const { syntaxBrightness, fontStyle, comments } = settings;
	const syntaxPalette = getSyntaxPalette(syntaxBrightness);
	const commentPalette = getCommentPalette(syntaxBrightness);
	const textmateTokens = [
		...buildTextmateBase(syntaxName, syntaxPalette, fontStyle),
		...buildCommentTokens(commentPalette, comments),
		...buildJsonTokens(syntaxName, syntaxPalette),
		...buildMarkupTokens(syntaxPalette),
		...buildRegexpTokens(syntaxPalette),
		...buildTextmateCorrections(syntaxName, syntaxPalette),
	];
	return textmateTokens;
};
