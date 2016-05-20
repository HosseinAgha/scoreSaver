module.exports = config(process.env.NODE_ENV != "production")

function config(devMode) {
  var options = {
    entry: [
      'webpack-dev-server/client?http://localhost:8081',
      'webpack/hot/only-dev-server',
      './src'
    ],
    output: {
      path: "./build",
      filename: "bundle.js",
      publicPath: "/build/"
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
  }
  return options;
};
