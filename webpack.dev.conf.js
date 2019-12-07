const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const buildWebpackConfig = merge(baseWebpackConfig, {
    // BUILD settings gonna be here
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    devServer: {
        port: 8081,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: []
});

// export buildWebpackConfig
module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})