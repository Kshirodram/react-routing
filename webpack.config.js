var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const entryfiles = ['./src/index.js'];
glob.sync('./src/**/*.less').map(function(file) {
  entryfiles.push(file);
});

module.exports = {
  entry: entryfiles,
  output: { path: `${__dirname}/dist`, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /dist/],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
            // activate source maps via loader query
            'css?sourceMap!' +
            'less?sourceMap'
        )
      }
    ]
  },
  plugins: [
    // extract inline css into separate 'styles.css'
    new ExtractTextPlugin('bundle.css')
  ]
};
