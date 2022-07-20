const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Tu app de fotos de mascotas | Petgram',
      short_name: 'Petgram 🐶',
      description:
        'Con Petgram puedes encontrar fotos de animales domésticos muy bonitos',
      background_color: '#fff',
      theme_color: '#22dad0',
      orientation: 'portrait',
      start_url: './',
      display: 'standalone',
      prefer_related_applications: true,
      icons: [
        {
          src: path.resolve('src/assets/maskable_icon_x96.png'),
          size: '96x96',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/assets/maskable_icon_x128.png'),
          size: '128x128',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/assets/maskable_icon_x192.png'),
          size: '192x192',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/assets/maskable_icon_x384.png'),
          size: '384x384',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/assets/maskable_icon_x512.png'),
          size: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          urlPattern: /https:\/\/(res.cloudinary.com|images.unsplash.com)/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: /https:\/\/petgram-server-firstguzman.vercel.app\//,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  mode: 'development',
  devServer: {
    static: path.join(__dirname, '/dist'),
    compress: true,
    historyApiFallback: true
  }
}
