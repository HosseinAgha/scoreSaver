module.exports = config(process.env.NODE_ENV != "production")

function config(devMode) {
  var options = {
    output: {
      path: "./build",
      filename: "[name].bundle.js",
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

  if(devMode == true) {
    options.entry = {
      app: [
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/only-dev-server',
        './src/main.js'
      ]
    } 
  } else {
    options.entry = {
      app: './src/main.js'
    }
  }

  return options;
};
