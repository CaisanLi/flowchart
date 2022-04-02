const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

const plugins = [];
if (IS_PROD) {
    plugins.push('transform-remove-console');
}

plugins.push(['lodash']);

// lazy load zxj-ui
// if your use import on Demand, Use this code
plugins.push(['import', {
    'libraryName': 'zxj-ui',
    'libraryDirectory': 'es',
    'style': true // `style: true` 会加载 less 文件
}]);

module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        [
            '@babel/preset-env',
            {
                'useBuiltIns': 'entry',
                'corejs': 3
            }
        ]
    ],
    plugins
};
