module.exports = {
  title: 'NyanDev Blog',
  description: 'Just playing around with Javascript',
  themeConfig: {
    domain: 'https://blog.nyandev.id',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Tips',
        link: '/tips/'
      },
      {
        text: 'Informasi',
        link: '/informasi/'
      },
      {
        text: 'External',
        link: 'https://google.com'
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
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  },
  plugins: [
    'vuepress-plugin-nprogress',
    'reading-progress',
    'vuepress-plugin-reading-time',
    'img-lazy',
    [
      'vuepress-plugin-medium-zoom', {
        selector: '.content__default img:not([src*="#ft-image"])'
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