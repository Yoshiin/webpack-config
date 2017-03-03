/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

const WriteFilePlugin = require('write-file-webpack-plugin');

const config = require('../lib/');

module.exports = config({
  sourcePath: 'src',
  outputPath: 'builds',
  hot: true,
  linting: true,
  plugins: [
    new WriteFilePlugin(),
  ],
});
