import { defineConfig } from 'vite'

const isVercel = !!process.env.VERCEL          // Vercel sets this env var at build time
const repoBase = '/ThreeJS-showcase/'          // GH Pages repo name

export default defineConfig({
  base: isVercel ? '/' : repoBase
})
