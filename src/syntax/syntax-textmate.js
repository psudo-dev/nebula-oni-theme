"use strict"

const textmateTokens = (colorSchemes, schemeName) => {
	const scheme = colorSchemes[schemeName]
	return [{
			scope: ["text", "source"],
			settings: {
				foreground: scheme.variable,
			},
		},
		{
			scope: ["emphasis"],
			settings: {
				fontStyle: "italic",
			},
		},
		{
			scope: ["strong"],
			settings: {
				fontStyle: "bold",
			},
		},
		{
			scope: ["invalid"],
			settings: {
				foreground: scheme.invalid,
				fontStyle: "italic",
			},
		},
		{
			scope: ["invalid.deprecated"],
			settings: {
				foreground: scheme.deprecated,
				fontStyle: "underline italic",
			},
		},
		{
			scope: ["invalid.illegal"],
			settings: {
				foreground: scheme.invalid,
				fontStyle: "underline italic",
			},
		},
		{
			scope: ["variable.language.this", "variable.language.self"],
			settings: {
				foreground: scheme.class,
			},
		},
		{
			scope: ["keyword", "keyword.operator"],
			settings: {
				foreground: scheme.punctuation,
			},
		},
		{
			scope: [
				"keyword.control",
				"punctuation.definition.keyword",
				"keyword.other.important",
			],
			settings: {
				foreground: scheme.storageType,
			},
		},
		{
			scope: ["keyword.other.unit"],
			settings: {
				foreground: scheme.number,
			},
		},
		{
			scope: [
				"keyword.other.special-method",
				"entity.name.other.preprocessor.macro",
				"variable.other.event",
			],
			settings: {
				foreground: scheme.function,
			},
		},
		{
			scope: ["constant.character"],
			settings: {
				foreground: scheme.punctuation,
			},
		},
		{
			scope: ["constant.character.escape"],
			settings: {
				foreground: scheme.property,
			},
		},
		{
			scope: ["entity.name.label"],
			settings: {
				foreground: scheme.variable,
			},
		},
		{
			scope: [
				"variable.parameter",
				"variable.language.arguments",
				"variable.other.object",
				"string.quoted.template variable.other.readwrite"
				// ? ^ for variables inside template strings `${variable}`
			],
			settings: {
				foreground: scheme.variable,
			},
		},
		{
			scope: ["support.type"],
			settings: {
				foreground: scheme.variable,
			},
		},
		{
			scope: ["keyword.operator.new", "keyword.control.new"],
			settings: {
				foreground: scheme.storageType,
			},
		},
		{
			name: "NAMESPACE, PRIMITIVE TYPES AND ENUM MEMBER",
			scope: [
				"entity.name.section",
				"entity.name.namespace",
				"entity.name.type.module",
				"support.type.primitive",
				"variable.other.enummember",
			],
			settings: {
				foreground: scheme.number,
			},
		},
		{
			scope: [
				"keyword.control.default",
				"keyword.control.export",
				"keyword.control.from",
				"keyword.control.import",
				"keyword.control.module",
				"support.type.object.module",
			],
			settings: {
				foreground: scheme.number,
			},
		},
		{
			name: "CLASSES AND TYPES",
			scope: [
				"support.class",
				"entity.name.type.class",
				"entity.name.class",
				"variable.other.class",
				"entity.name.type.enum",
				"entity.name.type.interface",
				"entity.name.type",
				"entity.other.inherited-class",
				"entity.name.scope-resolution",
				"entity.other.attribute",
				"keyword.primitive-datatypes.swift",
				"keyword.type.cs",
				"meta.protocol-list.objc",
				"meta.return-type.objc",
				"meta.return-type",
				"source.go storage.type",
				"source.groovy storage.type",
				"source.java storage.type",
				"source.powershell entity.other.attribute-name",
				"storage.class.std.rust",
				"storage.type.annotation.groovy",
				"storage.type.annotation.java",
				"storage.type.attribute.swift",
				"storage.type.boolean.go",
				"storage.type.byte.go",
				"storage.type.c",
				"storage.type.core.rust",
				"storage.type.cs",
				"storage.type.cs",
				"storage.type.error.go",
				"storage.type.generic.cs",
				"storage.type.generic.groovy",
				"storage.type.generic.java",
				"storage.type.groovy",
				"storage.type.groovy",
				"storage.type.haskell",
				"storage.type.java",
				"storage.type.modifier.cs",
				"storage.type.numeric.go",
				"storage.type.objc",
				"storage.type.object.array.groovy",
				"storage.type.object.array.java",
				"storage.type.ocaml",
				"storage.type.parameters.groovy",
				"storage.type.php",
				"storage.type.primitive.array.groovy",
				"storage.type.primitive.array.java",
				"storage.type.primitive.groovy",
				"storage.type.primitive.java",
				"storage.type.rune.go",
				"storage.type.string.go",
				"storage.type.struct",
				"storage.type.token.java",
				"storage.type.uintptr.go",
				"storage.type.variable.cs",
			],
			settings: {
				foreground: scheme.class,
			},
		},
		{
			name: "FUNCTIONS",
			scope: [
				"entity.name.function.member",
				"support.function",
				"entity.name.function.method",
				"entity.name.function.accessor",
				"entity.name.function",
				"support.constant.handlebars",
				"source.powershell variable.other.member",
				"entity.name.operator.custom-literal",
				"meta.method-call.java meta.method",
				"meta.method.groovy",
				"support.function.any-method",
				"keyword.operator.function.infix",
				"keyword.control.require",
			],
			settings: {
				foreground: scheme.function,
			},
		},
		{
			name: "PROPERTY",
			scope: [
				"support.type.vendored.property-name",
				"support.type.property-name",
				"variable.css",
				"variable.scss",
				"variable.other.less",
				"source.coffee.embedded",
				"variable.other.object.property",
				"variable.other.property",
				"variable.other.constant.property",
			],
			settings: {
				foreground: scheme.property,
			},
		},
		{
			name: "STRING",
			scope: [
				"string",
				"meta.embedded.assembly",
				"string.tag",
				"string.value",
			],
			settings: {
				foreground: scheme.string,
			},
		},
		{
			scope: ["keyword.other"],
			settings: {
				foreground: scheme.string,
			},
		},
		{
			name: "STORAGE",
			scope: [
				"meta.implementation storage.type.objc",
				"meta.interface-or-protocol storage.type.objc",
				"source.groovy storage.type.def",
				"storage.type.accessor",
				"storage.type.class.jsdoc",
				"storage.type.property",
				"storage",
			],
			settings: {
				foreground: scheme.punctuation,
			},
		},
		{
			scope: [
				"storage.type",
				"storage.modifier",
				"storage.control",
				"punctuation.flowtype",
				"meta.object.flowtype",
			],
			settings: {
				foreground: scheme.storageType,
			},
		},
		{
			name: "STORAGETYPE, FLOW, SPECIAL KEYWORDS",
			scope: [
				"entity.name.operator",
				"keyword.control.module.reference",
				"keyword.operator.alignas",
				"keyword.operator.alignof",
				"keyword.operator.cast",
				"keyword.operator.delete",
				"keyword.operator.expression",
				"keyword.operator.in",
				"keyword.operator.instanceof",
				"keyword.operator.logical.python",
				"keyword.operator.noexcept",
				"keyword.operator.of",
				"keyword.operator.sizeof",
				"keyword.operator.typeid",
				"keyword.operator.typeof",
				"keyword.operator.void",
				"keyword.operator.wordlike",
				"keyword.other.operator",
				"keyword.other.using",
				"source.cpp keyword.operator.new",
			],
			settings: {
				foreground: scheme.storageType,
			},
		},
		{
			name: "CONSTANT",
			scope: [
				"variable.other.constant",
				"support.function.magic",
				"variable.other.predefined",
				"constant.numeric",
				"keyword.operator.plus.exponent",
				"keyword.operator.minus.exponent",
				"constant",
				"constant.variable",
				"constant.language",
				"support.constant",
			],
			settings: {
				foreground: scheme.number,
			},
		},
		{
			name: "VARIABLE LANGUAGE",
			scope: [
				"keyword.expressions-and-types.swift",
				"variable.language",
				"variable.language punctuation.definition.variable.php",
				"variable.other.readwrite.instance.ruby",
				"variable.parameter.function.language.special",
			],
			settings: {
				foreground: scheme.punctuation,
			},
		},
		{
			scope: [
				"punctuation.section.embedded",
				"meta.string-contents.quoted.double punctuation.definition.variable",
				"punctuation.definition.interpolation.begin",
				"punctuation.definition.interpolation.end",
				"punctuation.definition.template-expression.begin",
				"punctuation.definition.template-expression.end",
				"punctuation.section.embedded.begin",
				"punctuation.section.embedded.coffee",
				"punctuation.section.embedded.end",
				"punctuation.section.embedded.end source.php",
				"punctuation.section.embedded.end source.ruby",
				"punctuation.definition.variable.makefile",
			],
			settings: {
				foreground: scheme.number,
			},
		},
		{
			scope: [
				"keyword.operator.decorator",
				"punctuation.decorator",
				"entity.name.class.decorator",
				"variable.other.readwrite.decorator",
			],
			settings: {
				foreground: scheme.function,
			},
		},
		{
			scope: [
				"constant.other.color",
				"constant.other.symbol",
				"punctuation.definition.block.tag",
				"punctuation.accessor",
				"keyword.operator.accessor",
				"meta.attribute.href.html",
				"punctuation.definition.tag.jsx",
				"punctuation.definition.tag.tsx",
				"punctuation.definition.typeparameters",
				"punctuation.separator",
				"support.class.component",
			],
			settings: {
				foreground: scheme.punctuation,
			},
		},
		{
			scope: ["support.type.object.console"],
			settings: {
				foreground: scheme.class,
			},
		},
		{
			scope: ["support.type.object.dom"],
			settings: {
				foreground: scheme.punctuation,
			},
		},
		{
			scope: ["variable.interpolation"],
			settings: {
				foreground: scheme.invalid,
			},
		},
		{
			scope: ["meta.definition.variable.name"],
			settings: {
				foreground: scheme.number,
			},
		},
		{
			scope: ["meta.object-literal.key"],
			settings: {
				foreground: scheme.property,
			},
		},
		{
			scope: [
				"JSXAttrs",
				"JSXNested",
				"support.type.property-name.css",
				"support.type.property-name.scss",
			],
			settings: {
				foreground: scheme.variable,
			},
		},
		{
			scope: [
				"meta.type.cast.expr",
				"meta.type.new.expr",
				"support.constant.math",
				"support.constant.dom",
			],
			settings: {
				foreground: scheme.class,
			},
		},
		{
			scope: [
				"comment keyword.codetag.notation",
				"comment.block.documentation keyword",
				"comment.block.documentation storage.type.class",
			],
			settings: {
				foreground: scheme.punctuation,
			},
		},
		{
			scope: [
				"comment.block.documentation entity.name.type punctuation.definition.bracket",
				"comment.block.documentation entity.name.type",
			],
			settings: {
				foreground: scheme.class,
				fontStyle: "italic",
			},
		},
		{
			scope: ["comment.block.documentation variable"],
			settings: {
				foreground: scheme.variable,
				fontStyle: "italic",
			},
		},
		{
			name: "BRACKETS, BRACES, PARENTHESES",
			scope: [
				"punctuation.separator.parameter",
				"punctuation.terminator.statement",
				"meta.array-binding-pattern-variable",
				"keyword.operator.other.powershell",
				"keyword.other.statement-separator.powershell",
				"meta.brace.curly",
				"meta.brace.round",
				"meta.brace.square",
				"punctuation.definition.arguments.begin",
				"punctuation.definition.arguments.end",
				"punctuation.definition.entity.begin",
				"punctuation.definition.entity.end",
				"punctuation.definition.tag",
				"punctuation.definition.type.begin",
				"punctuation.definition.type.end",
				"punctuation.section.scope.begin",
				"punctuation.section.scope.end",
				"storage.type.generic.java",
				"string.template meta.brace",
				"string.template punctuation.accessor",
			],
			settings: {
				foreground: scheme.variable,
			},
		},
		{
			scope: [
				"punctuation.definition.entity",
				"string.unquoted.heredoc punctuation.definition.string",
				"punctuation.separator.annotation",
				"punctuation.colon.graphql",
				"punctuation.definition.entity.other.inherited-class",
				"punctuation.function.swift",
				"meta.object-binding-pattern-variable punctuation.destructuring",
				"entity.other.attribute-name.placeholder punctuation",
				"constant.other.symbol.hashkey punctuation.definition.constant.ruby",
				"entity.other.attribute-name.pseudo-class punctuation",
				"punctuation.separator.dictionary.key-value",
				"punctuation.separator.hash",
				"punctuation.separator.inheritance",
				"punctuation.separator.key-value.mapping.yaml",
				"punctuation.separator.namespace",
				"punctuation.separator.pointer-access",
				"punctuation.separator.slice",
			],
			settings: {
				foreground: scheme.punctuation,
			},
		},
		{
			scope: ["meta.embedded", "source.groovy.embedded"],
			settings: {
				foreground: scheme.variable,
			},
		},
		{
			scope: ["entity.name.tag"],
			settings: {
				foreground: scheme.property,
			},
		},
		{
			scope: ["entity.other.attribute-name"],
			settings: {
				foreground: scheme.number,
			},
		},
		{
			scope: ["entity.other.attribute-name.id"],
			settings: {
				foreground: scheme.function,
			},
		},
		{
			scope: [
				"entity.other.attribute-name.pseudo-element",
				"entity.other.attribute-name.pseudo-class",
				"entity.other.attribute-name.class",
				"entity.other.attribute-name.class.mixin",
				"entity.other.attribute-name.parent-selector",
				"entity.other.attribute-name.attribute",
				"meta.group.double.toml",
				"meta.group.toml",
				"support.other.chomping-indicator.yaml",
			],
			settings: {
				foreground: scheme.number,
			},
		},
		{
			scope: [
				"support.constant.font-name",
				"support.constant.media-type",
				"support.constant.media",
				"constant.other.color.rgb-value",
				"constant.other.rgb-value",
				"support.constant.color",
			],
			settings: {
				foreground: scheme.string,
			},
		},
		{
			scope: ["support.constant.property-value"],
			settings: {
				foreground: scheme.variable,
			},
		},
		{
			scope: ["punctuation.separator.key-value"],
			settings: {
				foreground: scheme.punctuation,
			},
		},
		{
			scope: ["punctuation.definition.constant"],
			settings: {
				foreground: scheme.number,
			},
		},
		{
			scope: [
				"meta.property-list punctuation.separator.key-value"],
			settings: {
				foreground: scheme.variable,
			},
		},
		{
			scope: ["meta.selector"],
			settings: {
				foreground: scheme.punctuation,
			},
		},
		{
			scope: ["header"],
			settings: {
				foreground: scheme.property,
			},
		},
		{
			scope: [
				"constant.other.object.key string.unquoted",
				"punctuation.quasi.element",
				"keyword.other.definition",
				"variable.language.prototype",
				"variable.other.jsdoc",
			],
			settings: {
				foreground: scheme.property,
			},
		},
		{
			scope: [
				"punctuation.definition.block.scalar.folded.yaml",
				"punctuation.definition.block.scalar.literal.yaml",
				"punctuation.definition.block.sequence.item.yaml",
			],
			settings: {
				foreground: scheme.storageType,
			},
		},
		{
			scope: ["meta.preprocessor",
				"entity.name.function.preprocessor"
			],
			settings: {
				foreground: scheme.function,
			},
		},
		{
			scope: ["meta.preprocessor.string"],
			settings: {
				foreground: scheme.string,
			},
		},
		{
			scope: ["meta.preprocessor.numeric"],
			settings: {
				foreground: scheme.number,
			},
		},
		{
			scope: ["meta.structure.dictionary.key.python"],
			settings: {
				foreground: scheme.property,
			},
		},
		{
			scope: ["meta.diff.header"],
			settings: {
				foreground: scheme.punctuation,
			},
		},
		{
			scope: [
				"meta.decorator variable.other.readwrite",
				"meta.decorator variable.other.property",
				"meta.decorator variable.other.object",
			],
			settings: {
				foreground: scheme.variable,
			},
		},
		{
			scope: [
				"entity.name.function.target.makefile",
				"entity.name.section.toml",
				"variable.other.key.toml",
			],
			settings: {
				foreground: scheme.property,
			},
		},
		{
			scope: ["constant.other.date", "constant.other.timestamp"],
			settings: {
				foreground: scheme.punctuation,
			},
		},
		{
			scope: [
				"entity.name.type.type-parameter",
				"meta.indexer.mapped type.declaration entity.name.type",
				"meta.type.parameters entity.name.type",
			],
			settings: {
				foreground: scheme.variable,
			},
		},
		{
			scope: [
				"punctuation.support.type.property-name.begin",
				"punctuation.support.type.property-name.end",
			],
			settings: {
				foreground: scheme.property,
			},
		},
		{
			scope: [
				"string.quoted.docstring.multi",
				"string.quoted.docstring.multi.python punctuation.definition.string.begin",
				"string.quoted.docstring.multi.python punctuation.definition.string.end",
				"string.quoted.docstring.multi.python constant.character.escape",
			],
			settings: {
				foreground: scheme.string,
			},
		},
		{
			scope: ["source.shell variable.other"],
			settings: {
				foreground: scheme.class,
			},
		},
		{
			scope: ["meta.scope.prerequisites.makefile"],
			settings: {
				foreground: scheme.string,
			},
		},
		{
			scope: ["support.function.git-rebase"],
			settings: {
				foreground: scheme.number,
			},
		},
		{
			scope: ["constant.sha.git-rebase"],
			settings: {
				foreground: scheme.number,
			},
		},
	]
}

const textmateItalic = [{
		name: "[CORRECTIONS] ITALIC",
		scope: [
			"constant.language.boolean",
			"entity.name.class",
			"entity.name.namespace",
			"entity.name.other.preprocessor.macro",
			"entity.name.type.class",
			"entity.name.type.interface",
			"entity.name.type.module",
			"entity.other.inherited-class",
			"keyword.operator.decorator",
			"storage.type.accessor",
			"storage.type.struct",
			"support.class",
			"support.type.primitive",
			"variable.language.self",
			"variable.language.super",
			"variable.language.this",
			"variable.language",
			"variable.other.class",
			"variable.other.event",
			"variable.parameter.function.language.special",
			"variable.parameter",
		],
		settings: {
			fontStyle: "italic",
		},
	},
	{
		name: "BOLD ITALIC",
		scope: ["keyword.control.new", "keyword.operator.new"],
		settings: {
			fontStyle: "bold italic",
		},
	},
]

module.exports = {
	textmateTokens,
	textmateItalic,
}
