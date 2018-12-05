const path = require('path');

module.exports = {
    entry:  path.resolve(__dirname, 'src/main.js'),
    target: "node",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /(node_modules)/,
                test: /\.js$/
            }
        ]
    }
};
