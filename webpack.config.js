module.exports = {
    entry: "./src",
    output: {
        path: "./built",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                presets: ['es2015']
                }
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel", 
                query:
                  {
                    presets:['react']
                  }
            }
        ]
    }
};