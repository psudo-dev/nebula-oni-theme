import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/extension.ts"],
	format: ["cjs"],
	external: ["vscode"],
	outDir: "dist",
	tsconfig: "tsconfig.json",
});
