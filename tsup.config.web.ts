import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/web/extension.ts"],
	format: ["esm"],
	external: ["vscode"],
	outDir: "dist/web",
	tsconfig: "tsconfig.web.json",
	outExtension: () => ({ js: ".js" }),
});
