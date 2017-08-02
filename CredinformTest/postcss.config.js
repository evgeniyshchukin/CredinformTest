module.exports = {
    plugins: {
        'postcss-import': {},
        'precss': {},
        //'postcss-sass': {},
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
        },
        'autoprefixer': {
            browsers: ['last 2 versions', '> 5%'],
        },
        'cssnano': {},
        'css-mqpacker': {},
        'csscomb': {},
        'stylelint': {
            failAfterError: true
        }
    },
};