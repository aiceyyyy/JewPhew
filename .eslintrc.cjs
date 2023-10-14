module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'plugin:import/typescript',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		"@typescript-eslint/triple-slash-reference": "off"
	},
}