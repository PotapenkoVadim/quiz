const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const isDev = mode === 'development';

  return {
    mode,
    target: isDev ? 'web' : 'browserslist',
    devtool: isDev ? 'source-map' : false,
    devServer: {
      port: 3000,
      open: true,
      hot: true
    },
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      filename: isDev ? '[name].js' : '[contenthash].js',
      assetModuleFilename: isDev ? 'assets/[name][ext]' : 'assets/[hash][ext]'
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    resolve: {
      extensions: ['.js']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html')
      }),
      new MiniCssExtractPlugin({
        filename: isDev ? '[name].css' : '[contenthash].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require('postcss-preset-env')]
                }
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(woff2?|ttf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]'
          }
        },
        {
          test: /\.(jpe?g|png|webp|gif|svg)$/i,
          use: [{
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true },
              optipng: { enabled: true },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: { interlaced: false },
              webp: { quality: 75 }
            }
          }],
          type: 'asset/resource'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  };
};