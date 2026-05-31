import { getSyntaxPalette } from "../palettes/syntax/syntax";
import { SyntaxNames, ThemeSettings } from "../types/settings";
import { TextmateToken } from "../types/tokens";
import { buildCommentTokens } from "./tokens/comments";
import { buildJsonTokens } from "./tokens/json";
import { buildMarkupTokens } from "./tokens/markup";
import { buildRegexpTokens } from "./tokens/regexp";
import { buildTextmateBase } from "./tokens/textmateBase";
import { buildTextmateCorrections } from "./tokens/textmateCorrections";
import { getCommentPalette } from "../palettes/syntax/comments";

export const buildTextmate = (
	settings: ThemeSettings,
	syntaxName: SyntaxNames,
): TextmateToken[] => {
	const { syntaxBrightness, fontStyle, comments } = settings;
	const syntaxPalette = getSyntaxPalette(syntaxBrightness);
	const commentPalette = getCommentPalette(syntaxBrightness);
	const textmateTokens = [
		...buildTextmateBase(syntaxName, syntaxPalette, fontStyle),
		...buildJsonTokens(syntaxName, syntaxPalette),
		...buildMarkupTokens(syntaxPalette),
		...buildRegexpTokens(syntaxPalette),
		...buildCommentTokens(commentPalette, comments),
		...buildTextmateCorrections(syntaxName, syntaxPalette),
	];
	return textmateTokens;
};
