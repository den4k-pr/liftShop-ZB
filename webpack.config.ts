import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {

  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [],

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  mode: 'development',
};

export default config;
