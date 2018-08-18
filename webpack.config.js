const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }]

            },
            {
                test: /\.(css|sass|scss)$/,
                loader: 'sass-loader',
            },
        ]
    },
    resolve: {
        extensions: [
            '.ts', '.vue'
        ],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: `${__dirname}/dist`,
        port: 8080,
    },

}