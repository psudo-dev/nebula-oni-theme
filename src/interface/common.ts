import { BasePalette } from "../types/colors";
import { ThemeInterfaceProperty } from "../types/theme";

export const buildCommon = (
	basePalette: BasePalette,
): ThemeInterfaceProperty => {
	return {
		"activityBarBadge.foreground": basePalette.black,
		"badge.foreground": basePalette.black,
		"extensionButton.prominentForeground": basePalette.black,
		"notificationCenterHeader.foreground": basePalette.black,
		"statusBar.debuggingForeground": basePalette.black,
		"statusBarItem.errorBackground": basePalette.crimson,
		"statusBarItem.errorForeground": basePalette.white,
		"statusBarItem.remoteForeground": basePalette.black,
		"editorLightBulbAutoFix.foreground": basePalette.limePlus,
		"editorLightBulb.foreground": basePalette.yellowPlus,
		"debugIcon.breakpointCurrentStackframeForeground": basePalette.yellow,
		"debugIcon.breakpointDisabledForeground": basePalette.grey,
		"debugIcon.breakpointForeground": basePalette.red,
		"debugIcon.breakpointStackframeForeground": basePalette.limePlus,
		"debugIcon.breakpointUnverifiedForeground": basePalette.orange,
		"debugIcon.continueForeground": basePalette.white,
		"debugIcon.disconnectForeground": basePalette.raspberry,
		"debugIcon.pauseForeground": basePalette.white,
		"debugIcon.restartForeground": basePalette.limePlus,
		"debugIcon.startForeground": basePalette.limePlus,
		"debugIcon.stepBackForeground": basePalette.white,
		"debugIcon.stepIntoForeground": basePalette.white,
		"debugIcon.stepOutForeground": basePalette.white,
		"debugIcon.stepOverForeground": basePalette.white,
		"debugIcon.stopForeground": basePalette.raspberry,
		// "editorBracketHighlight.foreground1": basePalette
		// .magenta, //property
		// "editorBracketHighlight.foreground2": basePalette
		// .cyan, //punctuation
		// "editorBracketHighlight.foreground3": basePalette
		// .brightYellow, //function
		// "editorBracketHighlight.foreground4": basePalette
		// .amethyst, //storageType
		// "editorBracketHighlight.foreground5": basePalette
		// .brightLime, //class
		// "editorBracketHighlight.foreground6": basePalette
		// .frenchBlue, //sting}
	};
};
