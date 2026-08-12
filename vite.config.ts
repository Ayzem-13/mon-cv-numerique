import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const PLACEHOLDER = '__SITE_URL__'

function resolveSiteUrl(): string {
  if (process.env.VITE_SITE_URL) return process.env.VITE_SITE_URL.replace(/\/$/, '')
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  return 'https://portfolio-axel-roubaud.vercel.app'
}

function siteUrl(): Plugin {
  const url = resolveSiteUrl()

  return {
    name: 'site-url',
    transformIndexHtml: (html) => html.replaceAll(PLACEHOLDER, url),
    writeBundle(options) {
      const dir = options.dir ?? 'dist'

      const robots = path.join(dir, 'robots.txt')
      if (fs.existsSync(robots)) {
        fs.writeFileSync(robots, fs.readFileSync(robots, 'utf8').replaceAll(PLACEHOLDER, url))
      }

      const today = new Date().toISOString().slice(0, 10)
      fs.writeFileSync(
        path.join(dir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${url}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrl()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',

    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          const pkg = id.split('node_modules/').pop() ?? ''
          if (pkg.startsWith('motion')) return 'motion'
          if (pkg.startsWith('react-github-calendar') || pkg.startsWith('react-activity-calendar'))
            return 'calendar'
        },
      },
    },
  },
})
