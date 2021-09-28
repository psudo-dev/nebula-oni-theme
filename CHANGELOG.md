# Change Log

All notable changes to the **Nebula Oni Theme** extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2021-09-28

## Fixed

- Theme Color Constructor

## [1.3.1] - 2021-09-28

## Added

- New Print Screens for the Documentation

## Changed

- README.md
- ONI-UI.md
- EXTENSIONS.md

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
