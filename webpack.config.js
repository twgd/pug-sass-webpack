const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  return {
    mode: env.production ? 'production' : 'development',
    devServer: {
      watchFiles: ['src/**/*.pug'],
      hot: true,
    },
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
      filename: '[name].[contenthash:6].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      assetModuleFilename: 'assets/[hash][ext][query]',
    },
    devtool: env.production ? 'source-map' : 'inline-source-map',
    resolveLoader: {
      alias: {
        'pug-loader': '@webdiscus/pug-loader',
      },
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: ['pug-loader'],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset',
          generator: {
            filename: 'images/[hash][ext][query]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.pug',
      }),
    ],
  }
}
