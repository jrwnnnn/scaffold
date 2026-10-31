import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
		plugins: { js },
		extends: ["js/recommended"],
		languageOptions: { globals: globals.browser },
	},
	{ ignores: [".astro/**", "dist/**", "node_modules/**", ".wrangler/**"] },
	tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
]);
