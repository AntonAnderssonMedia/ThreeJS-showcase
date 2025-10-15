import { defineConfig } from 'vite';

const isVercel = !!process.env.VERCEL     // Vercel sets this env var
const repoBase = '/your-repo-name/'       // used only for GitHub Pages

export default defineConfig({
  base: '/ThreeJS-showcase/',  // exact repo name
});
