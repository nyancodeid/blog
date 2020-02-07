module.exports = {
  title: 'NyanDev Blog',
  description: 'Just playing around with Javascript',
  head: [
    ['link', { rel: "icon", type: "image/x-icon", href: "https://cdn.statically.io/favicon/blog.nyandev.id?cache=31556952"}],
    [ 'script', { src: "https://cdn.statically.io/gh/aFarkas/lazysizes/gh-pages/lazysizes.min.js", async: '' } ]
  ],
  themeConfig: {
    domain: 'https://blog.nyandev.id',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Javascript',
        items: [
          { text: 'Javascript Category', link: '/javascript/' },
          { text: 'Preact Category', link: '/preact/' },
          { text: 'Series: Belajar Preact', link: '/preact/belajar-preact/' }
        ]
      },
      {
        text: 'Others',
        items: [
          { text: 'Tips Category', link: '/tips/' },
          { text: 'Informasi Category', link: '/informasi/' }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Javascript', // required
        path: '/javascript', // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [
          '/preact/',
          '/preact/belajar-preact/'
        ]
      },
      {
        title: 'Tips', // required
        path: '/tips', // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [
          '/tips/meta-data-extract',
          '/tips/wifi-id-not-redirected'
        ]
      },
      {
        title: 'Informasi', // required
        path: '/informasi', // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [
          '/informasi/belajar-finansial-literasi'
        ]
      }
    ],
    repo: 'nyancodeid/blog',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    smoothScroll: false
  },
  extendMarkdown: md => {
    // use more markdown-it plugins!
    md.use(require('markdown-it-mark'))
  },
  plugins: [
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