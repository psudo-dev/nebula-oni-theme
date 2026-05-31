import { getSyntaxPalette } from "../palettes/syntax";
import { SyntaxSchemes, ThemeSettings } from "../types/settings";
import { SemanticToken } from "../types/tokens";
import { buildSemanticBase } from "./tokens/semanticBase";
import { buildSemanticCorrections } from "./tokens/semanticCorrections";

export const buildSemanticTokens = (
	settings: ThemeSettings,
	syntaxScheme: SyntaxSchemes,
): SemanticToken => {
	const { syntaxBrightness, fontStyle } = settings;
	const syntaxPalette = getSyntaxPalette(syntaxBrightness);
	const semanticTokens = {
		...buildSemanticBase(syntaxScheme, syntaxPalette, fontStyle),
		...buildSemanticCorrections(syntaxScheme, syntaxPalette, fontStyle),
	};
	return semanticTokens;
};
