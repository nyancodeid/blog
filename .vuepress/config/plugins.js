const plugins = [
  'code-switcher',
  'vuepress-plugin-nprogress',
  'reading-progress',
  'vuepress-plugin-reading-time',
  ['minimal-analytics', {
    ga: 'UA-79152971-1'
  }],
  [
    'vuepress-plugin-medium-zoom', {
      selector: '.content__default img:not(.no-zoom)'
    }
  ],
  [
    'seo',
    {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: ($page) => $page.frontmatter.author || "Ryan Aunur Rassyid",
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
          siteTitle,
          title,
          description,
          tags,
          twitterCard,
          type,
          url,
          image,
          publishedAt,
          modifiedAt,
        } = context

        const author = $page.frontmatter.author || "Ryan Aunur Rassyid";

        add('og:image:alt', $page.title, 'property')
        add('og:image:width', '450', 'property')
        add('author', author, 'property')
        add('article:author', author, 'property')
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
]

if (process.env.NODE_ENV === "production") {
  plugins.push([ 'sitemap', {
    hostname: 'https://blog.nyandev.id'
  }])
  plugins.push(['feed', {
    canonical_base: 'https://blog.nyandev.id/'
  }])
}

module.exports = plugins