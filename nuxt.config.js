const path = require('path')
const webpack = require("webpack");
export default {
  mode: 'universal',
 env: {
  api_key:"YOUR API KEY",
  delivery_token:"YOUR DELIVERY TOKEN",
  environment:"YOUR ENVIRONMENT NAME"
  },
  head: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://nuxtjs.org/favicon.ico"
      },
      { rel: "stylesheet", href: "/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/css/freelancer.min.css" },
      { rel: "stylesheet", href: "/css/style.css" },
      {
        rel: "stylesheet",
        href:
          "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'coral' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
 build: {
  vendor: ["lodash"],
  plugins: [
  new webpack.ProvidePlugin({
  "_": "lodash"
  })
  ]
  },
  // plugins: [ '~/plugins/bootstrap-vue.js'],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
