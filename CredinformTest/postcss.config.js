module.exports = {
    plugins: {
        'postcss-import': {},
        'cssnano': {},
        'autoprefixer': {
            browsers: ['last 2 versions', '> 5%'],
        },
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
        },
    },
};