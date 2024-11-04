import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'no-console': 'warn',
			'import/no-unresolved': 'error',
			'import/no-extraneous-dependencies': 'error',
			'import/no-duplicates': 'error',
			'import/order': [
				'error',
				{
					'newlines-between': 'always',
					groups: ['builtin', 'external', 'internal'],
					pathGroups: [
						{
							pattern: '@/**',
							group: 'internal',
							position: 'before',
						},
					],
					pathGroupsExcludedImportTypes: ['@babel/**'],
					'newlines-between': 'always',
				},
			],
		},
	},
]
