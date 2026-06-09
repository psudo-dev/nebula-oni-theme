import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
	{
		ignores: ["out/**", "dist/**", "node_modules/**", "**/*.d.ts"],
	},
	{
		files: ["**/*.ts"],
		languageOptions: {
			parser: tsparser,
			ecmaVersion: "latest",
			sourceType: "module",
		},
		plugins: {
			"@typescript-eslint": { rules: tseslint.rules },
		},
		rules: {
			"curly": "warn",
			"eqeqeq": "warn",
			"no-throw-literal": "warn",
			"semi": "off",
			"@typescript-eslint/semi": "off",
			"@typescript-eslint/naming-convention": "off",
		},
	},
];
