"use strict"

const semanticTokens = (colorSchemes, schemeName) => {
	const scheme = colorSchemes[schemeName]
	const tokens = {
		"class.defaultLibrary": scheme.class,
		"class": scheme.class,
		"class.readonly": scheme.class,
		"class.declaration": scheme.class,
		"type": scheme.class,
		"interface": scheme.class,
		"enum": scheme.class,
		"struct": scheme.class,
		"variable.defaultLibrary": scheme.class,
		"namespace": scheme.number,
		"typeParameter": scheme.number,
		"enumMember": scheme.number,
		"variable.readonly.defaultLibrary": scheme.number,
		"function": scheme.function,
		"function.defaultLibrary": scheme.function,
		"method": scheme.function,
		"macro": scheme.function,
		"event": scheme.function,
		"property": scheme.property,
		"property.readonly": scheme.property,
		"property.defaultLibrary": scheme.property,
		"property.declaration": scheme.property,
		"parameter": scheme.variable,
		"variable.readonly": scheme.variable,
		"variable.declaration": scheme.variable,
		"variable.local": scheme.variable,
		"type.defaultLibrary": scheme.variable,
	}
	return tokens
}

const semanticItalic = (colorSchemes, schemeName) => {
	const scheme = colorSchemes[schemeName]
	const tokens = {
		"namespace": {
			foreground: scheme.number,
			fontStyle: "italic",
		},
		"macro": {
			foreground: scheme.function,
			fontStyle: "italic",
		},
		"event": {
			foreground: scheme.function,
			fontStyle: "italic",
		},
		"parameter": {
			foreground: scheme.variable,
			fontStyle: "italic",
		},
		"class.defaultLibrary": {
			foreground: scheme.class,
			fontStyle: "italic",
		},
		"class": {
			foreground: scheme.class,
			fontStyle: "italic",
		},
		"class.readonly": {
			foreground: scheme.class,
			fontStyle: "italic",
		},
		"class.declaration": {
			foreground: scheme.class,
			fontStyle: "italic",
		},
		"interface": {
			foreground: scheme.class,
			fontStyle: "italic",
		},
		"struct": {
			foreground: scheme.class,
			fontStyle: "italic",
		},
	}
	return tokens
}

module.exports = {
	semanticTokens,
	semanticItalic,
}