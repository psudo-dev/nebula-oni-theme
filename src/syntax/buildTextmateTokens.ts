import { getSyntaxPalette } from "../palettes/syntax";
import { SyntaxSchemes, ThemeSettings } from "../types/settings";
import { TextmateToken } from "../types/tokens";
import { buildCommentTokens } from "./tokens/comments";
import { buildJsonTokens } from "./tokens/json";
import { buildMarkupTokens } from "./tokens/markup";
import { buildRegexpTokens } from "./tokens/regexp";
import { buildTextmateBase } from "./tokens/textmateBase";
import { buildTextmateCorrections } from "./tokens/textmateCorrections";
import { getCommentPalette } from "../palettes/comments";

export const buildTextmateTokens = (
	settings: ThemeSettings,
	syntaxScheme: SyntaxSchemes,
): TextmateToken[] => {
	const { syntaxBrightness, fontStyle, comments } = settings;
	const syntaxPalette = getSyntaxPalette(syntaxBrightness);
	const commentPalette = getCommentPalette(syntaxBrightness);
	const textmateTokens = [
		...buildTextmateBase(syntaxScheme, syntaxPalette, fontStyle),
		...buildJsonTokens(syntaxScheme, syntaxPalette),
		...buildMarkupTokens(syntaxPalette),
		...buildRegexpTokens(syntaxPalette),
		...buildCommentTokens(commentPalette, comments),
		...buildTextmateCorrections(syntaxScheme, syntaxPalette),
	];
	return textmateTokens;
};
