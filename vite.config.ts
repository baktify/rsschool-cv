import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const noCrossOrigin = () => {
  return {
    name: 'no-crossorigin',
    transformIndexHtml(html) {
      return html.replace(/crossorigin /g, '')
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [tailwindcss(), noCrossOrigin()],
})
