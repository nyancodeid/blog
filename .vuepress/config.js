const headers = require('./config/head')
const plugins = require('./config/plugins')

module.exports = {
  title: 'NyanDev Blog',
  description: "Let's playing around with Javascript and his friends",
  head: headers,
  themeConfig: {
    domain: 'https://blog.nyan.my.id',
    displayAllHeaders: true,
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Javascript',
        items: [{
            text: 'Javascript',
            link: '/javascript/'
          },
          {
            text: 'Preact',
            link: '/preact/'
          },
          {
            text: 'Series: Belajar Preact',
            link: '/preact/belajar-preact/'
          }
        ]
      },
      {
        text: 'Devops',
        link: '/devops/'
      },
      {
        text: 'Others',
        items: [{
            text: 'Tips',
            link: '/tips/'
          },
          {
            text: 'Informasi',
            link: '/informasi/'
          },
          {
            text: 'Bookmark',
            link: '/bookmark/'
          }
        ]
      }
    ],
    repo: 'nyancodeid/blog',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    smoothScroll: false,
    lastUpdated: 'Last Updated',
    feed: {
      canonical_base: 'https://blog.nyan.my.id/'
    }
  },
  extendMarkdown: md => {
    // use more markdown-it plugins!
    md.use(require('markdown-it-mark'))
  },
  plugins: plugins,
}
