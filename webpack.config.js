const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Or 'production'
    entry: './src/index.tsx', // Update this if your entry file is different
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },      
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Update this if your HTML file is different
        }),
    ],
    devServer: {
      historyApiFallback: true,
      static: {
          directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 3000,
  }
};
