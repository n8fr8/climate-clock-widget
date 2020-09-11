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
}
