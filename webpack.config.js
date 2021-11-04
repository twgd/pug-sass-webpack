const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
// const { extendDefaultPlugins } = require('svgo')

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
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.pug',
      }),
      new ImageMinimizerPlugin({
        minimizerOptions: {
          // Lossless optimization with custom option
          // Feel free to experiment with options for better result for you
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            // Svgo configuration here https://github.com/svg/svgo#configuration
            // [
            //   'svgo',
            //   {
            //     plugins: extendDefaultPlugins([
            //       {
            //         name: 'removeViewBox',
            //         active: false,
            //       },
            //       {
            //         name: 'addAttributesToSVGElement',
            //         params: {
            //           attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            //         },
            //       },
            //     ]),
            //   },
            // ],
          ],
        },
      }),
    ],
  }
}
