const path = require('path')
const vuxLoader = require('vux-loader')
module.exports = {

  head: {
    title: 'vert-u',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'vert project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  loading: {color: '#888'},

  css: [
    'vux/src/styles/reset.less',
    'vux/src/styles/1px.less',
    "~/assets/css/font/icon.css",
    "~/assets/css/font/app.css",
    "~/assets/css/font/iconfont.css",
    "~/assets/css/common.css",
    "~/assets/css/vert.css"
  ],

  plugins: [
    {
      src: '~/plugins/vux-plugins',
      ssr: false
    },
    {
      src: '~/plugins/vux-components',
      ssr: true
    },
    {
      src: '~/plugins/iconfont',
      ssr: false
    }
  ],

  build: {

    // 防止 axios 打包多次
    vendor: ['axios', '~/plugins/vux-plugins', '~/plugins/vux-components', '~/plugins/iconfont'],

    extend(config) {
      const configs = vuxLoader.merge(config, {
        options: {
          ssr: true
        },
        plugins: ['vux-ui', {
          name: 'less-theme',
          path: path.join(__dirname, './assets/less/theme.less')
        }]
      })
      return configs
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/api',
      {
        target: 'http://zhonghemeinong.sdongpo.com',
        pathRewrite: {'^/api': '/'}
      }
    ]
  ],
  render: {
    bundleRenderer: {
      cache: require('lru-cache')({
        max: 1000,
        maxAge: 1000 * 60 * 60 * 48
      })
    }
  }
};
