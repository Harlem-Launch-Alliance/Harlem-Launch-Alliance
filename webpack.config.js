'use strict';

const webpack = require('webpack');

module.exports = {
  entry: ['./js/bootstrap.min.js', './js/custom.js', './js/jquery.flexslider.js', './js/jquery.js', './js/smoothscroll.js', './js/wow.min.js', './js/imagesloaded.min.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map'
};
