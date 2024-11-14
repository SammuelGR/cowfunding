import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	plugins: [nextui()],
	theme: {
		extend: {},
	},
};
export default config;
