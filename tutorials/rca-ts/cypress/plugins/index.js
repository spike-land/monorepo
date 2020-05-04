
const path = require('path')
const webpackPreprocessor = require('@cypress/webpack-preprocessor')
// const babelConfig = require('../../babel.config.js')
// const { initPlugin } = require('cypress-plugin-snapshots/plugin')

// should we just reuse root webpack config?
const webpackOptions = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins: [
            // allow lazy loaded components with dynamic "import(...)"
            // https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-class-properties',
            // https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs
            // loose ES6 modules allow us to dynamically mock imports during tests
            [
              '@babel/plugin-transform-modules-commonjs',
              {
                loose: true,
              },
            ]
          ],
        },
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: ['style-loader', 'css-loader'],
      },
      {
        // some of our examples import SVG
        test: /\.svg$/,
        loader: 'svg-url-loader',
      },
    ],
  },
}

const options = {
  // send in the options from your webpack.config.js, so it works the same
  // as your app's code
  webpackOptions,
  watchOptions: {},
}

module.exports = (on, config) => {
  on('file:preprocessor', webpackPreprocessor(options))

  // initPlugin(on, config)
  return config
}