import pkg from './package'

export default {
  srcDir: 'app/',
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/mixins/validation.js',
    './plugins/axios.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      '~/assets/sass/abstracts/_variables.scss',
      '~/assets/sass/abstracts/_mixins.scss',
      '~/assets/sass/abstracts/_functions.scss',
      '~/assets/sass/base/_base.scss',
      '~/assets/sass/base/_animation.scss',
      '~/assets/sass/base/_typographies.scss',
      '~/assets/sass/base/_utilities.scss',
    ]
  },
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'http://localhost:8000/api'
    //baseURL: 'https://assign1-laravel.herokuapp.com/api'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
