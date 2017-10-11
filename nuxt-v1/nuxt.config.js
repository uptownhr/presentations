module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-v1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',
        href: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    ['@nuxtjs/localtunnel', { subdomain: 'vuela' }]
  ],

  manifest: {
    name: 'VueLA Demo',
    short_name: 'vuelademo',
    lang: 'en'
  },

  axios: {
    baseURL: 'http://localhost:3000/api',
    browserBaseURL: '/api'
  },

  proxy: {
    '/api': {
      target: 'https://hacker-news.firebaseio.com/v0/',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },

  plugins: [
    '~/plugins/directives.js',
    '~/plugins/global-components.js'
  ],

  css: ['~/assets/main.scss'],

  router: {
    linkActiveClass: 'is-active'
  }
}
