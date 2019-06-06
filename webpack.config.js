module.exports = {
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.handlebars$/,
        use: ['handlebars-loader'],
      }
    ],
  },
};
