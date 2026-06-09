import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/extension/web.ts"],
	format: ["esm"],
	external: ["vscode"],
	outDir: "dist",
	tsconfig: "tsconfig.web.json",
	outExtension: () => ({ js: ".js" }),
});
