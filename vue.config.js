module.exports = {
  css: {
    // Don't produce a separate css file
    extract: false,
    loaderOptions: {
      css: {
      },
      postcss: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [
            require('./src/remove-theme-rules')
          ]
        }
      },
      sass: {
        additionalData: '$NODE_ENV: ' + process.env.NODE_ENV + ';',
      }
    }
  },

  chainWebpack: config => {
    // Don't split vendor and app js
    config.optimization.splitChunks(false)
    // Inline SVGs
    config.module
      .rule('vue')
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader')
      .options({})
  },
  configureWebpack: {
    output: {
      // Don't place chunks in a js folder
      chunkFilename: '[name].js?id=[hash]',
      filename: 'widget-v2.js?id=[hash]'
    },
  },
  // Don't produce a sourcemap
  productionSourceMap: false,
  // Use one static name
  //filenameHashing: false

  pwa: {
    name: "Climate Clock",
    themeColor: "#008040",
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      start_url: "./index.html",
      display: "standalone",
      iconPaths: {
        favicon32: 'img/icons/favicon-32x32.png',
        favicon16: 'img/icons/favicon-16x16.png',
        appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
        maskIcon: 'img/icons/safari-pinned-tab.svg',
        msTileImage: 'img/icons/msapplication-icon-144x144.png'
      },
      "icons": [
        {
          "src": "./img/icons/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "./img/icons/android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        },
        {
          "src": "./img/icons/android-chrome-maskable-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "./img/icons/android-chrome-maskable-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "./img/icons/apple-touch-icon-60x60.png",
          "sizes": "60x60",
          "type": "image/png"
        },
        {
          "src": "./img/icons/apple-touch-icon-76x76.png",
          "sizes": "76x76",
          "type": "image/png"
        },
        {
          "src": "./img/icons/apple-touch-icon-120x120.png",
          "sizes": "120x120",
          "type": "image/png"
        },
        {
          "src": "./img/icons/apple-touch-icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png"
        },
        {
          "src": "./img/icons/apple-touch-icon-180x180.png",
          "sizes": "180x180",
          "type": "image/png"
        },
        {
          "src": "./img/icons/apple-touch-icon.png",
          "sizes": "180x180",
          "type": "image/png"
        },
        {
          "src": "./img/icons/favicon-16x16.png",
          "sizes": "16x16",
          "type": "image/png"
        },
        {
          "src": "./img/icons/favicon-32x32.png",
          "sizes": "32x32",
          "type": "image/png"
        },
        {
          "src": "./img/icons/msapplication-icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "./img/icons/mstile-150x150.png",
          "sizes": "150x150",
          "type": "image/png"
        }
      ]
    },
  },
}
