import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Served from /global-access-protocol/lite-paper on www.tacoalition.org via Next.js rewrite.
  // Vite emits asset paths under this prefix; the vercel.json rewrite makes them resolve
  // on this domain too, so gap.tacoalition.org keeps working.
  base: '/global-access-protocol/lite-paper/',
  plugins: [react(), tailwindcss()],
})
