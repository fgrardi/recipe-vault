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
			indent: ["error", "tab"], // Enforces tab indentation in ESLint
			quotes: ["error", "double"], // Enforces double quotes in ESLint
			"no-console": "warn", // Warns about console.log() in ESLint
			"no-unused-vars": "warn", // Warns about unused variables in ESLint
		},
	},
];

export default eslintConfig;
