import typography from '@tailwindcss/typography'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss({
      plugins: [typography()],
    }),
  ],
})
