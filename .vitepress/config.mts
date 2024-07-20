import { defineConfigWithTheme } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: 'Theo-Messi',
  lang: 'zh-CN',
  description: '',
  appearance: 'force-dark',
  metaChunk: true,
  cleanUrls: true,
  sitemap: { hostname: 'https://www.theovan.cn' },
  head: [['link', { rel: 'icon', href: 'https://i.theovan.cn/avatar.png' }]],
  themeConfig: {
    logo: 'https://i.theovan.cn/avatar.png',
    siteTitle: false
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(new URL('./theme/components/HomeFooter.vue', import.meta.url))
        }
      ]
    }
  }
})
