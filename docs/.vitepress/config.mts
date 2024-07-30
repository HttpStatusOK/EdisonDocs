import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/logo/logo.webp' }]],
  title: "Edison 知识库",
  description: "A EdisonDocs Site",
  themeConfig: {
    returnToTopLabel: "回到顶部",
    editLink: {
      pattern: 'https://github.com/HttpStatusOK/EdisonDocs/edit/main/docs/:path',
      text: '编辑此页'
    },
    lastUpdated: {
      text: '最近更新于',
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo/logo.webp',
    search: {
      provider: 'local'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/post/remark/开发和应用场景', activeMatch: '/remark/' },
      { text: '区块链', link: '/post/chain/$DUNDUN', activeMatch: '/chain/' },
      // { text: '生活', link: '/post/life/炒菜类', activeMatch: '/life/' }
    ],


    sidebar: {
      "/post/remark/": [
        {
          text: '笔记',
          items: [
            { text: '个人博客的技术选型', link: '/post/remark/个人博客的技术选型' },
            { text: '开发和应用场景', link: '/post/remark/开发和应用场景' },
            { text: '常用软件命令行', link: '/post/remark/常用软件命令行' }
          ]
        }
      ],
      "/post/chain/": [
        {
          text: 'Token',
          items: [
            { text: '$DUNDUN', link: '/post/chain/$DUNDUN' },
          ]
        }
      ],
      "/post/life/": [
        {
          text: '食谱',
          items: [
            { text: '炒菜类', link: '/post/life/炒菜类' },
            { text: '蒸煮类', link: '/post/life/蒸煮类' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Powered by VitePress © 2024 Edison. All rights reserved.',
    }
  }
})
