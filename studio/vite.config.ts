import { defineConfig } from 'vite'

// This sets the asset base path so all built assets reference /studio/...
// Without this, index.html references /static/x.js which returns 404
// because assets are actually served from /studio/static/x.js
export default defineConfig({
  base: '/studio/',
})
