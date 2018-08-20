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
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: 'ts-loader'
            },
        ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        extensions: [
            '.ts'
        ],
        // Webpackで利用するときの設定
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },

    devServer: {
        contentBase: `${__dirname}/dist`,
        port: 5678,
    },

}