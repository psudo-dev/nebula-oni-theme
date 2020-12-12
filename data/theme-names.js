"use strict"

// < Theme Names
const themeMenuName = "nebulaOni"
const themeTextName = "Nebula Oni"
const themeFileName = "nebula-oni-theme"

// < deprecated, variable and punctuation colors are the same
const colorScheme_1 = "Hourglass"
const colorScheme_3 = "Spirograph"
// ? property: magenta, string: blue, number: pink

const colorScheme_2 = "Pegasus"
const colorScheme_4 = "Cerberus"
// ? property: purple, string: green, number: yellow

const nameOptions = {
	option_1: colorScheme_1,
	option_2: colorScheme_2,
	option_3: colorScheme_3,
	option_4: colorScheme_4,
}

const markdownFile = `
## Hello, curious visitor!

### Welcome to ${themeTextName} Theme!

So, what are you doing around here? This is just an *easter egg*, it's a file that has no purpose besides checking if ${themeTextName} was either installed or updated.

But since you've got here, would like to support this theme?

You can do simple things like recommending this theme to friends and colleagues, rating it on **[Visual Studio Code Market Place](https://marketplace.visualstudio.com/publishers/psudo-dev)**, giving it a star on **[Github](https://github.com/psudo-dev/nebula-oni-theme)**, there are several ways to help support it!

And if you **really** liked this theme, would you consider [buying me a coffee](https://buymeacoff.ee/psudo.dev)?


### Curiosity Bonus

This is a pretty nice extension to have: \`customizeUI\`.
This settings eliminates all the icons some extensions put beside the tabs:

\`\`\` json
"customizeUI.stylesheet": {
	".editor-actions": "display: none !important"
}
\`\`\`

Thanks,

[ [psudo.dev](https://github.com/psudo-dev/) ]
`

module.exports = {
	markdownFile,
	nameOptions,
	themeMenuName,
	themeTextName,
	themeFileName,
}