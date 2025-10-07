# Change Log

All notable changes to the **Nebula Oni Theme** extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.1] - 2025-10-04

## Changed

-   Changed the following syntax to `italic`:
    -   (Python) `constant.numeric.dec`, `constant.numeric.bin`, `constant.numeric.oct`, `constant.numeric.hex`, `constant.numeric.float`

## [2.2.0] - 2025-08-09

## Added

-   `ITALIC` support for:
    -   "keyword.control.flow",
    -   "storage.modifier",
    -   "storage.type"

## Changed

-   Fixed a bug that was introduced in v2.0.0 when I added `Dimmed` option:
    -   I had to rewrite the parts related to `Color Correction` since the colors were coming back as `undefined`
    -   Changed files `_synstax-base` and `syntax-corrections`

## [2.1.0] - 2025-06-24

## Added

-   Added New Syntax Colors to `_color-pallete.js`:

    -   Normal Grey: "#7F848C"
    -   Dimmed Grey: "#71767D"

-   Added `"entity.name.tag.wildcard"`, `"punctuation.definition.annotation.java"`, `"punctuation.definition.decorator.python"`, `"meta.attribute.class.html entity.other.attribute-name.html"`

## Changed

-   Changed colors of `"support.constant.property-value"`, `"keyword.other.important"`, `"entity.other.attribute-name.id"`, `"entity.other.attribute-name.pseudo-class"`, `"entity.other.attribute-name.pseudo-element"`, `"entity.other.attribute-name.class"`, `"punctuation.definition.tag"`
-   Corrected color of `"minimap.findMatchHighlight"` by adding transparency

## [2.0.3] - 2023-09-20

## Added

-   `"module": scheme.variable`,

## [2.0.2] - 2023-08-31

## Changed

-   `"meta.delimiter.comma"` from `scheme.variable` to `scheme.punctuation`

## [2.0.1] - 2023-08-30

## Changed

-   `extension.js`, `user-preferences.js` to add `syntaxBrightness: Normal` to saved preferences as default

## [2.0.0] - 2023-08-29

## Added

-   Added new menu option: `Editor: Syntax Brightness`
-   Added Dimmed Syntax Color Palette
-   Added Dimmed Comments Color Palette

## Changed

-   Changed code in several files to accommodate the new functionalities

## [1.5.3] - 2023-08-19

## Changed

-   Changed `"punctuation.separator.parameter"` and `"punctuation.terminator.statement"` colors from `scheme.variable` to `scheme.punctuation`

## [1.5.2] - 2023-08-07

## Changed

-   Changed `typeParameter` semantic token color from the same color as **NUMBER** to the same color as **STORAGETYPE** (to complement `"support.type.primitive"`)
-   Changed `"editorIndentGuide.background"` and `"editorIndentGuide.activeBackground"` to `"editorIndentGuide.background1"` and `"editorIndentGuide.activeBackground1"` because they were deprecated

## Added

-   Added italic to `typeParameter` semantic token (to complement `"support.type.primitive"`)

## [1.5.1] - 2023-08-05

## Added

-   Added `italic` for `["entity.name.type", "entity.name.type.alias"]`

## Changed

-   Changed `"support.type.primitive"` color from **CLASS** color to **STORAGETYPE** color

## [1.5.0] - 2023-08-05

## Changed

-   Changed `type` color from the same color as **NUMBER** to the same color as **CLASS**

## [1.4.4] - 2023-08-03

## Fixed

-   Fixed Bug that prevented the Menu Settings from working

## [1.4.2] - 2023-07-30

## Changed

-   Forgot to change the Update Message

## [1.4.1] - 2023-07-30

## Changed

-   Changed `package.json` configuration to be able to run as a `Web Extension`

## [1.4.0] - 2021-09-28

## Fixed

-   Color Theme Constructor

## [1.3.1] - 2021-09-28

## Added

-   New Print Screens for the Documentation

## Changed

-   README.md
-   ONI-UI.md
-   EXTENSIONS.md

## [1.3.0] - 2021-09-24

## Added

-   New function `makeBrackets()` to Make Common Color file

## Changed

Bracket Pair Colorization combination:

-   Interface constructor file
-   Theme constructor file
-   Theme Base Colors file
-   Make Common Color file

## Removed

Removed from function `makeCommon()`:

-   "editorBracketHighlight.foreground1": basicColors.magenta,
-   "editorBracketHighlight.foreground2": basicColors.cyan,
-   "editorBracketHighlight.foreground3": basicColors.brightYellow,
-   "editorBracketHighlight.foreground4": basicColors.amethyst,
-   "editorBracketHighlight.foreground5": basicColors.brightLime,
-   "editorBracketHighlight.foreground6": basicColors.cyan,
-   "editorBracketHighlight.unexpectedBracket.foreground": basicColors.raspberry,

## [1.2.3] - 2021-09-05

## Added

-   VSCode 1.60 added built-in Bracket Pair Colorization

-   New Settings:

    -   "editorBracketHighlight.foreground1": basicColors.magenta,
    -   "editorBracketHighlight.foreground2": basicColors.cyan,
    -   "editorBracketHighlight.foreground3": basicColors.brightYellow,
    -   "editorBracketHighlight.foreground4": basicColors.amethyst,
    -   "editorBracketHighlight.foreground5": basicColors.brightLime,
    -   "editorBracketHighlight.foreground6": basicColors.cyan,
    -   "editorBracketHighlight.unexpectedBracket.foreground": basicColors.raspberry,

-   New Colors:
    -   magenta: "#E63AC8",
    -   amethyst: "#AB80FF",
    -   frenchBlue: "#59BAFF",
    -   cyan: "#00FFFF",
    -   brightLime: "#00FF64",
    -   brightYellow:"#FFEA00",

## [1.2.2] - 2021-09-01

## Added

-   For variables inside template strings `${variable}`:

    -   "string.quoted.template variable.other.readwrite"

-   Extra Basic Color:

    -   pink: "#FF00FF"

-   Extra Hex Codes:

```js
{
36: "5C",
40: "66",
42: "6B"
}
```

### Changed

Different color for Selection and Word Highlight

-   "editor.selectionHighlightBackground": `${basicColors.pink}${hex[36]}`
-   "editor.wordHighlightBackground": `${basicColors.purple}${hex[36]}`
-   "editor.wordHighlightStrongBackground": `${basicColors.purple}${hex[36]}`

### Removed

-   Brackets match border only with `Bracket Pair Colorizer` extension:

    -   "editorBracketMatch.border": `${basicColors.white}${hex[32]}`

-   Deprecated:

    -   "notebook.rowHoverBackground": color.panelBorder
    -   "notebook.focusedRowBorder": color.main

## [1.2.1] - 2021-07-06

### Changed

It seems that `buy me a coffee` links with `psudo.dev` don't work anymore

-   changed it to `psudodev` instead

## [1.2.0] - 2021-04-30

### Added

-   VSCode 1.53 update
    -   sash.hoverBorder

### Changed

-   VSCode 1.54 update
    -   list.focusBackground -> quickInput.list.focusBackground
-   VSCode 1.55 update
    -   quickInput.list.focusBackgroud -> quickInputList.focusBackground

## [1.1.1] - 2021-01-01

### Added

-   Updated window examples for README and Oni-UI
-   3 new window examples for Oni-UI page

### Changed

-   Minor color tweaks for Activity Bar Color
    -   Grey
    -   Dark Grey
    -   Purple
-   Minor Corrections for Panel Border
    -   Deep Purple

## [1.1.0] - 2020-12-15

### Added

-   New Theme Colors (VSCode 1.52 update)
    -   statusBarItem.errorBackground
    -   statusBarItem.errorForeground
    -   editorError.background
    -   editorWarning.background
    -   editorInfo.background

### Changed

-   Semantic Token "member" became deprecated
-   "member" changed to "method"

## [1.0.1] - 2020-12-14

### Added

-   Same README window examples to Oni-UI
-   New images to README and Oni-UI

## [1.0.0] - 2020-12-12

-   Initial release
-   Hooray! Finally!
