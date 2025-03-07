import { FlatCompat } from "@eslint/eslintrc";
import prettierConfig from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	prettierConfig,
	{
		plugins: {
			prettier,
			"unused-imports": unusedImports,
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"prettier/prettier": ["warn", { useTabs: true, tabWidth: 4 }],
			indent: ["error", "tab"],
			quotes: ["error", "double"],
			"no-console": "warn",
			"padding-line-between-statements": [
				"error",
				{ blankLine: "always", prev: "block-like", next: "*" },
				{ blankLine: "always", prev: "*", next: "block-like" },
				{ blankLine: "always", prev: "*", next: "export" },
			],
			// remove unused imports
			"no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],
			// sorting imports
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
			"import/first": "error",
			"import/newline-after-import": "error",
			"import/no-duplicates": "error",
		},
	},
];

export default eslintConfig;
