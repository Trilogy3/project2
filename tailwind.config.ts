import { type Config } from 'tailwindcss'
import aspectRatio from '@tailwindcss/aspect-ratio'
import containerQueries from '@tailwindcss/container-queries'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import flowbitePlugin from 'flowbite/plugin'

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}', 
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {}
  },
  plugins: [typography, forms, containerQueries, aspectRatio, flowbitePlugin]
} satisfies Config
