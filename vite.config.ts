import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetGoogleFonts from '@unocss/preset-web-fonts'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		Unocss({
			presets: [
				presetGoogleFonts({
					provider: 'google',
					fonts: {
						lato: 'Lato',
						roboto: 'Roboto',
						ubuntu: 'Ubuntu',
						inter: 'Inter',
					},
				}),
				presetUno(),
			],
		}),
	],
	resolve: {
		alias: {
			'~': resolve(__dirname, './src'),
		},
	},
})
