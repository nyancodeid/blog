const fs = require('fs')
const path = require('path')

function getCategoryPost (dir, title) {
  const dirs = path.join(__dirname, `../${dir}`)
  let files = []

  try {
    const _files = fs.readdirSync(dirs, { withFileTypes: true })

    files = _files
      .filter(file => !file.name.includes('README'))
      .filter(file => !file.isDirectory())
      .map(file => file.name)

    return [ dir, `${title} (${files.length})` ]
  } catch (err) {
    console.error(err)
    return [ dir, title ]
  }
}

module.exports = {
  title: 'NyanDev Blog',
  description: "Let's playing around with Javascript and his friends",
  head: [
    ['link', { rel: "icon", href: "/icons/favicon.ico"}],
    ['link', { rel: "icon", type: "image/png", sizes: "192x192", href: "/icons/android-icon-192x192.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/android-icon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "96x96", href: "/icons/android-icon-96x96.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/android-icon-16x16.png"}],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' }],
    ['link', { rel: "preconnect", href: "https://cdn.statically.io" }],
    ['link', { rel: "preconnect", href: "https://telegra.ph" }],
    [ 'script', { src: "https://cdn.statically.io/gh/aFarkas/lazysizes/gh-pages/lazysizes.min.js", async: '' } ]
  ],
  themeConfig: {
    domain: 'https://blog.nyandev.id',
    displayAllHeaders: true,
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Javascript',
        items: [
          { text: 'Javascript', link: '/javascript/' },
          { text: 'Preact', link: '/preact/' },
          { text: 'Series: Belajar Preact', link: '/preact/belajar-preact/' }
        ]
      },
      {
        text: 'Devops',
        link: '/devops/'
      },
      {
        text: 'Others',
        items: [
          { text: 'Tips', link: '/tips/' },
          { text: 'Informasi', link: '/informasi/' },
          { text: 'Bookmark', link: '/bookmark/' }
        ]
      }
    ],
    repo: 'nyancodeid/blog',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    smoothScroll: false,
    lastUpdated: 'Last Updated',
    feed: {
      canonical_base: 'https://blog.nyandev.id/'
    }
  },
  extendMarkdown: md => {
    // use more markdown-it plugins!
    md.use(require('markdown-it-mark'))
  },
  plugins: [
    'code-switcher',
    'vuepress-plugin-nprogress',
    'reading-progress',
    'vuepress-plugin-reading-time',
    [ 'feed', {
      canonical_base: 'https://blog.nyandev.id/'
    } ],
    ['minimal-analytics', {ga: 'UA-79152971-1'}],
    [
      'vuepress-plugin-medium-zoom', {
        selector: '.content__default img:not(.no-zoom)'
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://blog.nyandev.id'
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      'seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.published && new Date($page.frontmatter.published),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
        customMeta: (add, context) => {

          const {
              $site, // Site configs provided by Vuepress
              $page, // Page configs provided by Vuepress
              siteTitle, title, description, author, tags, 
              twitterCard, type, url, image, publishedAt, modifiedAt,
          } = context
  
          add('og:image:alt', title, 'property')
          add('og:image:width', '450', 'property')
          add('article:author', 'https://facebook.com/ryan.hac', 'property')
      },
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'preview',
        before: link => `<a href="${link}" target="_blank" class="link-preview">`,
        after: '</a>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'preview-content',
        before: title => `<div class="link-preview--content"><p class="title">${title}</p>`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'preview-thumbnail',
        before: (link) => `<div class="link-preview--thumbnail" style="background-image: url(${link});">`,
        after: '</div>',
      },
    ]
  ],
}