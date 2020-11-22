const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  /*==============================================================================*/
  mode: "production",
  /*==============================================================================*/
  output: {
    publicPath: "./", // при офлайне "./", для дев-сервера (для несуществующих маршрутов) "/"
  },
  /*==============================================================================*/
});