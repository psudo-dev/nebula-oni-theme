import { CommentPalette } from "../../types/colors";
import { Comments } from "../../types/settings";

export const buildCommentTokens = (
	commentPalette: CommentPalette,
	commentOption: Comments,
) => [
	{
		name: `${commentOption} Comments`,
		scope: [
			"comment markup.link",
			"comment",
			"punctuation.definition.comment",
			"unused.comment",
			"wildcard.comment",
		],
		settings: {
			foreground: commentPalette[commentOption],
			fontStyle: "italic",
		},
	},
];
