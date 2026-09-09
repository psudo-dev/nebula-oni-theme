import { getSyntaxPalette } from "../palettes/syntax/syntax";
import type { SyntaxNames, ThemeSettings } from "../types/settings";
import type { SemanticToken } from "../types/tokens";
import { buildSemanticBase } from "./tokens/semanticBase";
import { buildSemanticCorrections } from "./tokens/semanticCorrections";

export const buildSemantic = (
	settings: ThemeSettings,
	syntaxName: SyntaxNames,
): SemanticToken => {
	const { syntaxBrightness, fontStyle } = settings;
	const syntaxPalette = getSyntaxPalette(syntaxBrightness);
	const semanticTokens = {
		...buildSemanticBase(syntaxName, syntaxPalette, fontStyle),
		...buildSemanticCorrections(syntaxName, syntaxPalette, fontStyle),
	};
	return semanticTokens;
};
