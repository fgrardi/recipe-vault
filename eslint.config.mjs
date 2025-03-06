import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	prettierConfig,
	{
		plugins: { prettier },
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
		},
	},
];

export default eslintConfig;
