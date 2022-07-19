// Copyright (c) 2022 KrestUI
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const sharedConfig = require('../../jest.lib.config.cjs');
module.exports = {
  transformIgnorePatterns: [`/node_modules/(?!(camelcase).*.js$)`],
  ...sharedConfig
};
