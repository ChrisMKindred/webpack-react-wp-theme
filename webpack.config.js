const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://testing.dev/',
      files: [
        {
            match: [
                '**/*.php'
            ],
            fn: function(event, file) {
                if (event === "change") {
                    const bs = require('browser-sync').get('bs-webpack-plugin');
                    bs.reload();
                }
            }
        }
      ]
    })
  ]
};