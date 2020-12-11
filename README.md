![Nebula Oni Logo](./README/nebula_oni_logo.png)

### Table of Contents

- [Nebula Oni Theme](#nebula-oni-theme)
- [Nebula Oni » Theme Options](#nebula-oni--theme-options)
- [Oni UI](#oni-ui)
- [Nebula Syntax](#nebula-syntax)
- [Theme Features](#theme-features)
- [Extensions](#extensions)
- [VSCode Customization](#vscode-customization)
- [Release History](#release-history)
- [Issues and Bugs](#issues-and-bugs)
- [Suggestions and Improvements](#suggestions-and-improvements)
- [References and Links](#references-and-links)
- [Author](#author)
- [License](#license)

## Description <!-- omit in toc -->

**Oni** (鬼) is a type of ogre _youkai_ and **Nebula Oni Theme** has colors from outer space!

This theme has a lot of different options for the **main color**, **background**, **syntax options** and more! You can customize everything and add your own flair through the extension's menu in **VSCode's Settings**!

_<div align="left"> (Syntax: Hourglass / Background: Grey) </div>_

![Nebula Syntax - Hourglass - Typescript](./README/syntax/example_1.png)

_<div align="left"> (Syntax: Pegasus / Background: Purple) </div>_

![Nebula Syntax - Pegasus - Typescript](./README/syntax/example_2.png)

_<div align="left"> (Syntax: Spirograph / Background: Dark Grey) </div>_

![Nebula Syntax - Spirograph - Typescript](./README/syntax/example_3.png)

_<div align="left"> (Syntax: Cerberus / Background: Blue) </div>_

![Nebula Syntax - Cerberus - Typescript](./README/syntax/example_4.png)

_<div align="left"> (Main Color: Bumblebee / Background: Grey) </div>_

![Oni UI Menu](./README/oni-ui/window_1.png)

_<div align="left"> (Main Color: Peach / Background: Blue) </div>_

![Oni UI Menu](./README/oni-ui/window_2.png)

[<div align="right">⬆</div>](#table-of-contents)

## Nebula Oni Theme

This started as a simple Atom's [One Dark Syntax](https://github.com/atom/one-dark-syntax) customization by someone that had just finishied his first programming course, had no idea how to change syntax colors and started tweaking the `settings.json` file and it got a bit out of hand and it became this:

> A completely different theme with **multiple UI options** and a **new Syntax** that has nothing to do with the original project.

### Spread Nebula Oni across the Outer Space <!-- omit in toc -->

If you liked this theme and you want to support it, you can do simple things like:

-  **sharing** this theme with friends and colleagues
-  **rating** it on Visual Studio Code [**Market Place**](https://github.com/psudo-dev/)
-  giving it a **star** on [**Github**](https://github.com/psudo-dev/)

There are several ways to help and support it!

-  And if you **really** liked this theme, would you consider [buying me a coffee](https://buymeacoff.ee/psudo.dev)?

## Nebula Oni » Theme Options

For **Oni UI** there are **six** options for the **Main Color** and **six** different colors for **Background**, and you can combine the two in any way you prefer!

You also have options for **italic**, different colors for **comments**, **selection highlight** and more!

And it's all easily customizable through the **Nebula Oni Menu**!

_<div align="left"> (Main Color: Sakura / Background: Glacial Blue) </div>_

![Nebula Oni Menu](./README/oni-ui/menu.png)

[<div align="right">⬆</div>](#table-of-contents)

## Oni UI

There are a lot of small details and **visual hints** that can make your life a lot easier when interacting with an interface. So I've tried my best to combine them together and enhance the **UX/UI** of the **Visual Studio Code**.

I hope you like it and give it a try! For more info, check [Oni UI's page](./README/ONI-UI.md)

### Main Colors <!-- omit in toc -->

![Oni UI Main Colors](./README/oni-ui/main_1.png)

### Background Colors <!-- omit in toc -->

![Oni UI Background Colors](./README/oni-ui/bg_colors.png)

[<div align="right">⬆</div>](#table-of-contents)

## Nebula Syntax

There are **four** different color schemes for **Nebula Syntax**. Each one has a different feel because of some unique color combinations that are different from each other, some are common for all four and some just for each pair (**Hourglass/Spirograph** and **Pegasus/Cerberus**).

### Examples <!-- omit in toc -->

#### Hourglass (Javascript) <!-- omit in toc -->

![Nebula Syntax - Hourglass](./README/syntax/example_hourglass_js.png)

#### Pegasus (JSON) <!-- omit in toc -->

\*_Color Schemes_ for _JSON_ are split into pairs (_Hourglass/Spirograph_ and _Pegasus/Cerberus_)

![Nebula Syntax - Pegasus](./README/syntax/example_pegasus_json.png)

#### Spirograph (Markdown) <!-- omit in toc -->

\*_Markdown_ is the same for all _Color Schemes_

![Nebula Syntax - Spirograph](./README/syntax/example_spirograph_md.png)

#### Cerberus (HTML) <!-- omit in toc -->

![Nebula Syntax - Cerberus](./README/syntax/example_cerberus_html.png)

[<div align="right">⬆</div>](#table-of-contents)

## Theme Features

### Selection Highlight and Find Match Highlight <!-- omit in toc -->

When you make a selection, the matching text will be highlighted in **Violet**, so it's easier to find other instances of the same word.

With **Find Match**, the matched word in focus will have a **border** that matches the **Oni UI** color and the other selections will be highlighted in **Violet**.

For those that might not be onboard with the **Violet** selection, there is a **Clear**, standard option, with something more neutral.

#### Ultra Violet <!-- omit in toc -->

![Ultra  Violet Highlight](./README/oni-ui/highlight_ultra_violet.gif)

#### Clear <!-- omit in toc -->

![Ultra  Violet Highlight](./README/oni-ui/highlight_clear.gif)

[<div align="right">⬆</div>](#table-of-contents)

### Focus Border <!-- omit in toc -->

It's a **border** that appears on mouse clicks and through keyboard navigation. If you don't need it, there is the option to disable it.

_<div align="left"> (Main Color: Aqua / Background: Purple) </div>_

![Focus Border Example](./README/oni-ui/focus_border.gif)

[<div align="right">⬆</div>](#table-of-contents)

### Italic <!-- omit in toc -->

**Italic** is basically used for `classes`, `namespace`, `interface` and special cases like `this`, `self`, `super`, etc. This theme uses **Semantic Highlight** because that was the only way to target `function parameters`.

For now you have less fine tuning with **Semantic Highlight**, but it helps you identify things much faster when coding, so I ended up dropping all the work I've done on textmate scope and started from scratch to make the theme compatible with **Semantic Highlight**.

### Comments <!-- omit in toc -->

There are 4 colors for comments, the standard **grey**, but also **violet**, **magenta** and **forest**, each of the colors have a lighter and a darker version, for a total of **8 options**.

![Comments Colors](./README/syntax/comments.png)

[<div align="right">⬆</div>](#table-of-contents)

### Side Bar and Activity Bar <!-- omit in toc -->

The background and foreground colors help you easily find which file is open, what is selected and what is in focus.

Hovering over the items will highlight the text with the same color as the **Oni UI Main Color**.

The selection in focus is a bright white text so it doesn't interfere with **Git Decorations** or **Errors** colors when using the file **Explorer**.

_<div align="left"> (Main Color: Lavender / Background: Dark Grey) </div>_

![Side Bar](./README/oni-ui/sidebar.gif)

### Command Palette <!-- omit in toc -->

_<div align="left"> (Main Color: Sakura / Background: Glacial Blue) </div>_

![Side Bar](./README/oni-ui/command_palette.gif)

[<div align="right">⬆</div>](#table-of-contents)

### Color Information <!-- omit in toc -->

These colors are used across the **mini map**, **editor gutter**, **notifications**, **git decorations** and **warnings** so users can easily identify what's going on in a glimpse.

![Oni UI - Info Colors](./README/oni-ui/info.png)

[<div align="right">⬆</div>](#table-of-contents)

### Tabs <!-- omit in toc -->

The **Tabs** have different background colors, border and text so it's easier for you to identify which one is **open** or what is in **focus**.

_<div align="left"> (Main Color: Mint / Background: Dark Grey) </div>_

![Tab](./README/oni-ui/tabs.gif)

[<div align="right">⬆</div>](#table-of-contents)

### Panel and Terminal <!-- omit in toc -->

I tried to select colors that are easy to read but it's still compatible with terminal customizations like **ZSH shell**.

For more information on how to customized it, check [VSCode Customization's page](./README/CUSTOMIZATION.md).

![Terminal](./README/oni-ui/terminal.png)

[<div align="right">⬆</div>](#table-of-contents)

## Extensions

I've customized extensions that are color-related, so if someone would like colors that match the `Nebula Syntax` colors, I'm sharing my settings for these **[Extensions](./README/EXTENSIONS.md)**.

### Better Comments <!-- omit in toc -->

![Better Comments Customization](./README/extra/extensions-better_comments.png)

### Bracket Pair Colorizer and Indent Rainbow <!-- omit in toc -->

![Bracket Pair Colorizer Customization](./README/extra/extensions-bracket_pair-indent_rainbow.png)

[<div align="right">⬆</div>](#table-of-contents)

## VSCode Customization

If you want more information on how to customize your **Oni UI** and **Nebula Syntax**, I made this [quick guide](./README/CUSTOMIZATION.md) with the basics to customize the workbench and the syntax.

[<div align="right">⬆</div>](#table-of-contents)

## More Info <!-- omit in toc -->

-  [Oni UI](./README/ONI-UI.md)
-  [Nebula Syntax](./README/SYNTAX.md)
-  [Extensions](./README/EXTENSIONS.md)

## Release History

-  [more information](./README/CHANGELOG.md)

## Issues and Bugs

-  [more information](./README/ISSUES.md)

## Suggestions and Improvements

-  [more information](./README/CONTRIBUTING.md)

## References and Links

-  [ZSH Terminal Customization](https://medium.com/@shivam1/make-your-terminal-beautiful-and-fast-with-zsh-shell-and-powerlevel10k-6484461c6efb)
-  [Nerd Fonts](https://www.nerdfonts.com/)
-  [VSCode Workbench Customization](https://code.visualstudio.com/api/references/theme-color)
-  [Syntax Highlight Guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
-  [Semantic Highlight Guide](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#semantic-token-classification)

[<div align="right">⬆</div>](#table-of-contents)

## Author

I'm just getting into programming. This project was supposed to be something very simple but it got bigger and bigger and instead of just a few days or weeks, it ended up taking months. I've probably have one or two more Themes and I'm considering maybe creating Icons, who knows?

If you want to support this theme, would you consider:

-  **sharing** this theme with friends and colleagues
-  **rating** it on Visual Studio Code **Market Place**
-  giving it a **star** on **Github**

And if you **really** liked this theme, would you consider [buying me a coffee](https://buymeacoff.ee/psudo.dev)?

Thanks,
[ [psudo.dev](https://github.com/psudo-dev/) ]

## License

-  [Apache 2.0](./README/LICENSE.md)
