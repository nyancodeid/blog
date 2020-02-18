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
  description: 'Just playing around with Javascript',
  head: [
    ['link', { rel: "icon", type: "image/x-icon", href: "/icons/favicon.ico"}],
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
    lastUpdated: 'Last Updated'
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