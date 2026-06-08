import { InfoPalette, Opacity } from "../../types/colors";
import { ThemeInterfaceProperty } from "../../types/theme";

export const buildInfo = (
	infoPalette: InfoPalette,
	opacity: Opacity,
): ThemeInterfaceProperty => {
	return {
		"editorHint.foreground": infoPalette.hint,
		"gitDecoration.submoduleResourceForeground": infoPalette.hint,
		"charts.yellow": infoPalette.hint,

		"gitDecoration.modifiedResourceForeground": infoPalette.gitModified,
		"gitDecoration.stageModifiedResourceForeground": `${infoPalette.gitModified}${opacity[75]}`,

		"editorGutter.modifiedBackground": infoPalette.modified,
		"editorOverviewRuler.modifiedForeground": infoPalette.modified,
		"minimapGutter.modifiedBackground": infoPalette.modified,
		"charts.purple": infoPalette.modified,

		"gitDecoration.untrackedResourceForeground": infoPalette.untracked,
		"charts.blue": infoPalette.untracked,

		"editorInfo.foreground": infoPalette.info,
		"editorInfo.background": `${infoPalette.info}${opacity[32]}`,
		"editorMarkerNavigationInfo.background": infoPalette.info,
		"editorOverviewRuler.infoForeground": infoPalette.info,
		"problemsInfoIcon.foreground": infoPalette.info,

		"editorGutter.addedBackground": infoPalette.added,
		"editorOverviewRuler.addedForeground": infoPalette.added,
		"gitDecoration.addedResourceForeground": infoPalette.added,
		// "gitDecoration.stageAddedResourceForeground": `${infoPalette.added}${opacity[75]}`,
		"minimap.findMatchHighlight": `${infoPalette.added}${opacity[80]}`,
		"minimapGutter.addedBackground": infoPalette.added,
		"charts.green": infoPalette.added,

		"editorMarkerNavigationWarning.background": infoPalette.warning,
		"editorOverviewRuler.warningForeground": infoPalette.warning,
		"editorWarning.foreground": infoPalette.warning,
		"editorWarning.background": `${infoPalette.warning}${opacity[32]}`,
		"list.warningForeground": infoPalette.warning,
		"minimap.warningHighlight": infoPalette.warning,
		"problemsWarningIcon.foreground": infoPalette.warning,
		"charts.orange": infoPalette.warning,

		"editorError.foreground": infoPalette.error,
		"editorError.background": `${infoPalette.error}${opacity[32]}`,
		"editorMarkerNavigationError.background": infoPalette.error,
		"editorOverviewRuler.errorForeground": infoPalette.error,
		"errorForeground": infoPalette.error,
		"gitDecoration.conflictingResourceForeground": infoPalette.error,
		"list.errorForeground": infoPalette.error,
		"list.invalidItemForeground": infoPalette.error,
		"listFilterWidget.noMatchesOutline": infoPalette.error,
		"minimap.errorHighlight": infoPalette.error,
		"problemsErrorIcon.foreground": infoPalette.error,

		"editorGutter.deletedBackground": infoPalette.deleted,
		"editorOverviewRuler.deletedForeground": infoPalette.deleted,
		"gitDecoration.deletedResourceForeground": infoPalette.deleted,
		"gitDecoration.stageDeletedResourceForeground": `${infoPalette.deleted}${opacity[75]}`,
		"minimapGutter.deletedBackground": infoPalette.deleted,
		"charts.red": infoPalette.deleted,
	};
};
