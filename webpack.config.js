const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const PolyfillInjectorPlugin = require('webpack-polyfill-injector');

module.exports = {
  name: 'main',
  entry: {
    main: `webpack-polyfill-injector?${JSON.stringify({
      modules: [
        './src/main.js',
        './src/main.scss'
      ]
    })}!`
  },
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/public/',
    filename: '[name].js'
  },
  context: __dirname,
  mode: 'development', // ? 'production' : 'development',
  devtool: 'source-map', //env == 'prod' ? 'none' : 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [          
          { 
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { 
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/public/fonts/',
          publicPath: 'fonts/'
        }
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/public/assets/img/',
          publicPath: 'assets/img/'
        }
      }
    ]
  },
  plugins: [
    new PolyfillInjectorPlugin({
      singleFile: true,
      polyfills: [
        'Array.prototype.fill',
        'Array.prototype.find',
        'Array.prototype.findIndex',
        'Array.prototype.includes',
        'String.prototype.startsWith',
        'Array.from',
        'Object.entries',
        'Object.values',
        'Object.assign', 
        'fetch',
        'Promise',
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new LiveReloadPlugin({
      protocol: 'http',
      hostname: 'localhost',
      delay: 0,
      appendScriptTag: false
    })
  ],
  resolve: {
    alias: {
      ['~']: path.resolve(__dirname + '/src')
    },
    extensions: ['.js', '.jsx']
  }
}