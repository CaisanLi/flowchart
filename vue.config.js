/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const GitRevision = new GitRevisionPlugin();
const buildDate = JSON.stringify(new Date().toLocaleString());

function resolve (dir) {
    return path.join(__dirname, dir);
}

// check Git
function getGitHash () {
    try {
        return GitRevision.version();
    } catch (e) {
      console.log(e)
    }
    return 'unknown';
}

const isProd = process.env.NODE_ENV !== 'development';
const port = process.env.port || 19110; // dev port
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// 若对接用户中心须设置前缀 如：'/otherSystem'

// vue.config.js
const prefix = 'template-admin'; // template-admin
const vueConfig = {
    publicPath: '/' + prefix,
    configureWebpack: {
    // webpack plugins
        output: {
            jsonpFunction: prefix + 'JsonpFunction'
        },
        plugins: [
            // Ignore all locale files of moment.js
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new webpack.DefinePlugin({
                APP_VERSION: `"${require('./package.json').version}"`,
                GIT_HASH: JSON.stringify(getGitHash()),
                BUILD_DATE: buildDate
            })
        ],
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                vue$: 'vue/dist/vue.esm.js',
                '@': resolve('src'),
                '@src': path.resolve('src'),
                '@api': resolve('src/api'),
                '@components': path.resolve('src/components'),
                '@views': path.resolve('src/views'),
                '@utils': path.resolve('src/utils')

            }
        }
    },

    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'));

        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule
            .oneOf('inline')
            .resourceQuery(/inline/)
            .use('vue-svg-icon-loader')
            .loader('vue-svg-icon-loader')
            .end()
            .end()
            .oneOf('external')
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'assets/[name].[hash:8].[ext]'
            });

        if (isProd) {
            config.plugin('loadshReplace').use(new LodashModuleReplacementPlugin());
        }
    },

    css: {
        loaderOptions: {
            less: {
                // DO NOT REMOVE THIS LINE
                javascriptEnabled: true
            }
        }
    },
    // 开发环境代理
    devServer: {
        port: port,
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.VUE_APP_BASE_HTTP,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            },
            [process.env.VUE_APP_UAA_API]: {
                target: process.env.VUE_APP_UAA_HTTP,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_UAA_API]: ''
                }
            }
        }
    },
    assetsDir: 'static',
    // disable source map in production
    productionSourceMap: false,
    lintOnSave: undefined,
    pluginOptions: {
        // 引入全局变量
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/less/variables.less')
            ]
        }
    }
};

module.exports = vueConfig;
