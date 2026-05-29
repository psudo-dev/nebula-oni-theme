import type * as vscode from "vscode";

export function activate(_context: vscode.ExtensionContext): void {
	// Web extension — theme files are loaded statically via contributes.themes
	// No dynamic theme generation or menu in this environment
}

export function deactivate(): void {}
