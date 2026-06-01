import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/extension/main.ts"],
	format: ["cjs"],
	external: ["vscode"],
	outDir: "dist",
	tsconfig: "tsconfig.json",
});
